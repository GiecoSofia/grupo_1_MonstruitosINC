import React from "react";
import UpperContent from "./UpperContent";
import MiddleContent from "./MiddleContent";
import "../assets/css/content.css"

function Content() {
    return (

        <div className="container-fluid bg-content navbar-light">
            <UpperContent />
            <MiddleContent />
        </div>

    )
}


export default Content;
