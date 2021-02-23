import React, {Component} from 'react';
import './Carta.css';
//import FlipCard from 'react-flipcard'; /** Error with React v.16.0 */
import FlipCard from '@kennethormandy/react-flipcard'
import '@kennethormandy/react-flipcard/dist/Flipcard.css'

export default class Carta extends Component {
  render() {
    return (
      <div className="carta" onClick={this.props.seleccionarCarta}>
        {/*
          The `disabled` attribute allows turning off the auto-flip
          on hover, or focus. This allows manual control over flipping.

          The `flipped` attribute indicates whether to show the front,
          or the back, with `true` meaning show the back.
        */}
        <FlipCard type="horizontal"
          flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          disabled={false}
        >
          <div className="portada"></div>
          <div className="contenido">
            <i className={`fa ${this.props.icono} fa-5x`}></i>
          </div>
        </FlipCard>
      </div>
    )
  }  
};
