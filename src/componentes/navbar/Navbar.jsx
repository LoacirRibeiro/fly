import React, { useState } from "react";

// importação de incones
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

// importação de images
import logo from "../../assets/logo.png";

function Navbar() {
    // vamos remover a barra de navegação nas telas de largura pequena
    const [active, setActive] = useState('navBarMenu')
    const showNavbar = () => {
        setActive('navBarMenu showNavbar')
    }

    const removeNavbar = () => {
        setActive('navBarMenu')
    }

    // vamos adicionar uma cor de fundo à segunda barra de navegação ==>
    const [noBg, addBg] = useState('navBarTwo ')
    
    const addBgColor = () => {
      if(window.scrollY >= 10){
        addBg('navBarTwo navbar_With_Bg')
      }else{
        addBg('navBarTwo')
      }
    } 
    window.addEventListener('scroll', addBgColor)   
      

  return (
    <div className="navBar flex">

      <div className="navBarOne flex">
        <div>
            <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex"> <BsPhoneVibrate  
          className="icon" />Suporte</li>
          <li className="flex"><AiOutlineGlobal
           className="icon" />Idioma</li>
        </div>

        <div className="atb flex">
          <span> Entrar </span>
          <span> Sair </span>
        </div>
      </div>

      {/* className="navBarTwo " */}
      <div className={noBg}> 
        
        <div className="logoDiv">
          <img src={logo} className="logo" />
        </div>
 
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavbar} className="listItem"> Home </li>
            <li onClick={removeNavbar} className="listItem"> Sobre </li>
            <li onClick={removeNavbar} className="listItem"> Ofertas </li>
            <li onClick={removeNavbar} className="listItem"> Assentos </li>
            <li onClick={removeNavbar} className="listItem"> Destinos </li>
          </ul>

          <button onClick={removeNavbar} className="btn flex btnOne">
            Contato
          </button>
        </div>

        <button className="btn flex btnTwo">
          Contato
        </button>

        <div onClick={showNavbar} className="toggleIcon">
          <CgMenuGridO className="icon"/>
        </div>
        </div>
    </div>
  );
}

export default Navbar;
