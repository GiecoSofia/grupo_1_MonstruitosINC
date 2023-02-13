import React from "react";
import { useState, useEffect, useRef } from 'react';
import "../assets/css/content.css"

function Categorias() {
    const [categorias, setCategorias] = useState({});
    const [subcategorias, setSubategorias] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/products/")
            .then(response => response.json())
            .then(data => {
                setCategorias(data.countByCategory)
            })

        fetch("http://localhost:3001/api/products/")
            .then(response => response.json())
            .then(data => {
                console.log(data.nombreSubcategoria)
                setSubategorias(data.nombreSubcategoria)
            })

    }, [])

    return (

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 text">
                        Productos por Categoria
                    </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card text">
                                <div className="card-body bg-card">Bebés: {categorias.Bebes}</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card text">
                                <div className="card-body bg-card">Nenes: {categorias.Nenes}</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card text">
                                <div className="card-body bg-card">Nenas: {categorias.Nenas}</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card text">
                                <div className="card-body bg-card">Ofertas: {categorias.Ofertas}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-header py-3">
                <h5 className="m-0 text">
                    Subcategorias
                </h5>
            </div>

            <div className="card-body bgcard card">
                <div className="row">
                    <div className="col-lg-6 mb-1">
                        <div className="card text">
                            <div className="card-body bg-card ">{subcategorias[0]}</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text">
                            <div className="card-body bg-card">{subcategorias[1]}</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text">
                            <div className="card-body bg-card">{subcategorias[2]}</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text">
                            <div className="card-body bg-card">{subcategorias[3]}</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text">
                            <div className="card-body bg-card">{subcategorias[4]}</div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card text">
                            <div className="card-body bg-card">{subcategorias[5]}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}


export default Categorias;
