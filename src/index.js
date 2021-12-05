import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Importa o HashRouter do React-Router para maior compatibilidade com o github pages
//A navegação funciona com uma #. Exemplo: edutech.com/#/blog
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Envolve todo o site no HashRouter */}
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
