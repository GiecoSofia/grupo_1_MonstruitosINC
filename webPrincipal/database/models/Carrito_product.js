module.exports = function(sequelize, dataTypes){

    let alias = "Carrito_product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        carrito_numerodecompra: {
            type: dataTypes.INTEGER,
            references:{
                model: "Carrito",
                key: "numerodecompra"
            }
        },
        product_id:{
            type: dataTypes.INTEGER,
            references:{
                model: "Product",
                key: "id"
            }
        },
        catidad_producto: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "carrito_product", // nombre de la tabla
        timestamps: false
    };

    let Carrito_product = sequelize.define(alias,cols,config);


    Carrito_product.associate = function(models){
        Carrito_product.belongsTo(models.Product, { 
            foreignKey: "product_id"
        });

        Carrito_product.belongsTo(models.Carrito,{ 
            foreignKey: "carrito_numerodecompra"
        })
    }

    return Carrito_product
}