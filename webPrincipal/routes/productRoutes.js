const express = require("express")
const router = express.Router();
const productController = require("../controllers/productController")



router.get("/productDetail/:id", productController.productView);

router.get("/productCart", productController.productCart);

router.get("/products", productController.products);






module.exports = router