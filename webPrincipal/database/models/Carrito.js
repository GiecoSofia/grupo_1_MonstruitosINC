module.exports = function(sequelize, dataTypes) {

    let alias = "Carrito";

    let cols = {
        numerodecompra: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_id:{
            type: dataTypes.INTEGER
        },
        total:{
            type: dataTypes.DECIMAL
        },
        fecha_compra:{
            type: dataTypes.DATE
        },
        tipo_envio:{
            type: dataTypes.STRING(15)
        }
    }

    let config = {
        tableName: "carrito",
        timestamps: false
    }

    let Carrito =   sequelize.define(alias,cols,config);
    

    Carrito.associate = function(models){
        Carrito.belongsTo(models.Usuario,{
            as: "usuario", // del carrito pedimos que usuario lo realizo
            foreignKey: "usuario_id"
        });

        Carrito.belongsToMany(models.Product,{
            as: "productos", //del carrito pedimos todos los productos que hay
            foreignKey: "carrito_numerodecompra",
            through: "carrito_product",
        })
    }

    return Carrito
}