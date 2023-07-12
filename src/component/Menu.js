import React from 'react';
import styled from 'styled-components'; 

function Menu(){

const MenuStyler = styled.div`
  position: static; 
  top: 100%; 
  right: 0; 
  width: 200px;
  height : 150px; 
  display: flex; 
  flex-direction:column; 
  justify-content: center; 
  align-items: center; 
  font-family: Inter;
  font-size: 16x;
  font-weight: 400;
  line-height: 11px;
  background-color: white; 
  z-index: 999;
  `;
    return(
        <div>
            <MenuStyler className="menuList">
                <p>OOO님, 안녕하세요!</p>
                <p><img src="../image/giftIcon.png"/> <span> 상품리스트 페이지</span></p>
                <p><img src="../image/star_off.png"/><span> 북마크 페이지</span></p>
            </MenuStyler>
        </div>
    )
}

export default Menu; 