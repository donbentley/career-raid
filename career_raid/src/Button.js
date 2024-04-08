import React from 'react';

import './Button.css';

const Button = (props) => {
  return (
    <button
      className={`btn btn--primary btn--medium ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;