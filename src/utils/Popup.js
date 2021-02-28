import React from 'react';
import './Popup.css';

export default function Popup(props) {
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <div className='popup_text'>
          {props.children}
        </div>
      </div>
    </div>
  );
};
