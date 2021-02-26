import React, { Component } from 'react';
import Popup from './utils/Popup';

export default class PopupFinal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '¡Terminaste en ' + props.intentos + ' intentos!'
    }
  }

  render() {
    return (
      <Popup
          text={this.state.text}
          closePopup={this.props.closePopup}
      />
    );
  }
};
