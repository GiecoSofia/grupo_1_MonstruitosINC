module.exports = function(sequelize, dataTypes) {

    let alias = "Subcategoria";

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
        tableName: "subcategoria",
        timestamps: false
    }

    let Subategoria =   sequelize.define(alias,cols,config);

    Subategoria.associate = function(models){
        Subategoria.hasMany(models.Product, {
            as: "productos", // de una subcategoria pedimos todos los productos de la misma
            foreignKey: "subcategoria_id",
        });
    }


    return Subategoria
}