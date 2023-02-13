import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import "../assets/css/content.css"

function MainContent(){
    return(
        <div>    
            <div id="content-wrapper" className="d-flex flex-column w100">
                <div id="content">
                    <Content/>
                    <Footer/>

                </div>
            </div>    
        </div>
    )

}

export default MainContent;
