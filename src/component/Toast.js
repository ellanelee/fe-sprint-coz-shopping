import React, { useEffect } from "react"; 
import styled, {keyframes} from 'styled-components'; 

const toastInRight = keyframes`
from {
  transform: translateX(100%)
}
to {
  transform: translateX(0);
}`

const toastFadeOut = keyframes`
from{
  opacity: 1; 
}
to {
  opacity: 0 ; 
}
`

const ToastStyler = styled.div`
  font-size: 1rem;
  position: fixed;
  z-index: 999999;
  bottom: 80px;
  right: 12px;
  transform: tanslateX(0);
  animation:${toastInRight} 0.6s, ${toastFadeOut} 0.6s 2s forwards; 
`


const Notification = styled.div`
  transition: transform 0.6s ease-in-out;
  animation: toast-in-right 0.6s;
  background: white; 
  transition: 0.3s ease;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: black;
  opacity: 0.9;
  font-weight: 600;

  display:flex; 
  align-items:center; 
  height: 50px;
  width: 360px;
  color: #000;
  padding: 15px;
  margin: 10px;
`

function Toast({toastMessage, toastVisible, setToastVisible}) {

  useEffect(()=> {
    const timer = setTimeout(() => {
      setToastVisible(false)
    },2000);
    return ()=> clearTimeout(timer)
    },[toastVisible,setToastVisible])


  if(!toastVisible) return null 

  console.log(toastVisible)
  return (
    <ToastStyler>
      <Notification>
      <img src='../image/starOn.png' alt="북마크"/><span>{toastMessage}</span>
      </Notification>
    </ToastStyler>
    )
}

export default Toast; 

