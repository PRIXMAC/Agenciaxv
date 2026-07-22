import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Promesa from './components/sections/Promesa'
import Problema from './components/sections/Problema'
import Servicios from './components/sections/Servicios'
import Proyectos from './components/sections/Proyectos'
import Soluciones from './components/sections/Soluciones'
import Proceso from './components/sections/Proceso'
import Nosotros from './components/sections/Nosotros'
import Contacto from './components/sections/Contacto'

import './styles/Navbar.css'
import './styles/Hero.css'
import './styles/Promesa.css'
import './styles/Problema.css'
import './styles/Servicios.css'
import './styles/Proyectos.css'
import './styles/Soluciones.css'
import './styles/Proceso.css'
import './styles/Nosotros.css'
import './styles/Contacto.css'
import './styles/Footer.css'
import './styles/responsive.css'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Promesa />
                <Problema />
                <Servicios />
                <Proyectos />
                <Soluciones />
                <Proceso />
                <Nosotros />
            </main>
            <Contacto />
            <Footer />
        </>
    )
}

export default App
