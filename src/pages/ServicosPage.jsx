import React from 'react';
import './css/Servicos.css';
import './css/Home.css';
const links = "https://calendly.com/odontoart/consulta-online-gratuita-clone-1?fbclid=PAZXh0bgNhZW0CMTEAAaYCzkccqbN-SDoACIXT5RKPsYk5hJ4TYKBnC9QIS1Ii9BFqBzt_rNKM78k_aem_1irkA4Jr1v8158I9fYNwaw";

const ServicosPage = () => {
  return (
    <div className="servicos-page">
      {/* Título */}
      <header className="servicos-header">
        <h1>Nossos Serviços</h1>
        <p>Oferecemos uma ampla gama de serviços odontológicos para atender às suas necessidades.</p>
      </header>

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

      {/* Chamada para Ação */}
      <section className="servicos-cta">
        <div className="servicos-content">
        <h2>Agende sua Consulta Hoje!</h2>
        <p>Entre em contato e dê o primeiro passo para um sorriso saudável e bonito.</p>
        <a href={links} className="btn btn-primary">Agendar Consulta</a>
        </div>
        </section>
    </div>
  );
};

export default ServicosPage;
