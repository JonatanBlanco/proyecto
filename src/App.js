import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Tienda from './components/Tienda'; // Importa el componente Tienda
import NuevaSeccion from './components/NuevaSeccion'; // Importa el componente NuevaSeccion
import Login from './components/Cuenta/Login'; // Importa el componente Login
import Register from './components/Cuenta/Register'; // Importa el componente Register
import './App.css';

import {
  Home,
  Categorias,
  Ofertas,
  Blog,
  Contactos,
  Inicio,
  Explora,
  ListaCategorias,
  Descuentos,
  InfoContacto,
} from './Pages'; // Importa otros componentes según sea necesario

import logo from './assets/logo.jpeg';
import whatsappLogo from './assets/whatsapp.png';
import facebookLogo from './assets/facebook.png';
import twitterLogo from './assets/twitter.png';
import gmailLogo from './assets/gmail.png';
import imgpresentacion1 from './assets/imgpresentacion1.jpg'; 
import imgpresentacion2 from './assets/imgpresentacion2.jpg'; 
import imgpresentacion3 from './assets/imgpresentacion3.png'; // Asegúrate de tener la imagen en la carpeta correcta
function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>ZOOMARKET</h1>
          <nav className="App-nav">
            <div className="logo-container" onClick={toggleMenu}>
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul>
              <li>
                <Link to="/inicio">Inicio</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
                <div className="dropdown">
                  <Link to="/articulos" className="dropdown-item">Artículos</Link>
                  <Link to="/nueva-seccion" className="dropdown-item">Nueva Sección</Link> {/* Nuevo enlace */}
                </div>
              </li>
              <li>
                <Link to="/contactos">Contactos</Link>
                <div className="dropdown">
                  <a href="https://wa.me/+59173727495" className="dropdown-item" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappLogo} alt="WhatsApp" className="icon" /> WhatsApp
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61566147241317" className="dropdown-item" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook" className="icon" /> Facebook
                  </a>
                  <Link to="/info-contacto" className="dropdown-item">
                    <img src={twitterLogo} alt="Twitter" className="icon" /> Twitter
                  </Link>
                  <a href="mailto:jonablanco560@gmail.com" className="dropdown-item">
                    <img src={gmailLogo} alt="Gmail" className="icon" /> Gmail
                  </a>
                </div>
              </li>
            </ul>
            <div className="search-container">
              <input type="text" placeholder="Buscar..." className="search-input" />
            </div>
          </nav>
          {menuVisible && (
            <div className="side-menu">
              <ul>
                <li><Link to="/login" onClick={toggleMenu}>Iniciar Sesión</Link></li> {/* Enlace para iniciar sesión */}
                <li><Link to="/tienda" onClick={toggleMenu}>Tienda</Link></li>
                <li><Link to="/ofertas" onClick={toggleMenu}>Ofertas</Link></li>
                <li><Link to="/reportar-problemas" onClick={toggleMenu}>Reportar problemas</Link></li>
                <li><Link to="/desarrollador" onClick={toggleMenu}>Desarrollador</Link></li>
              </ul>
            </div>
          )}
        </header>
        <main>
          <section className="content-section">
            <div className="bienvenida-container">
              <div className="texto-bienvenida">
                <h2>Bienvenido a ZOOMARKET</h2>
                <p>
                  En ZOOMARKET, ofrecemos una amplia variedad de productos para tus mascotas. Desde alimentos hasta juguetes, tenemos todo lo que necesitas para cuidar de tu amigo peludo.
                </p>
                <p>
                  Explora nuestras categorías y descubre las mejores ofertas para consentir a tu mascota.
                </p>
                <h3>Explora Nuestros Productos</h3>
                <p>Productos para el cuidado de tu mascota de calidad. Puedes hacer un pedido desde nuestra plataforma o contactarte directamente con nosotros.</p>
              </div>
              <img src={imgpresentacion1} alt="Mascota" className="imagen-Mascota" />
            </div>
          </section>
          <section className="content-section">
            <div className="contenido-container">
              <div className="texto-recomendacion">
                <h2>Recomendaciones</h2>
                <p>
                  Cómo puede dar el mejor cuidado posible a su perro, gato, caballo u otra mascota? Los residentes de Nuevo México deben de estar enteres del mínimo cuidado que se les debe de dar a los animales bajo las leyes privadas. Un requerimiento es que se les de la sustanciación. Esto quiere decir: comida, agua limpia, sombra y resguardo. Las leyes estatales también requieren que los perros y los gatos estén vacunados contra la rabia. Otros aspectos del buen cuidado son la esterilización, el entrenamiento compasivo, métodos de identificación y las formas apropiadas de mantener a su mascota dentro de su propiedad. Aquí hay algunas recomendaciones para ayudarle a proveer a sus mascotas con el cuidado que requiere y ameritan.
                </p>
                <h3>Consulta para tus mascotas sin limites</h3>
                <p>
                  Nuestro equipo de expertos está disponible para responder a tus preguntas sobre salud, nutrición, comportamiento y cuidados específicos de cada especie. Ya sea que necesite consejos sobre la alimentación adecuada para tu perro, recomendaciones para el cuidado de un hámster o sobre información sobre el hábitat ideal para tu iguana, estamos aquí para ayudarte.
                </p>
              </div>
              <img src={imgpresentacion2} alt="Mascotitas" className="imagen-mascotitas" />
            </div>
          </section>
          <section className="content-section">
            <div className="contenido2-container">
              <div className="texto-referenciado">
                <h2>Referencias</h2>
                <p>
                  Desde consejos sobre alimentación y nutrición hasta guías sobre entrenamiento y comportamiento, encontrarás información que te permite tomar decisiones informadas para el bienestar de tus mascotas. Además, ofrece acceso a profesionales veterinarios que pueden responder a tus preguntas y brindar asesoramiento personalizado.
                </p>
                <h3>Ofertas y Promociones</h3>
                <p>
                  Además, ofrecemos descuentos especiales en servicios de grooming, entrenamiento y consultas veterinarios, asegurando que tu mascota pronoste el mejor cuidado a un precio accesible. No olvides visitar nuestra sección de "Ofertas Especiales" para descubrir las últimas promociones y aprovechar al máximo tu presupuesto.
                </p>
              </div>
              <img src={imgpresentacion3} alt="Referencia" className="imagen-referencia" />
            </div>
          </section>
        </main>
                {/* Rutas para las diferentes páginas */}
                <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/inicio" component={Inicio} />
          <Route path="/explora" component={Explora} />
          <Route path="/categorias" component={Categorias} />
          <Route path="/lista-categorias" component={ListaCategorias} />
          <Route path="/ofertas" component={Ofertas} />
          <Route path="/descuentos" component={Descuentos} />
          <Route path="/blogs" component={Blog} />
          <Route path="/contactos" component={Contactos} />
          <Route path="/info-contacto" component={InfoContacto} />
          <Route path="/tienda" exact component={Tienda} /> {/* Ruta para la Tienda */}
          <Route path="/articulos" component={NuevaSeccion} /> {/* Nueva ruta */}
        </Switch>
        <footer className="footer">
          <p>&copy; 2025 ZOOMARKET. Todos los derechos reservados Jonatan Blanco.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;