const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");



const apiControllers = {
    getAll: async (req, res) => {
        let productos = await db.Product.findAll({
            include: [{ association: 'categoria' }],
        })
        let categorias = await db.Categoria.findAll({
            include: [{ association: 'productos' }]
        });
        let subcategoria = await db.Subcategoria.findAll({
            include:[{ association: 'productos' }]
        })

        let countByCategory = {
            Bebes: categorias[0].productos.length,
            Nenes: categorias[1].productos.length,
            Nenas: categorias[2].productos.length,
            Ofertas: categorias[3].productos.length
        }
        
        let totalCategorias = categorias.length;

        let nombreCategorias = [];

        categorias.forEach(categorias => {
            nombreCategorias.push(categorias.titulo)
        })

        let nombreSubcategoria = [];

        subcategoria.forEach(subcategoria => {
            nombreSubcategoria.push(subcategoria.titulo)
        })

        let detalleProducto = [];

        productos.forEach(products => {
            detalleProducto.push({
                id: products.id,
                name: products.nombre,
                descripcion: products.descripcion,
                imagen: "http://localhost:3001/images/products/" + products.imagen,
                detail: `/api/products/${products.id}`
            })
        })

        let pedido = {
                count: productos.length,
                countByCategory: countByCategory,
                totalCategorias: totalCategorias,
                nombreCategorias: nombreCategorias,
                nombreSubcategoria: nombreSubcategoria,
                url: '/api/products',
                status: 200,
                products: detalleProducto,
            }
        res.json(pedido);

    },

    detail: async (req, res) => {
        let productos = await db.Product.findByPk(req.params.id, { raw: true });
        let categorias = await db.Categoria.findByPk(productos.categoria_id, { raw: true });
        let carrito = await db.Carrito.findByPk(productos.carritos, { raw: true })
        let pedido = {
            meta: {
                    data: productos,
                    categorias: categorias,
                    carrito: carrito,
                    urlImagen: `/images/products/${productos.imagen}`,
                    status: 200
                }
               
            } 
            res.json(pedido);
        }
    }


module.exports = apiControllers
