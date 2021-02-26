import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header> 
        <div className="titulo">
          <h2>Juego de Memoria Emparejar</h2>
        </div>
        <div>
            <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
              Reiniciar Partida
            </button>
        </div>
        <div className="tiempo">
          <label className="labelTiempo">Tiempo (ms):</label>
          <input className="inputTiempo" type='number'
                onChange={this.props.handleChangeTiempo} 
                value={this.props.value}
          />
        </div>
        <div className="intentos">
          Intentos:&nbsp;&nbsp;
          <b className="numIntentos">
            {this.props.numeroDeIntentos}
          </b>
        </div>
      </header>
    );
  }
};
