import React,{useState} from 'react';
import './Header.css'
import Menu from './Menu'

function Header(){
const [isOpen, setIsOpen] = useState(false)

const HandleMenu = () => {
    setIsOpen(!(isOpen))
}
return (
    <>
    <header className ="header-container">
        <div className="logo-container">
        <div className="img-container">        
         <img src="../image/logo.png" alt="logo"/>
         <span className="logo-title">COZ Shopping</span>
        </div>
    </div>
    <div className="menu-container">
    <img src="../image/hamburger.png" onClick ={HandleMenu}
     alt="selection menu"/>
    </div>
    </header>
    {isOpen === true ? <Menu/> : null}
    </>
  )
}

export default Header; 