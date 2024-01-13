import React from "react";
import  "../../Assets/scss/header.scss"
import imgLogo from "../../Assets/img/logo2.png"

const Container = () => {
    return (
        <>
            <div className="conteiner-fluid" id="conteiner">
                <div className="row col-6 justify-content-center">
                    <img src={imgLogo} alt="" id="logo"/>
                </div>
                <div className="col-6" id="col2">
                    <button>aaa</button>
                </div>
            </div>
        </>
    )
}

export default Container;