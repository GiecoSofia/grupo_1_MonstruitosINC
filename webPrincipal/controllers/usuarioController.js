//const fs = require("fs");
const path = require("path");
let db = require("../database/models"); // accedemos a los modelos (formato de tablas)
let Op = db.Sequelize.Op;

//const baseDatos = path.join(__dirname,"../dataBase/productos.json");
//const productos = JSON.parse(fs.readFileSync(baseDatos, "utf-8"));

const { validationResult } = require("express-validator");

//const User = require('../models/User');

const bcryptjs = require('bcryptjs');
const fetch = require("node-fetch")



const usuarioController = {
    home: async (req, res) => {
        let pedidoDestacados = db.Product.findAll({
            raw: true,
            where: {
                seccion_id: 1
            }
        })

        let pedidoOfertas = db.Product.findAll({
            raw: true,
            where: {
                seccion_id: 2
            }
        })

        Promise.all([pedidoDestacados, pedidoOfertas])
            .then(function ([destacados, ofertas]) {
                res.render("index", { destacados: destacados, ofertas: ofertas })
            })
    },

    register: (req, res) => {
        // fetch("https://apis.datos.gob.ar/georef/api/provincias")
        //     .then(response => response.json())
        //     .then(data => {
        //         res.render("register", { listado: data.provincias })
        //     })

        res.render("register")
    },

    login: (req, res) => res.render("login"),

    processRegister: async (req, res) => {


        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body,

            })

        };

        let userInDB = await db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })

        if (userInDB) {
            return res.render("register", {
                errors: { email: { msg: "Este mail ya esta registrado, podés iniciar sesión directamente" } },
                oldData: req.body

            })
        }

        db.Usuario.create({
            nombreyapellido: req.body.nombreyapellido,
            apodo: req.body.nombreusuario,
            email: req.body.email,
            telefono: req.body.telefono,
            provincia: req.body.provincia,
            localidad: req.body.localidad,
            calle: req.body.calle,
            numero: req.body.numero,
            departamento: req.body.departamento,
            contraseña: bcryptjs.hashSync(req.body.password, 10),
            imagen: req.file.filename
        })

        res.redirect("/login")



    },

    loginProcess: async (req, res) => {
        let userToLogin = await db.Usuario.findOne({
            raw: true,
            where: {
                email: req.body.email
            }
        })

        if (userToLogin) {
            let isOkPassword = bcryptjs.compare(req.body.password, userToLogin.contraseña)
            if (isOkPassword) {
                delete userToLogin.contraseña;
                req.session.userLogged = userToLogin;

                if (req.body.remember) {
                    res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 30 })
                }

                return res.redirect('/user/profile/' + userToLogin.id);
            }

            return res.render('login', {
                errors: {
                    password: {
                        msg: 'Ups! Parece que la constraseña ingresada es incorrecta'
                    }
                }
            })


        }

        return res.render('login', {
            errors: {
                email: {
                    msg: 'El email mencionado es incorrecto'
                }
            }
        });

    },

    userProfile: (req, res) => {
        return res.render("userProfile", {
            user: req.session.userLogged
        })
    },

    editProfile: (req, res) => {
        let user = req.session.userLogged;
        res.render("userProfileEdit", { user: user })
    },

    changeProfile: async (req, res) => {
        let idUser = req.params.id;
        let user = req.session.userLogged;
        let imagenPerfil = user.imagen

        console.log(req.body)
        const usuario = {
            nombreyapellido: req.body.nombreyapellido,
            apodo: req.body.nombreusuario,
            email: req.body.email,
            telefono: req.body.telefono,
            provincia: req.body.provincia,
            localidad: req.body.localidad,
            calle: req.body.calle,
            numero: req.body.numero,
            departamento: req.body.departamento,
            id: idUser,
            imagen: imagenPerfil
        };

        let usuarioEditado = await db.Usuario.update(usuario, {
            where: {
                id: idUser
            }
        })

        if (await usuarioEditado) {
            req.session.userLogged = usuario
        }
        console.log(await req.session.userLogged)
        res.redirect("/")
    },

    deleteProfile: (req, res) => {
        let deleteUser = db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })

        if (deleteUser) {
            req.session.destroy();
        }
        res.redirect("/")
    },


    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
}

module.exports = usuarioController