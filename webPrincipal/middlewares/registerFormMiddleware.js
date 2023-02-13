const {body} = require("express-validator");
const path = require("path");


const registerValidationForm = [
    body("nombreyapellido")
        .notEmpty().withMessage("Olvidaste completar tu nombre").bail()
        .isLength({ min: 2 }).withMessage("Tu nombre debera tener mas de dos caracteres"),
    body("email")
        .notEmpty().withMessage("Olvidaste completar tu email").bail()
        .isEmail().withMessage("Ups! Parece que el formato de este campo es incorrecto"),
    body("telefono")
        .notEmpty().withMessage("Olvidaste completar tu telefono")
        .isLength({ min: 3 }),
    body("provincia").notEmpty().withMessage("Olvidaste elegir tu provincia"),
    body("localidad").notEmpty().withMessage("Olvidaste elegir tu localidad"),
    body("calle").notEmpty().withMessage("Olvidaste completar tu calle"),
    body("numero").notEmpty().withMessage("El campo número no puede quedar vacío. En caso de no tener colocar S/N"),
    body("password")
        .notEmpty().withMessage("Olvidaste completar tu contraseña").bail()
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1,minSymbols: 0}).withMessage("Tu contraseña debe tener al menos 8 caracteres, una mayúscula y un número"),
    body("passwordcheck").custom((value, {req}) => {
        let password = req.body.password;
        let passwordcheck = req.body.passwordcheck;

        if(password != passwordcheck){
            throw new Error ("Ups! Las contraseñas no coinciden")
        } else {
            return true
        }
    }),
    body("imagen").custom((value, {req}) => {

        let file = req.file;
        let acceptedExtension = [".jpg", ".png", ".gif", ".jpeg"];

        if(!file) {
            throw new Error ("Olvidaste subir una imagen")
        } else {
            let fileExtension = path.extname(file.originalname);

            if(!acceptedExtension.includes(fileExtension)){
                throw new Error ("Ups! La imagen que seleccionaste no tiene un formato válido, deben ser " + acceptedExtension)
            }
        }

        return true
    })
    
]

module.exports = registerValidationForm;