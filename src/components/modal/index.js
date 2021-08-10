import React from 'react';
import { css } from 'emotion'



function Modal({ show, width, height, toggle, children }) {
  console.log(show)
  console.log(children)
  const ModalWrap = css`
  ${show ? 'display: flex' : 'display: none'};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

  const Container = css`
  position: relative;
  height: ${height ? height : '40%'};
  width: ${width ? width : '30%'};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  z-index: 10;
`;

  const OutLayer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
  return (
    <div className={ModalWrap}>
      <div className={Container}>
        {children}
      </div>
      <div className={OutLayer} onClick={toggle} />
    </div>
  );
}

export default Modal;
