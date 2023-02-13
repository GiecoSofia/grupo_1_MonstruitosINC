const express = require("express");
const router = express.Router();

const administradorController = require("../controllers/administradorController");

const path = require("path");
const multer = require("multer");

const {body} = require("express-validator");

const admMiddleware  = require("../middlewares/admMiddleware");
const authAdmMiddleware = require("../middlewares/authAdmMiddleware");

//storage imagen de productos
const storage  = multer.diskStorage({ 
    destination: (req, file, cb) =>{
        cb(null, "./public/images/products")
    }, 
    filename: (req, file, cb) =>{ 
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null,filename)
    }
});

const uploadFile = multer({storage});

const creatValidationForm = require("../middlewares/newProductsFormMiddleware");
const editValidationForm = require("../middlewares/editProductFormMiddleware");


router.get("/loginAdministrador", admMiddleware, administradorController.loginAdministrador);
router.post("/loginAdministrador", administradorController.loginProcess);

router.get("/newProduct", authAdmMiddleware, administradorController.newProduct);
router.post("/newProduct/", uploadFile.single("foto"), creatValidationForm, administradorController.createProduct);

router.get("/editProduct/:id",authAdmMiddleware, administradorController.editForm);
router.put("/editProduct/:id/", authAdmMiddleware, editValidationForm, administradorController.changeProduct);
router.delete("/productDetail/:id/", authAdmMiddleware, administradorController.deleteProduct);

router.get("/logoutadm/", administradorController.logout);

module.exports = router