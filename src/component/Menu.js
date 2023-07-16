import React from 'react';
import styled from 'styled-components'; 
import {Link} from 'react-router-dom';
import '../App.css'; 

const MenuStyler = styled.div`
  position: absolute; 
  top:70px;
  right: 20px; 
  width: 200px;
  height : 150px; 
  border-radius: 12px;
  box-shadow: 0px 0px 5px 0.1px rgb(236, 235, 235);
  display: flex; 
  flex-direction:column; 
  justify-content: center; 
  align-items: center; 
  font-family: Inter;
  font-size: 16x;
  font-weight: 400;
  line-height: 11px;
  overflow:hidden; 
  background-color: white; 
  z-index: 999;
  `;

function Menu(){

    return(
        <>
         <MenuStyler>
            <div className="menuList">
                <Link to ="/" className="menu-img">OOO님, 안녕하세요!</Link>
                <Link to="/product/list" className="menu-img">
                <img src="../image/giftIcon.png" alt="상품리스트" /><span>상품리스트 페이지</span></Link>
                <Link to="/bookmark" className="menu-img"><img src="../image/starOn.png" alt="북마크"/>
                <span>북마크 페이지</span></Link>
            </div>
            </MenuStyler>
        </>
    )
}


export default Menu; 