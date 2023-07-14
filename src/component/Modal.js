import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`

function Modal({modalProduct,modalHandler}) {
  return (
    <ModalContainer >
      <ModalContent>
        <img src={modalProduct.image_url} alt={modalProduct.title} style={{ width: "100%", height: "auto" }}
       onClick={modalHandler} />
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
