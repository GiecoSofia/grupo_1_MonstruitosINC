//const path = require('path');
//const fs= require('fs');
//const pathDataBase= path.join(__dirname, '../dataBase/productos.json');
//const dataBase= JSON.parse(fs.readFileSync(pathDataBase, 'utf-8'));
//let productos = require("../dataBase/productos.json")

const db = require('../database/models');

const { Op } = require("sequelize");
const {validationResult} = require("express-validator");


const productController = {
    productView: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function(producto){
                res.render("productDetail", {producto:producto})
            }) 
    },


    productCart: (req, res) => res.render("productCart"),
    

    products: (req,res) => {
        db.Product.findAll({

        }).then(function(productos){
                res.render("products", {productos:productos})
            })      
    },
    
    
}



module.exports = productController