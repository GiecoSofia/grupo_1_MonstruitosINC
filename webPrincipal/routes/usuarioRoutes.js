const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

const path = require("path");
const multer = require("multer");

const {body} = require("express-validator");

const bcryptjs = require('bcryptjs');

const registerValidationForm = require("../middlewares/registerFormMiddleware");
const logDBMiddleware = require('../middlewares/lodDBMiddleware');
const guestMiddleware = require("../middlewares/guestMiddleware");
const userLogedMiddleware = require('../middlewares/userLoggedMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const administradorController = require("../controllers/administradorController");

//storage usuarios
const storage  = multer.diskStorage({ 
    destination: (req, file, cb) =>{
        cb(null, "./public/images/users")
    }, 
    filename: (req, file, cb) =>{ 
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null,fileName)
    }
});

const uploadFile = multer({storage});



router.get("/", usuarioController.home );

router.get("/register", guestMiddleware, usuarioController.register);
router.post("/register/", uploadFile.single("imagen"), registerValidationForm,logDBMiddleware, usuarioController.processRegister);

router.get("/login", guestMiddleware, usuarioController.login);
router.post("/login", usuarioController.loginProcess);

router.get("/user/profile/:id", authMiddleware, usuarioController.userProfile)

router.get("/user/profile/edit/:id", authMiddleware, usuarioController.editProfile);
router.put("/user/profile/edit/:id/", authMiddleware, usuarioController.changeProfile);
router.delete("/user/profile/delete/:id",authMiddleware, usuarioController.deleteProfile);

router.get("/logout/", usuarioController.logout)



module.exports = router