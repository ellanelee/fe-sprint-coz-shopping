import React, { useEffect, useState } from "react"; 
import styled from 'styled-components'; 

const ToastStyler = styled.div`
  font-size: 1rem;
  position: fixed;
  z-index: 999999;
  top: 80px;
  right: 12px;
`

function Toast() {
  console.log("TOAST")
  return (
  <ToastStyler>
    <img src='../image/starToastOn'/><span>상품이 북마크에 담겼습니다</span>
  </ToastStyler>
  )
}

export default Toast; 

/* 제품표시화면내에 




.notification-container {
  font-size: 1rem;
  position: fixed;
  z-index: 999999;
  top: 80px;
  right: 12px;
}

.notification {
  transition: transform 0.6s ease-in-out;
  animation: toast-in-right 0.6s;
  background: var(--coz-purple-600);
  transition: 0.3s ease;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  color: #000;
  opacity: 0.9;
  font-weight: 600;

  height: 50px;
  width: 360px;
  color: #fff;
  padding: 15px;
  margin: 10px;
}

.fade-out {
  opacity: 0;
  transform: opacity 2s;
}

@keyframes toast-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

*/