import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import odon from '../img/odon.png'
import { MdOutlineFacebook, MdOutlineWhatsapp } from "react-icons/md";
import {  IoLogoInstagram } from "react-icons/io";
const links = "https://calendly.com/odontoart/consulta-online-gratuita-clone-1?fbclid=PAZXh0bgNhZW0CMTEAAaYCzkccqbN-SDoACIXT5RKPsYk5hJ4TYKBnC9QIS1Ii9BFqBzt_rNKM78k_aem_1irkA4Jr1v8158I9fYNwaw";
const insta = "https://www.instagram.com/odontoart_clinicadentaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const face = "https://web.facebook.com/p/OdontoArt-100066951845455/?_rdc=1&_rdr#";
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
              <li>
                <Link to="/"> Início </Link>
              </li>
              <li>
                <Link to="/sobre"> Sobre </Link>
              </li>
              <li>
                <Link to="/servicos"> Serviços </Link>
              </li>
              <li>
                <a href={links}> Contato </a></li>
              <li></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Contato</h4>
            <div className="footer-contact">
              <p>📍 Av. Josina Machel nr1433, Maputo, Mozambique</p>
              <p><a href="mailto:geral@odontoart.co.mz"> ✉️ Geral@odontoart.co.mz</a></p>
              <p><a href="tel:+258876810087" > 📞 (+258) 87 681 0087</a></p>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Siga-nos</h4>
            <div className="footer-social">
              <a href={insta} className="social-icon"><IoLogoInstagram/></a>
              <a href="whatsapp.me/odontoart" className="social-icon"><MdOutlineWhatsapp/></a>
              <a href={face} className="social-icon"><MdOutlineFacebook/></a>
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