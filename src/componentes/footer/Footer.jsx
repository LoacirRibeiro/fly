import React from "react";

import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer">

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={Logo} className="logo" />
          </div>
          <p>Sua mente deveria ser mais forte Que seus sentimentos, voe!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon"/>
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <FaPinterestP className="icon"/>
          </div>
        </div>

        <div className="footerLinks">
            <span className="linkTitle"> Informações </span>
            <li>
                <a href=''> Home </a>
            </li>
            <li>
                <a href=''> Explorar </a>
            </li>
            <li>
                <a href=''> Status do Vôo </a>
            </li>
            <li>
                <a href=''> Viagem </a>
            </li>
            <li>
                <a href=''> Check-in </a>
            </li>
            <li>
                <a href=''> Gerencie sua reserva  </a>
            </li>
        </div>

        <div className="footerLinks">
            <span className="linkTitle">  Guia Rápido </span>
            <li>
                <a href=''> FAQ</a>
            </li>
            <li>
                <a href=''> Como </a>
            </li>
            <li>
                <a href=''> Características </a>
            </li>
            <li>
                <a href=''> Bagagem </a>
            </li>
            <li>
                <a href=''> Mapa de Rotas</a>
            </li>
            <li>
                <a href=''> Nossas comunidades </a>
            </li>
        </div>

        <div className="footerLinks">
            <span className="linkTitle"> Informações</span>
            <li>
                <a href=''> Motorista </a>
            </li>
            <li>
                <a href=''> Nossos parceiros </a>
            </li>
            <li>
                <a href=''> Destinos </a>
            </li>
            <li>
                <a href=''> Carreiras </a>
            </li>
            <li>
                <a href=''> Transporte </a>
            </li>
            <li>
                <a href=''> Regras do Programa  </a>
            </li>
        </div>
        
      </div>

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href="https://
        emailto-isratech8@outlook.com" target="_blank"> LoacTech</a></p>
      </div>

    </div>
  );
}

export default Footer;
