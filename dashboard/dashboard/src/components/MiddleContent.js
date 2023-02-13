import React from "react";
import LastProduct from "./LastProduct";
import Categorias from "./Categorias";
import "../assets/css/content.css"

function MiddleContent(){
    return(
        <div className="row bg-content">
            <LastProduct />
            <Categorias />
            
            
        </div>
    )
}

export default MiddleContent;
