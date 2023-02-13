import React from "react";
import { useState, useEffect, useRef } from 'react';
import "../assets/css/sideBar.css";

function UserList() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/users")
            .then(response => response.json())
            .then(data => {
                console.log(data.users)
                setUsuarios(data.users)
            })

    }, [])

    return (
        <div className="list bg-list">
            <h5 className=" text-tilte">
                Listado de Usuarios
            </h5>
            <div className="card">
                <div className="margin-card row bg-list ">
                    {
                        usuarios.map((usuario, i) => {
                            return (
                                <div className="col-lg-6 mb-4 card-design">
                                    <div className="card text">
                                        <div className="card-text bg-card">ID Usuario:{usuario.id}</div>
                                        <div className="card-text bg-card">Mail Usuario:{usuario.email}</div>
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

export default UserList;
