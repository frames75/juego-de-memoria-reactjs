import React from 'react';
import Popup from './utils/Popup';

export default function PopupFinal(props) {
  const texto = '¡Terminaste en ' + props.intentos + ' intentos!';
  
  return (
    <Popup>
      <h2>{texto}</h2>
      <br />
      <button className='cerrar' 
        onClick={props.closePopup}>Cerrar</button>
    </Popup>
  );
};
