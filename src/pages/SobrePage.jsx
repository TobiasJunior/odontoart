import React from 'react';
import './css/Sobre.css';
import banner from '../img/banner.jpg';
import odont from '../img/odont.jpg';
const links = "https://calendly.com/odontoart/consulta-online-gratuita-clone-1?fbclid=PAZXh0bgNhZW0CMTEAAaYCzkccqbN-SDoACIXT5RKPsYk5hJ4TYKBnC9QIS1Ii9BFqBzt_rNKM78k_aem_1irkA4Jr1v8158I9fYNwaw";

const SobrePage = () => {
  return (
    <div className="sobre-page">
      {/* História */}
      <section className="historia-section">
        <div className="historia-content">
          <h1>Nossa História</h1>
          <p>
            A OdontoArt nasceu em 2021 com um propósito simples, porém profundo: transformar vidas através de sorrisos.
            Fundada por um grupo de dentistas apaixonados, nossa clínica surgiu da necessidade de oferecer um
            atendimento odontológico que vai além dos procedimentos técnicos.
          </p>
          <p>
            Desde o início, nos dedicamos a criar um ambiente acolhedor, onde cada paciente é tratado com
            respeito, atenção e cuidado individualizado. Nossa jornada é marcada pela busca constante de
            excelência, investimento em tecnologia de ponta e formação continuada de nossa equipe.
          </p>
        </div>
        <div className="historia-image">
          <img src={ banner } alt="História da OdontoArt" />
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="missao-valores-section">
        <div className="missao-valores-content">
          <div className="missao-card">
            <h2>Nossa Missão</h2>
            <p>
              Proporcionar saúde bucal de excelência, transformando sorrisos e devolvendo a confiança
              de nossos pacientes através de um atendimento humanizado, ético e tecnologicamente avançado.
            </p>
          </div>

          <div className="valores-card">
            <h2>Nossos Valores</h2>
            <ul>
              <li>
                <strong>Humanização</strong>: Cada paciente é único e merece atenção especial.
              </li>
              <li>
                <strong>Ética</strong>: Compromisso absoluto com a integridade e transparência.
              </li>
              <li>
                <strong>Excelência</strong>: Busca constante pelo melhor em técnicas e resultados.
              </li>
              <li>
                <strong>Empatia</strong>: Compreendemos os medos e ansiedades relacionados ao tratamento dentário.
              </li>
              <li>
                <strong>Inovação</strong>: Investimento contínuo em tecnologia e conhecimento.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="equipe-section">
        <h2>Nossa Equipe</h2>
        <div className="equipe-grid">
          <div className="equipe-card">
            <img src={odont} alt="Dra. Ana Santos" />
            <h3>Dra. Ana Santos</h3>
            <p>Diretora Clínica | Especialista em Estética Dental</p>
          </div>
          <div className="equipe-card">
            <img src={odont} alt="Dr. Carlos Oliveira" />
            <h3>Dr. Carlos Oliveira</h3>
            <p>Ortodontia | Implantodontia</p>
          </div>
          <div className="equipe-card">
            <img src={odont} alt="Dra. Mariana Costa" />
            <h3>Dra. Mariana Costa</h3>
            <p>Clínica Geral | Odontopediatria</p>
          </div>
          <div className="equipe-card">
            <img src={odont} alt="Dr. Roberto Lima" />
            <h3>Dr. Roberto Lima</h3>
            <p>Cirurgião | Especialista em Reabilitação Oral</p>
          </div>
        </div>
      </section>

      {/* Tecnologia */}
      <section className="tecnologia-section">
        <div className="tecnologia-content">
          <h2>Nossa Tecnologia</h2>
          <p>
            Na OdontoArt, acreditamos que tecnologia de ponta é essencial para garantir
            tratamentos precisos, menos invasivos e com resultados excepcionais.
            Investimos constantemente em equipamentos de última geração para oferecer
            o melhor em diagnóstico e tratamento.
          </p>
          <div className="tecnologia-items">
            <div className="tecnologia-item">
              <span>🔬</span>
              <h3>Raio-X Digital</h3>
            </div>
            <div className="tecnologia-item">
              <span>🦷</span>
              <h3>Escaneamento 3D</h3>
            </div>
            <div className="tecnologia-item">
              <span>🔧</span>
              <h3>Laser Odontológico</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="cta-section">
    <div className="cta-content">
        <h2>Conheça a OdontoArt Pessoalmente</h2>
        <p>Marque sua consulta e descubra como podemos transformar seu sorriso.</p>
        <br></br>
        <a href={links} className="btn btn-primary" id="agenda">Agendar Consulta</a>
    </div>
    </section>
    </div>
  );
};

export default SobrePage;