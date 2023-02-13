let form = document.querySelector(".nuevo-producto");
let nombre = document.querySelector("#nombre");
let categoria = document.querySelector("#categoria");
let subcategoria = document.querySelector("#subcategoria");
let foto = document.querySelector("#foto");
let precio = document.querySelector("#precio");
let seccion = document.querySelector("#seccion");
let talles = document.querySelector("#talles");
let colores = document.querySelector("#colores");
let descripcion = document.querySelector("#descripcion");
let ancho = document.querySelector("#ancho");
let largo = document.querySelector("#largo");
let alto = document.querySelector("#alto");
let botonFormulario = document.querySelector(".boton-formulario")



window.addEventListener("load", function(){

    form.addEventListener("submit", function(e){
        e.preventDefault();

        let errores = [];

       if(nombre.value == ""){
            errores.push("Olvidaste completar el nombre");
            nombre.classList.add("is-invalid");

        } else if (nombre.value.length < 5){
            errores.push("El nombre debe tener al menos 5 caracteres");
            nombre.classList.add("is-valid");

        } else {
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        }

        if(categoria.value == 0){
            errores.push("Olvidaste seleccionar una categoria");
            categoria.classList.add("is-invalid");

        } else {
            categoria.classList.add("is-valid");
            categoria.classList.remove("is-invalid");
        }

        if(subcategoria.value == 0){
            errores.push("Olvidaste seleccionar una subcategoria");
            subcategoria.classList.add("is-invalid");

        } else {
            subcategoria.classList.add("is-valid");
            subcategoria.classList.remove("is-invalid");
        }
        
        if(precio.value == ""){
            errores.push("Olvidaste completar el precio");
            precio.classList.add("is-invalid");

        } else {
            precio.classList.add("is-valid");
            precio.classList.remove("is-invalid");

        }

        if(seccion.value == 0){
            errores.push("Olvidaste seleccionar una seccion");
            seccion.classList.add("is-invalid");

        } else {
            seccion.classList.add("is-valid");
            seccion.classList.remove("is-invalid");

        }

        if(talles.value == ""){
            errores.push("Olvidaste completar los talles");
            talles.classList.add("is-invalid");

        } else {
            talles.classList.add("is-valid");
            talles.classList.remove("is-invalid");

        }

        if(colores.value == ""){
            errores.push("Olvidaste completar los colores");
            colores.classList.add("is-invalid");

        } else {
            colores.classList.add("is-valid");
            colores.classList.remove("is-invalid");

        }

        if(descripcion.value.length < 20){
            errores.push("La descripcion debe tener al menos 20 caracteres");
            descripcion.classList.add("is-invalid");
            
        } else {
            descripcion.classList.add("is-valid");
            descripcion.classList.remove("is-invalid");
        }

        if(ancho.value == ""){
            errores.push("Olvidaste completar el ancho de la prenda");
            ancho.classList.add("is-invalid");

        } else {
            ancho.classList.add("is-valid");
            ancho.classList.remove("is-invalid");
        }

        if(largo.value == ""){
            errores.push("Olvidaste completar el largo de la prenda");
            largo.classList.add("is-invalid");

        } else {
            largo.classList.add("is-valid");
            largo.classList.remove("is-invalid");
        }

        if(alto.value == ""){
            errores.push("Olvidaste completar el alto de la prenda");
            alto.classList.add("is-invalid");

        } else {
            alto.classList.add("is-valid");
            alto.classList.remove("is-invalid");
        }


        if(errores.length > 0){
            let ulErrores = document.querySelector("div.errores ul");
            ulErrores.classList.add("lista-errores");

            for ( let i=0; i < errores.length; i++ ){

                ulErrores.innerHTML += '<li>' + errores[i] + '</li>' 
            }  

        } else {
            alert("Los cambios se guardaron correctamente");

            form.submit();
        }   


    })
})