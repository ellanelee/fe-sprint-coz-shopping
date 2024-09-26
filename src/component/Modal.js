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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  position: relative; 
  width: 744px; 
  height: 480px
  `

const TitleInModal = styled.span`
 position: absolute;
 bottom: 20px; 
 left: 20px;
 color:white; 
 font-weight: 900; 
 font-size: 18px;  
 display:flex;
 align-items : center;
`
function Modal({modalProduct, isOpen, closeModal}) {

  return (
    <ModalContainer onClick={closeModal}>
       <ModalView class="modal-container">
        <img src={modalProduct.type ==="Brand"? 
        modalProduct.brand_image_url:modalProduct.image_url} 
        alt={modalProduct.title} 
        style={{ width: "744px", height: "480px", borderRadius: "20px" }}
        />
        
        <TitleInModal>
        <img src="../image/starOff.png" style={{ marginRight:"5px"}} alt="bookmark"/>
        <p style={{paddingTop: "2px"}}>{modalProduct.title}</p>
        </TitleInModal>
       </ModalView>
    </ModalContainer>
  );
}

export default Modal;
