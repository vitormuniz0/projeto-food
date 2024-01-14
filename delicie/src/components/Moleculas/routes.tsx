import React from 'react';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from '../Pages/home.tsx';
import Interface from '../Pages/interface.tsx';
import Errorpage from '../Pages/errorpage.tsx';
import SobreNos from '../Pages/sobreNos.tsx';

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Interface/>} errorElement={<Errorpage/>}></Route>
                <Route path='/home' element={<Home/>} errorElement={<Errorpage/>}></Route>
                <Route path='/sobreNos' element= {<SobreNos/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
    