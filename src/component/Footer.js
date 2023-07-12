import React from "react"; 
import styled from "styled-components";

function Footer(){

  const StyledFooter = styled.div`
  max-width:1280px; 
  height:58px; 
  color: #888888
  display:flex;
  flex-direction: column;
  text-align : center; 
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 11px;
  `

    return(
        <>
        <StyledFooter>
        <p>개인정보 처리방침 | 이용약관</p>
        <p>All rights reserved @ Codestates</p>
        </StyledFooter>
        </>
        
    )
}

export default Footer; 
