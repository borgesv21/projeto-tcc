
import './App.scss';

export default function App() {
  return (
    <div className="App">
        <header>
      
      <h1>KOJI FUSION</h1>

      <nav>
        <a  className="botao-prin" href="">Home</a>
        <a href="https://www.youtube.com/">Sobre</a>
        <a href="">Soluções</a>
      </nav>

      <a className="contrate" href="">Contrate-nos</a>
    </header>

    <div className="principal">

      <div className="textos">
          <div className='koji'><h1>Olá, somos a <br/> KOJI<span className='fusion'> FUSION</span></h1></div>
          <div className='parceiros'><h3>Seu Parceiro em <span className='solucao'>Soluções <br />Tecnológicas</span> Eficazes</h3></div>
          <div className='comentario'>
              <p>Criação de sites pessoal e empresarial. </p>
              <p>Manutenção de Software e Hardware</p>
          </div>
      </div>
  

    <div className='imagem-ninja'>
      <img className='ninja'  src="https://cdn.discordapp.com/attachments/1273457474803863685/1274812664337666098/Premium_Vector___Cute_ninja_watching_a_laptop_cartoon_ilustration-removebg-preview.png?ex=66fc4dd0&is=66fafc50&hm=cb9a60db08527a04a6c325d45a4e51f6a9769c0600cfdb62d56a3edde85925a8&" alt="Ninja codando" />
    </div>

    

    
  </div>

  <hr class="center-line"/>
  

     {/* Título da Página */}
     
        <h1 className='titulo'>Transformando Ideias em Experiências Digitais Únicas</h1>
      
      
      {/* Contêiner das Imagens */}
      <div className="images-container">
        {/* Primeira Imagem */}
        <div className="image-box">
          <img
            src="https://img.freepik.com/free-photo/electric-car-ecology-technology-save-energy-concept_53876-124793.jpg?t=st=1727734936~exp=1727738536~hmac=bdc33c3b26c988f510a0b37557192eecb9df7370d5fb807de74880c2ddcc4576&w=740" // Substitua pelo caminho correto da imagem do laptop com carro elétrico
            alt="Laptop com Carro Elétrico"
          />
        </div>
        
        {/* Segunda Imagem */}
        <div className="image-box">
          <img
            src="https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg?t=st=1727734981~exp=1727738581~hmac=94d2f6e935b6c970a1b9d3ac39374cd5cb1f6f86e4fc84e118292737ed085080&w=826" // Substitua pelo caminho correto da imagem das telas de destino
            alt="Travel to Your Dream Destination"
          />
        </div>
     

    </div>


    </div>
  );
}


