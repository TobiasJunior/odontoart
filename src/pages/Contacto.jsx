import React from 'react';
import './css/Contacto.css';

const Contacto = () => {


  return (
    <div className="contacto-container">
      <div className="contacto-card">
        <h1 className="contacto-title">Fale Conosco</h1>

     

        

        <form  className="contacto-form">
          <input 
            type="text" 
            placeholder="Nome Completo" 
            required 
            className="contacto-input"
          />

          <input 
            type="tel" 
            placeholder="Telefone" 
            required 
            className="contacto-input"
          />

          <input 
            type="email" 
            placeholder="E-mail" 
            required 
            className="contacto-input"
          />

          <textarea 
            placeholder="Digite sua mensagem"
            required
            rows={5}
            className="contacto-textarea"
          />

          <button 
            type="submit"
          >
            Enviar 
          </button>
        </form>

        <div className="contacto-info">
          <h3 className="contacto-info-title">Informações de Contato</h3>
          <p>📞 (XX) XXXX-XXXX</p>
          <p>📍 Rua Principal, 123 </p>
          <p>📧 contato@odontoart.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;