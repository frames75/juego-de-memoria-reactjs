import React, { Component } from 'react';
import './Footer.css';

export default class Header extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="source-code">
          <p><a href="https://github.com/frames75/juego-de-memoria-reactjs" 
          target="_blank" rel="noopener noreferrer">
            Código fuente de la aplicación
          </a></p>
        </div>
        <div className="frames75">
          <p>© 2021 Copyright - <a href="https://www.frames75.com/"
            target="_blank" rel="noopener noreferrer">Frames75</a></p>
        </div>
      </footer>
    );
  }
};
