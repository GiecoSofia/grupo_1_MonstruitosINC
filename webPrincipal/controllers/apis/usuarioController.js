const db = require('../../database/models');
const user = require('../../database/models/Usuario')

const apiUsersController = {
    list: async (req,res) => {
        try {
            let usuarios = await db.Usuario.findAll();
            let usuariosDetalle = [];
    
            usuarios.forEach(usuario => {
                usuariosDetalle.push({
                    id: usuario.id,
                    name: usuario.nombre,
                    email: usuario.email,
                    detail: `/apis/users/${usuario.id}`
                })
            })
    
            let response = {
                count: usuarios.length,
                users: usuariosDetalle
            }
            res.json(response);
            
        } catch (error) {
            console.log(error)
        }
    },

    detail: async (req,res) => {
        try {
            let id = req.params.id;
            let usuario = await db.Usuario.findByPk(id, { raw: true });

            let response = {
                id: usuario.id,
                nombre: usuario.nombreyapellido,
                apodo: usuario.apodo,
                email: usuario.email,
                imagen: `/images/users/${usuario.imagen}`,
            }
            res.json(response)
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = apiUsersController;