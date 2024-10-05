import ninja from '../../src/assets/images/ninja.png'
import logo from '../../src/assets/images/logo.png'
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <header>
        <div className='logo'>
          <img src={logo} alt="" />
          <h1>KOJI </h1>
          <h1 className='word-white'>FUSION</h1>
        </div>
        
        <nav>
          <a className="botao-prin" href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Soluções</a>
        </nav>

      <a className="contrate" href="">Contrate-nos</a>
      </header>

    <div className="principal">

      <div className="textos">
          <div className='koji'><h1>Olá, somos a <br/> <span className='logo-marca'>KOJI<span className='fusion'> FUSION</span></span></h1></div>
          <div className='parceiros'><h3>Seu Parceiro em <span className='solucao'>Soluções <br/>Tecnológicas</span> Eficazes</h3></div>
          <div className='comentario'>
              <p>Criação de sites pessoal e empresarial. </p>
              <p>Manutenção de Software e Hardware</p>
          </div>
      </div>
  

    <div className='imagem-ninja'>
      <img className='ninja'  src={ninja} alt="Ninja codando" />
    </div>

    

    
    </div>

  <hr class="center-line"/>
  

     
     
        <h1 className='titulo'>Transformando Ideias em Experiências Digitais Únicas</h1>
      
      
      
      <div className="images-container">
        

        
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



      <div className="container">
      <h1>Conheça nossa empresa</h1>

      <div className="services">
        <div className="service">
          <h2>Redes sociais</h2>
          <p>
            Oferecemos gestão completa de postagens e estratégias otimizadas para aumentar o engajamento em suas redes sociais,
            incluindo Instagram, Facebook, TikTok e Twitter. Nossos métodos são respaldados por análises certeiras, garantindo
            resultados surpreendentes.
          </p>
        </div>

        <div className="service">
          <h2>Desenvolvimento Web</h2>
          <p>
            Desenvolvemos sites, aplicativos, sistemas de design e soluções UX/UI utilizando as melhores ferramentas e
            metodologias do mercado.
          </p>
        </div>

        <div className="service">
          <h2>CRO</h2>
          <p>
            Uma vertical focada em otimizar resultados de conversão de sites e aplicativos, utilizando dados e testes para
            transformar visitantes em clientes.
          </p>
        </div>

        <div className="service">
          <h2>Anúncios Digitais</h2>
          <p>
            Impulsionamos o tráfego e as vendas do seu site. Seja na captação ou na ação, as estratégias baseadas em técnicas de
            marketing digital fundamentadas no cliente.
          </p>
        </div>

        <div className="service">
          <h2>Branding</h2>
          <p>
            Criar uma marca vai além de um logotipo e identidade visual. Desenvolvemos a marca como uma promessa que se alinha
            aos propósitos do negócio e da concorrência, posicionamento e tom de voz.
          </p>
        </div>

        <div className="service">
          <h2>Data Analytics</h2>
          <p>
            Obtenha relatórios detalhados, dashboards em BI, análises estatísticas, modelagens preditivas e o máximo da
            performance para suas vendas e tomar decisões com mais precisão.
          </p>
        </div>
      </div>
      </div>



     








    </div>
  );
}


