const {body} = require("express-validator");
const path = require("path");

const creatValidationForm = [
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
    body("foto").custom((value, {req}) => {
        let file = req.file;
        let acceptedExtension = [".jpg", ".png", ".jpeg", ".gif"];
        
        if (!file) { 
            throw new Error ("Tienes que subir una imagen")
        } else {

            let fileExtension = path.extname(file.originalname);

            if(!acceptedExtension.includes(fileExtension)){
                throw new Error ("Las extensiones de archivos permitdas son " + acceptedExtension)
            }
    
        }
        return true;
})    
]


module.exports = creatValidationForm;
