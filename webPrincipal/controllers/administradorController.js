//const fs = require("fs");
//const baseDatos = path.join(__dirname,"../dataBase/productos.json");
//const productos = JSON.parse(fs.readFileSync(baseDatos, "utf-8"));
const path = require("path");

const {validationResult} = require("express-validator");

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");



const administradorController = {
    loginAdministrador: (req, res) => res.render("loginAdministrador"),

    loginProcess:(req,res) =>{
        let amdUser = {
            email: "administrador@gmail.com",
            password: "Administrador1234"
        }

        let admLogin = amdUser;

        if(req.body.emailadm === admLogin.email){
            let isOkThePassword = admLogin.password == req.body.passwordadm;

            if(isOkThePassword){
                delete admLogin.password;
                req.session.admLogged = admLogin

                if(req.body.rememberadm){
                    res.cookie("admEmail", req.body.emailadm,{maxAge: (1000 * 60) * 30})
                }

                return res.redirect("/")
            }

            return res.render('loginAdministrador', {
                errors: {
                    passwordadm: {
                        msg: 'Ups! Parece que la constraseña ingresada es incorrecta'
                    }
                }
            })
    
        }

        
        return res.render('loginAdministrador', {
			errors: {
				emailadm: {
					msg: 'El email mencionado es incorrecto'
				}
			}
		});

       
    },

    logout: (req,res) => {
        res.clearCookie("admEmail");
        req.session.destroy();

        return res.redirect("/")
    },

    newProduct: (req, res) => {
        
        res.render("newProduct")
    },

    createProduct: (req, res) => { 
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {

            return  res.render("newProduct", {errors: resultValidation.mapped(), oldData: req.body })
        }

        db.Product.create({
            nombre: req.body.nombre,
            categoria_id: req.body.categoria,
            subcategoria_id: req.body.subcategoria,
            precio: req.body.precio,
            seccion_id: req.body.seccion,
            descuento: req.body.descuento,
            talle: req.body.talles,
            color: req.body.colores,
            descripcion: req.body.descripcion,
            ancho: req.body.ancho,
            largo: req.body.largo,
            alto: req.body.alto,
            imagen: req.file.filename
        })

            
        res.redirect("/products")
           
    },

    editForm: (req, res) => {
        let pedidoProducto = db.Product.findByPk(req.params.id); 

        let pedidoCategorias = db.Categoria.findAll(); 

        let pedidoSubcategorias = db.Subcategoria.findAll();

        let pedidoSeccion = db.Seccion.findAll(); 

        Promise.all([pedidoProducto, pedidoCategorias, pedidoSubcategorias, pedidoSeccion])
            .then(function([producto, categorias, subcategorias, secciones]){
                res.render("editProduct", {
                    producto:producto,
                    categorias: categorias,
                    subcategorias:subcategorias,
                    secciones:secciones
                })
            })      
            
    },

    changeProduct: (req,res) =>{
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {

            let pedidoProducto = db.Product.findByPk(req.params.id); 
            let pedidoCategorias = db.Categoria.findAll(); 
            let pedidoSubcategorias = db.Subcategoria.findAll();
            let pedidoSeccion = db.Seccion.findAll(); 

            Promise.all([pedidoProducto, pedidoCategorias, pedidoSubcategorias, pedidoSeccion])
                .then(function([producto, categorias, subcategorias, secciones]){
                    res.render("editProduct", {
                    producto:producto,
                    categorias: categorias,
                    subcategorias:subcategorias,
                    secciones:secciones,
                    errors: resultValidation.mapped(), oldData: req.body 
                })
            })      

        } else {
            let idProducto = req.params.id;
            let productoAEditar = db.Product.findByPk(idProducto);
    
            let imagenACargar;
            if(req.file == undefined){
                imagenACargar = productoAEditar.imagen
            } else {
            imagenACargar = req.file.filename
            }
            
            db.Product.update({
                nombre: req.body.nombre,
                categoria_id: req.body.categoria,
                subcategoria_id: req.body.subcategoria,
                precio: req.body.precio,
                seccion_id: req.body.seccion,
                descuento: req.body.descuento,
                talle: req.body.talles,
                color: req.body.colores,
                descripcion: req.body.descripcion,
                ancho: req.body.ancho,
                largo: req.body.largo,
                alto: req.body.alto,
                imagen: imagenACargar
            }, {
                where: {
                    id: idProducto
                }
            })
    
            res.redirect("/");
        }

    },

    deleteProduct: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/")

    },
      
}


module.exports = administradorController