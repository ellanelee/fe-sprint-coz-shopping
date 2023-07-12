import React from "react"; 
import './Header.css'; 
import GlobalStyle from '../component/GlobalStyle';

function Header(){

    return(
        <header className ="header-container">
        <GlobalStyle/>
         <div className="logo-container">
            <div className="img-container">        
               <img src="../images/logo.png" alt="logo"/>
               <span className="logo-title">COZ Shopping</span>
            </div>
         </div>
        <img src="../images/hamburger.png" alt="selection menu"/>
        </header>
        
    )
}

export default Header; 
