import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import './Backdrop.css';

function Backdrop({ show, onClick, onKeyPress, children }) {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={300}
      classNames="Backdrop"
    >
      <div
        className="fixed z-40 top-0 left-0 right-0 bottom-0 bg-black"
        role="presentation"
        onKeyPress={onKeyPress}
        onClick={onClick}
      >
        {children}
      </div>
    </CSSTransition>
  );
}

export default Backdrop;
