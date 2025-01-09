import React from 'react';
import './Footer.css';
import odon from '../img/odon.png'
import { MdOutlineFacebook, MdOutlineWhatsapp } from "react-icons/md";
import {  IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-logo"><img src={odon} alt="logo da OdontoArt"></img></h3>
            <p className="footer-description">
            Transformando Sorrisos, Restaurando Confiança.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Links Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
              <li></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Contato</h4>
            <div className="footer-contact">
              <p>📍 Av. Josina Machel nr1433, Maputo, Mozambique</p>
              <p>✉️ Geral@odontoart.co.mz</p>
              <p>📞 (+258) 87 681 0087</p>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Siga-nos</h4>
            <div className="footer-social">
              <a href="instagram.com/odontoart" className="social-icon"><IoLogoInstagram/></a>
              <a href="whatsapp.me/odontoart" className="social-icon"><MdOutlineWhatsapp/></a>
              <a href="facebook.com/odontoart" className="social-icon"><MdOutlineFacebook/></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 OdontoArt. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;