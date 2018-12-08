
import React from 'react';

import Btn from '../styled-components/Btn'

const Buttons = (props) => (
    <Btn
      id={props.id}
      buttonTextColor={props.buttonTextColor}
      buttonBackgroundColor={props.buttonBackgroundColor}
      buttonBorder={props.buttonBorder}
      value={props.title}
      onClick={() => props.clicked(props.id)}
    >{props.title}</Btn>
);

export default Buttons;
