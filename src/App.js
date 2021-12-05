//Importando componentes do React, Router e Tema
import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';
import { withTheme } from "./components/Theme/Theme";
import './App.css';
//Importando o Cabeçalho e o Container das páginas
import Header from "./components/Header/Header";
import PageContainer from "./components/PageContainer/PageContainer";
//Importando as páginas
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Sobre from './Pages/Sobre/Sobre';

function App(props) {

  return (
    <Fragment>
        <Header darkMode={props.darkMode} setDarkMode={props.setDarkMode}/> {/* Cabeçalho do site */}
        <PageContainer darkMode={props.darkMode}> {/* Container responsivo para as páginas */}
          <Routes> {/* Páginas com seus caminhos (path) */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </PageContainer >
    </Fragment>
  );
}

//Exporta o App com o tema
export default withTheme(App);