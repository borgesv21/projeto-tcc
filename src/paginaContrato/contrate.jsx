import React from 'react';
import './contrate.scss';
import logo from '../../src/assets/images/logo.png'
import whats from '../../src/assets/images/whats.png'
import home from '../../src/assets/images/casa.png'
import { Link } from 'react-router-dom';



export default function Contrate() {
  const WhatsApp = () => {
    // Defina o número e a mensagem aqui
    const phoneNumber = '5511980152875'; // Substitua pelo número do WhatsApp com o código do país
    const message = `Olá! Tudo bem? Gostaria de contratar o serviços da sua empresa!`;
    
    // URL para abrir no WhatsApp App
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Abre o WhatsApp App, se disponível
    window.open(url, '_blank');
  };
  
  
  
  return (
    <div className="tudo">

     <Link to='/'><img  src={home} alt="Logo" className="home" /></Link> 

      <div className="formulario">
        
        <div className="textos">
          <h1 className='h1'>Não hesite em nos Contratar</h1>
          <h2  className='h2'>Envie sua proposta</h2>
          <p className='p'>
            Obrigado por entrar em contato com o suporte da Koji Fusion. Entre em contato para enviar sua proposta, 
            ajudar com alguma dúvida ou entender o que você precisa para melhorar seus projetos!
          </p>
          <p>
            Por favor, forneça detalhes específicos sobre a sua questão ou situação para que possamos responder 
            com precisão. A equipe da Koji Fusion está aqui para oferecer assistência rápida para resolver sua situação da melhor maneira possível.
          </p>

          <div className='contato'>
          <p  className='p'>
           E-mail: <a  className='a' href="mailto:kojifusion@gmail.com">kojifusion@gmail.com</a><br />
           <div className='tele'> Telefone: <a className='a' href="tel:+551195333777">(11) 95333-7777</a> </div>
          </p>
          </div>
          
          <img  src={logo} alt="Logo" className="logo-img" />
          <img src={whats} alt="Logo" className="whats-png" onClick={WhatsApp} />
         
        </div>

        <div className="formulario2">
          <form>
            <input className='input' type="text" placeholder="Indique seu nome*" required />
            <input className='input' type="email" placeholder="Digite seu E-mail*" required />
            <input className='input' type="text" placeholder="Assunto*" required />
            <input className='input' type="text" placeholder="Possível Orçamento*" />
            <textarea placeholder="Mensagem*" required></textarea>
            <button className='button' type="submit">Enviar Agora</button>
          </form>
        </div>


            
      </div>
    </div>
  );
}

