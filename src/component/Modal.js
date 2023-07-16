import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top:0; 
  left: 0; 
  width: 100%;
  height: 100%;
  background-color: (0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid red;
  z-index:9999; 
  cursor: pointer; 
`

const ModalView = styled.div`
  width: 744px;
  height: 480px;
  `

function Modal({modalProduct, isOpen, closeModal}) {

  return (
    <ModalContainer onClick={closeModal}>
       <ModalView class="modal-container">
        <img src={modalProduct.type ==="Brand"? 
        modalProduct.brand_image_url:modalProduct.image_url} 
        alt={modalProduct.title} style={{ width: "744px", height: "480px" }}
        /><span>{modalProduct.title}</span>
       </ModalView>
    </ModalContainer>
  );
}

export default Modal;
