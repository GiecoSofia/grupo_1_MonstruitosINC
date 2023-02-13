let botonFormulario = document.querySelector(".boton-formulario");

window.addEventListener("load", () => {
let formulario = document.querySelector('.formulario');
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        let errores = [];

let nombre = document.querySelector("#nombreapellido");
   if(nombre.value == ""){
        errores.push("Olvidaste completar tu nombre y apellido");
        nombre.classList.add("is-invalid");

    } else if (nombre.value.length < 5){
        errores.push("El nombre debe tener al menos 5 caracteres");
        nombre.classList.add("is-valid");

    } else {
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
    } 

let foto = document.querySelector("#imagen");
    if(foto.value == ""){
        errores.push("Olvidaste subir una imagen, que debe estar en formato .jpg, .jpeg, .gif, .png");
        foto.classList.add("is-invalid");

    } else {
        foto.classList.add("is-valid");
        foto.classList.remove("is-invalid")
    }

let email = document.querySelector("#email");
    if(email.value == ""){
        errores.push("Debes ingresar tu email");
        email.classList.add("is-valid");

    } else {
        email.classList.add("is-valid");
        e.classList.remove("is-invalid");
    }

let provincia = document.querySelector("#provincia");
    if(provincia.value == ""){
        errores.push("Debes seleccionar una provincia");
        provincia.classList.add("is-valid");

    } else {
        provincia.classList.add("is-valid");
        provincia.classList.remove("is-invalid");
    }

let localidad = document.querySelector("#localidad");
    if(localidad.value == ""){
        errores.push("Debes seleccionar una localidad");
        localidad.classList.add("is-valid");

    } else {
        localidad.classList.add("is-valid");
        localidad.classList.remove("is-invalid");
    }

let telefono = document.querySelector("#telefono");
    if(telefono.value == ""){
        errores.push("Olvidaste completar tu telefono");
        telefono.classList.add("is-valid");

    } else {
        telefono.classList.add("is-valid");
        telefono.classList.remove("is-invalid");
    }

let direccion = document.querySelector("#direccion");
    if(direccion.value == ""){
    errores.push("Olvidaste completar tu direccion, en caso de no tener numero colocar S/N");
    direccion.classList.add("is-valid");

    } else {
    direccion.classList.add("is-valid");
    direccionclassList.remove("is-invalid");
    }

let contraseña = document.querySelector("#password");
    if (contraseña.value.length < 8){
        errores.push("La contraseña debe tener al menos 8 caracteres, una mayuscula y un numero");
        contraseña.classList.add("is-valid");
    
        } else if (contraseña.value == ""){
            errores.push("Olvidaste completar tu contraseña");
        contraseña.classList.add("is-valid");
        }
        else{
            contraseña.classList.add("is-valid");
            contraseña.classList.remove("is-invalid");
        }

    if(errores.length > 0){
        let ulErrores = document.querySelector("div.errores ul");

        for ( let i=0; i < errores.length; i++ ){

            ulErrores.innerHTML += '<li>' + errores[i] + '</li>' 
        }  

    } else {
        alert('Perfecto! Tu cuenta se creo correctamente');

        formulario.submit();
    }   


})
})