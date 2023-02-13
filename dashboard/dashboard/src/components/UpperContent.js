import React from "react";
import DataCard from "./DataCard";
import { useState, useEffect, useRef } from "react";
import "../assets/css/content.css"


function UpperContent() {

    const [cantProductos, setCantProductos] = useState();
    const [cantUsuarios, setCantUsuarios] = useState();
    const [cantCategorias, setCantCategorias] = useState();
    const [cantOfertas, setCantOfertas] = useState();

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
            .then(response => response.json())
            .then(data => {
                setCantProductos(data.count)
            });

        fetch("http://localhost:3001/api/users")
            .then(response => response.json())
            .then(data => {
                setCantUsuarios(data.count)
            });


        fetch("http://localhost:3001/api/products")
            .then(response => response.json())
            .then(data => {
                setCantCategorias(data.totalCategorias)
            })

        fetch("http://localhost:3001/api/products")
            .then(response => response.json())
            .then(data => {
                setCantOfertas(data.countByCategory.Ofertas)
            })
        
    },[])


    let products = {
        title: "Cantidad de Productos",
        color: "1",
        cuantity: cantProductos,
        icon: "fa-clipboard-list"
    }

    let users = {
        title: "Cantidad de Usuarios",
        color: "2",
        cuantity: cantUsuarios,
        icon: "fa-solid fa-users"
    }

    let categorias = {
        title: "Cantidad de Categorias",
        color: "3",
        cuantity: cantCategorias,
        icon: "fa-clipboard-list"
    }

    let ofertas ={
        title: "Cantidad de Productos en Oferta",
        color: "4",
        cuantity: cantOfertas,
        icon: "fa-regular fa-piggy-bank"
    }

    const cardData = [products, users, categorias, ofertas];
    return (
        <div>
            <div className="row margin">
                {
                    cardData.map((info, i) => {
                        return <DataCard {...info} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default UpperContent;
