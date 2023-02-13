const { json } = require('express');
const fs = require('fs');


const User = {
    fileName: './info/user.json',

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    

    findAll: function(){
       return this.getData();
    },

    generateId: function(){
        let todosLosUsuarios = this.findAll();
        let ultimoUsuario = todosLosUsuarios.pop();
        if(ultimoUsuario){
            return ultimoUsuario.id + 1;  
        }
        return 1;  
        
    },


    findByPK: function(id){
        let todosLosUsuarios = this.findAll();
        let usuarioEncontrado = todosLosUsuarios.find(oneUser => oneUser.id === id);
        return usuarioEncontrado;
    },


    findByField: function(field, text){
        let todosLosUsuarios = this.findAll();
        let usuarioEncontrado = todosLosUsuarios.find(oneUser => oneUser[field] === text);
        return usuarioEncontrado;
    },

    create: function(userData){
        let todosLosUsuarios = this.findAll();

        let nuevoUsuario = {
            id: this.generateId(),
            ...userData
        }

        todosLosUsuarios.push(nuevoUsuario);
        fs.writeFileSync(this.fileName, JSON.stringify(todosLosUsuarios, 'null', ' '));
        return nuevoUsuario
    },
   

    delete: function(id){
        let todosLosUsuarios = this.findAll();

        let finalUsuarios = todosLosUsuarios.filter(oneUser => oneUser.id !== id);

        fs.writeFileSync(this.fileName, JSON.stringify(finalUsuarios, 'null', ' '));

        return true;
    }
}



module.exports = User;