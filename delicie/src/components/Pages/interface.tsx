import React from "react";
import  "../../Assets/scss/header.scss"
import imgLogo from "../../Assets/img/logo2.png";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <Container fluid className="fundo" >
                <div className="card">
                    <Row>
                        <Col lg={6} xs= {{order: "first"}} id="container1">
                            <img src={imgLogo} alt="" id="logo"/>
                        </Col>
                        <Col lg={4} xs= {{order: "last"}} id="col2">
                            <Stack gap={3} className="contBtn">
                                <Button  className="btn" variant= "dark" size="lg"> <Link to="/home" className="Link">Delivery Deliciê</Link></Button>
                            <Button className="btn" variant= "dark" size="lg" ><Link to="" className="Link">Localização Deliciê</Link></Button> {''}
                                <Button className="btns" variant= "dark" size="lg" > <Link to="/sobreNos" className="Link">Quem Somos</Link></Button> {''}
                            </Stack>
                            <div className="icons">
                                <a href="https://www.instagram.com/delicie.lanchonete/" target="_blank"><BsInstagram className="insta"/></a>
                                <a href=""><BsWhatsapp className="whats"/></a>
                                <a href=""><BsTelephoneFill className="tel"/></a>
                            </div>
                            <div className="localizacao">
                                <strong><p>Vila Boca da Mata | Panelas-PE</p></strong>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Header;