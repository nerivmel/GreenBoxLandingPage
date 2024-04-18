import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#features">Características</a></li>
            <li><a href="#pricing">Precios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h1>Bienvenido a nuestra Landing Page</h1>
          <p>Aquí puedes describir brevemente lo que ofrece tu producto o servicio.</p>
        </section>
        <section id="features">
          <h2>Características</h2>
          <p>Enumera aquí las características principales de tu producto o servicio.</p>
        </section>
        <section id="pricing">
          <h2>Precios</h2>
          <p>Presenta aquí tus diferentes planes o precios.</p>
        </section>
        <section id="contact">
          <h2>Contacto</h2>
          <p>Proporciona aquí información de contacto o un formulario de contacto.</p>
        </section>
      </main>
      <footer>
        <p>Derechos de autor © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
    
    </>
  )
}

export default App
