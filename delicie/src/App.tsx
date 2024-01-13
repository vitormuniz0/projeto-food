import React from 'react';
import './App.scss';
import Header from './components/Pages/header.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/home.tsx';

function App() {
  return( 
    <>
        <Header/>
        <Router>
          <Routes>
            <Route path='./home.tsx' element={<Home/>}></Route>
          </Routes>
        </Router>

    </>
  )
   
}

export default App;
