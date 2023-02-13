module.exports = function(sequelize, dataTypes) {

    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreyapellido:{
            type: dataTypes.STRING(40)
        },
        apodo:{
            type: dataTypes.STRING(25)
        },
        imagen: {
            type:dataTypes.STRING(80)
        },
        email:{
            type: dataTypes.STRING(55)
        },
        telefono:{
            type: dataTypes.INTEGER
        },
        provincia:{
            type: dataTypes.TEXT
        },
        localidad:{
            type: dataTypes.TEXT
        },
        calle:{
            type: dataTypes.TEXT
        },
        numero:{
            type: dataTypes.INTEGER
        },
        departamento:{
            type: dataTypes.TEXT
        },
        contraseña:{
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tableName: "usuario",
        timestamps: false
    }

    let Usuario =   sequelize.define(alias,cols,config);

    Usuario.associate = function(models){
        Usuario.hasMany(models.Carrito,{
            as: "carritos", // del usuario pedimos todos los carritos que hizo
            foreignKey: "usuario_id"
        })
    }

    return Usuario
}