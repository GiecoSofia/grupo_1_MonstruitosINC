import React from "react";
import { useState, useEffect, useRef } from 'react'
import "../assets/css/content.css"



function LastProduct() {

    const [ultimoProducto, setUltimoProducto] = useState({});

    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
            .then((response) => response.json())
            .then((data) => {
                let indice = data.products.length - 1
                let producto = data.products[indice]
                setUltimoProducto(producto)
                })
            .catch((error) => {
                console.log(error);
                });
    }, [])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 text">Ultimo Producto Cargado: {ultimoProducto.name}</h5>
                </div>

                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 20 + 'rem' }} src={ultimoProducto.imagen} alt=" Ultimo Producto " />
                    </div>
                    <p>{ultimoProducto.descripcion}</p>
                </div>
            </div>
        </div>
    )
}



export default LastProduct;