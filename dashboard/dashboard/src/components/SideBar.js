import React from "react";
import logo from "../assets/images/logosinfondo.png"
import user from "../assets/images/user.png"
import "../assets/css/sideBar.css"


function SideBar() {
    return (
        <div>
            <ul className="navbar-nav bg sidebar sidebar-dark accordion" id="accordionSidebar">

                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <div className="justify-content-center display-flex">
                            <img className="img-profile rounded-circle" src={user} alt="John Doe" width="50" />
                            <span className="mr-2 d-none d-lg-inline small user">John Doe</span>
                        </div>
                    </a>
                </li>

                <hr className="sidebar-divider" />

                <div className="display-flex">
                    <li>
                        <a href="/" id="messagesDropdown">
                            <i className="fas fa-envelope fa-fw icon icon-navar"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/" id="alertsDropdown">
                            <i className="fas fa-bell fa-fw icon icon-navar"></i>
                        </a>
                    </li>
                </div>

                <hr className="sidebar-divider d-none d-md-block" />

                <a className="d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="logo" src={logo} alt="MonstruitosINC" />
                    </div>
                </a>

                <hr className="sidebar-divider" />

                <li>
                    <a className="links" href="/">
                        <i className="fas fa-tachometer-alt icon"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <hr className="sidebar-divider" />

                <div className="links text-align-left underline">Actions</div>

                <li>
                    <a className="links text-align-left" href="/productlist">
                        <i className="fas fa-clipboard-list icon"></i>
                        <span>Listado de Productos</span>
                    </a>
                </li>

                <li>
                    <a className="links text-align-left" href="/userList">
                        <i className="fas fa-clipboard-list icon"></i>
                        <span>Listado de Usuarios</span>
                    </a>
                </li>

                <hr className="sidebar-divider" />
            </ul>
        </div>
    )
}


export default SideBar