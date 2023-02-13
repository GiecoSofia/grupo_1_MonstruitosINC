import React from "react";
import { useState, useEffect, useRef } from 'react';
import "../assets/css/content.css"


function ProducList() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/products/")
            .then(response => response.json())
            .then(data => {
                setProductos(data.products)
            })

    }, [])

    return (
        <div className="list bg-list">
            <h5 className=" text-tilte">
                Listado de Productos
            </h5>
            <div className="card">
                <div className="margin-card row bg-list ">
                    {
                        productos.map((producto, i) => {
                            return (
                                <div className="col-lg-3 mb-6 card-design">
                                    <div className="text">
                                        <div className=" bg-card">Nombre: {producto.name}</div>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProducList;
