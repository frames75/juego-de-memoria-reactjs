import React, { Component } from 'react';
import './Popup.css';

export default class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className='popup_text'>
            <h2>{this.props.text}</h2>
            <br />
            <button className='cerrar' 
              onClick={this.props.closePopup}>Cerrar</button>
          </div>
        </div>
      </div>
    );
  }
};
