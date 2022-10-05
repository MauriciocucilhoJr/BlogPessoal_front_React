import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componets/Estaticos/Navbar/Navbar';
import Footer from './Componets/Estaticos/Footer/Footer';
import Home from './Paginas/Home/Home';
import './App.css';
import Login from './Paginas/Login/Login';
import CadastroUsuario from './Paginas/cadastroUsuario/CadastroUsuario';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;