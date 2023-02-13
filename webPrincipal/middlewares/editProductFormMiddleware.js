const {body} = require("express-validator");
const path = require("path");


const editValidationForm = [
    body("nombre")
    .notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío").bail()
    .isLength({ min: 5 }).withMessage("El nombre debe tener al menos 5 caracteres"),
    body("categoria").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío"),
    body("subcategoria").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío"),
    body("precio").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío"),
    body("talles").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío"),
    body("precio").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío"),
    body("seccion").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío"),
    body("colores").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío"),
    body("descripcion").isLength({min: 20}).withMessage("La descripcion debe tener al menos 20 caracteres"),
    body("ancho").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío"),
    body("largo").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío"),
    body("alto").notEmpty().withMessage("Olvidaste completar este campo, no puede quedar vacío") ,
]

module.exports = editValidationForm;