import React,{useState} from 'react';
import '../App.css'
import Menu from './Menu'

function Header(){
const [isOpen, setIsOpen] = useState(false)

const OpenMenu = () => {
    setIsOpen(!(isOpen))
}
return (
    <>
    <header className ="header-container">
        <div className="logo-container" >
        <div className="img-container">        
         <img src="../image/logo.png" alt="logo"/>
         <span className="logo-title">COZ Shopping</span>
        </div>
    </div>
    <div className="menu-container">
    <img src="../image/hamburger.png" onClick ={OpenMenu}
     alt="selection menu"/>
    </div>
    </header>
    {isOpen === true ? <Menu isOpen={isOpen} setIsOpen={setIsOpen}/> : null}
    </>
  )
}

export default Header; 