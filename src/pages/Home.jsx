import React from 'react';
import './css/Home.css';
import odont from '../img/odont.jpg';
import banner from '../img/banner.jpg';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
const links = "https://calendly.com/odontoart/consulta-online-gratuita-clone-1?fbclid=PAZXh0bgNhZW0CMTEAAaYCzkccqbN-SDoACIXT5RKPsYk5hJ4TYKBnC9QIS1Ii9BFqBzt_rNKM78k_aem_1irkA4Jr1v8158I9fYNwaw";


const HomePage = () => {
  return (


    <div className="home-page">
      <Fade left>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>OdontoArt</h1>
          <h2>Transformando Sorrisos, Restaurando Confiança</h2>
          <p>Cuidado odontológico de excelência com tecnologia de ponta e tratamento humanizado.</p>
          <div className="hero-buttons">
            <Link to={links} className="btn btn-primary">Agendar Consulta</Link>
            <Link to="/servicos" className="btn btn-secondary">Nossos Serviços</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={banner} alt="Consultório Odontológico" />
        </div>
      </header>
</Fade>
<Fade right>
      {/* Serviços Principais */}
      <section className="services-section">
        <h2>Nossos Serviços Especializados</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🦷</div>
            <h3>Clínica Geral</h3>
            <p>Atendimento completo e personalizado para toda família.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔬</div>
            <h3>Estética Dental</h3>
            <p>Transforme seu sorriso com procedimentos modernos.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🦿</div>
            <h3>Implantes</h3>
            <p>Recupere sua funcionalidade e estética dental.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Ortodontia</h3>
            <p>Correção e alinhamento para um sorriso perfeito.</p>
          </div>
        </div>
      </section>
      </Fade>
<Fade>
      {/* Sobre Nós */}
      <section className="about-section">
        <div className="about-content">
          <h2>Por que escolher a OdontoArt?</h2>
          <ul>
            <li>Profissionais altamente qualificados</li>
            <li>Tecnologia de ponta</li>
            <li>Ambiente acolhedor e humanizado</li>
            <li>Atendimento personalizado</li>
            <li>Tratamentos indolores</li>
          </ul>
          <Link to="/Sobre" className="btn btn-primary">Saiba Mais</Link>
        </div>
        <div className="about-image">
          <img src={odont} alt="Equipe OdontoArt" />
        </div>
      </section>
      </Fade>

      {/* Depoimentos */}
      <section className="testimonials-section">
        <h2>O Que Nossos Pacientes Dizem</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Tratamento incrível! Profissionais muito atenciosos e competentes."</p>
            <div className="testimonial-author">- Maria Silva</div>
          </div>
          <div className="testimonial-card">
            <p>"Recuperei minha confiança com um sorriso novo. Muito obrigado!"</p>
            <div className="testimonial-author">- João Santos</div>
          </div>
          <div className="testimonial-card">
            <p>"Ambiente super acolhedor e tecnologia de ponta. Recomendo!"</p>
            <div className="testimonial-author">- Ana Oliveira</div>
          </div>
        </div>
      </section>

      {/* Contato Rápido */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Agende Sua Consulta</h2>
          <p>Entre em contato e dê o primeiro passo para um sorriso incrível!</p>
          <div className="contact-info">
          <p>📍 Av. Josina Machel nr1433, Maputo, Mozambique</p>
            <p><a href="mailto:geral@odontoart.co.mz"> ✉️ Geral@odontoart.co.mz</a></p>
            <p><a href="tel:+258876810087"> 📞 (+258) 87 681 0087</a></p>
          </div>
          <Link to={links} className="btn btn-primary">Fale Conosco</Link>
        </div>
      </section>

   
    </div>
  );
};

export default HomePage;