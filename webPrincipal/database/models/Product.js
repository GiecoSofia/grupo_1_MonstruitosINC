module.exports = function(sequelize, dataTypes) { // le explicamos a sequelize nuestras tablas

    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(50),
        },
        categoria_id: {
            type: dataTypes.INTEGER
        },
        subcategoria_id: {
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING(80)
        },
        talle: {
            type: dataTypes.INTEGER
        },
        color: {
            type: dataTypes.STRING(50)
        },
        precio: {
            type: dataTypes.DECIMAL
        },
        descuento: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.TEXT
        },
        seccion_id: {
            type: dataTypes.INTEGER
        },
        ancho: {
            type: dataTypes.INTEGER
        },
        largo: {
            type: dataTypes.INTEGER
        },
        alto: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "product",
        timestamps: false
    }

    let Product = sequelize.define(alias,cols,config);

    Product.associate = function(models){
        Product.belongsTo(models.Categoria, {
            as: "categoria", // del producto pedimos la categoria
            foreignKey: "categoria_id",
        });

        Product.belongsTo(models.Subcategoria, {
            as: "subcategoria", // del producto pedimos la subcategoria
            foreignKey: "subcategoria_id",
        });

        Product.belongsTo(models.Seccion,{
            as: "seccion", // del producto pedimos la seccion
            foreignKey: "seccion_id"
        });

        Product.belongsToMany(models.Carrito,{
            as: "carritos", //del producto pedimos en cuantos y en que carritos esta
            foreignKey: "product_id",
            through: "carrito_product",
        })


    }

    return Product
}