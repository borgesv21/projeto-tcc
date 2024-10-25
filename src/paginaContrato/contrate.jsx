import React from 'react';
import './contrate.scss';
import logo from '../../src/assets/images/logo.png'
import whats from '../../src/assets/images/whats.png'
import home from '../../src/assets/images/casa.png'




export default function Contrate() {
  return (
    <div className="tudo">

<img  src={home} alt="Logo" className="home" />

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
          <img src={whats} alt="Logo" className="whats-png" />
         
        </div>

        <div className="formulario2">
          <form>
            <input className='input' type="text" placeholder="Indique seu nome" required />
            <input className='input' type="email" placeholder="Digite seu E-mail" required />
            <input className='input' type="text" placeholder="Assunto*" required />
            <input className='input' type="text" placeholder="Orçamento Disponível" />
            <textarea placeholder="Mensagem*" required></textarea>
            <button className='button' type="submit">Enviar Agora</button>
          </form>
        </div>
      </div>
    </div>
  );
}

