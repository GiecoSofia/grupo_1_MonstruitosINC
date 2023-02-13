module.exports = function(sequelize, dataTypes) {

    let alias = "Seccion";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: dataTypes.STRING(25)
        }
    }

    let config = {
        tableName: "seccion",
        timestamps: false
    }

    let Seccion =   sequelize.define(alias,cols,config);

    Seccion.associate = function(models){
        Seccion.hasMany(models.Product,{
            as: "producto", // de la seccion pedimos todos los productos dentro de la misma
            foreignKey: "seccion_id"
        })
    }

    return Seccion
}