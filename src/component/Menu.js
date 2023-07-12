import React from 'react';
import styled from 'styled-components'; 

function Menu(){

const MenuStyler = styled.div`
  position: absolute; 
  overflow:hidden; 
  top: 50px;
  right: 20px; 
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
                <div>OOO님, 안녕하세요!</div>
                <div><img src="../image/giftIcon.png"/> 상품리스트 페이지</div>
                <div><img src="../image/star_off.png"/> 북마크 페이지</div>
            </MenuStyler>
        </div>
    )
}

export default Menu; 