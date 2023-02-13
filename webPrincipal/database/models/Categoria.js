module.exports = function(sequelize, dataTypes) {

    let alias = "Categoria";

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
        tableName: "categoria",
        timestamps: false
    }

    let Categoria =   sequelize.define(alias,cols,config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Product, {
            as: "productos", // de una categoria pedimos todos los productos dentro de la misma
            foreignKey: "categoria_id",
        })
    }

    return Categoria
}