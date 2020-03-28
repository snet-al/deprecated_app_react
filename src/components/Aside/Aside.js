import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Backdrop from '../Backdrop/Backdrop';

import './Aside.css';

function Aside({ show, closeDrawer, children }) {
  return (
    <>
      <Backdrop show={show} onClick={closeDrawer} />
      <CSSTransition in={show} timeout={300} classNames="Aside">
        <aside className="Aside bg-white rounded-r border-r-4 border-primary-400 text-black">
          {children}
        </aside>
      </CSSTransition>
    </>
  );
}

export default Aside;
