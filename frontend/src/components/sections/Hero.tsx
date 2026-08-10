
import BotonAgenda from '../ui/BotonAgenda'


function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-text">
                        <span className="hero-subtitle">ESTUDIO CREATIVO Y BRANDING</span>
                        <h1 className="hero-title">
                            CONSTRUIMOS
                            <br />
                            MARCAS CON{' '}
                            <span className="text-yellow">IDENTIDAD</span> &amp;
                            <br />
                            <span className="text-orange">ESTRATEGIA</span>
                        </h1>
                        <p className="hero-description">
                            Estructuramos la presencia de tu marca mediante diseño gráfico, plataformas web y redes sociales. 
                            Traducimos tus objetivos comerciales en una comunicación visual clara y directa.
                        </p>
                        <BotonAgenda className="hero-button">
                            Agenda reunión
                        </BotonAgenda>
                    </div>

                    <div className="hero-cards">
                        <div className="card-yellow">
                            <img src={`${import.meta.env.BASE_URL}images/imagenes_hero_servicios/aplicacion-amarilla.jpg`} alt="" />
                        </div>
                        <div className="card-white">
                            <img src={`${import.meta.env.BASE_URL}images/imagenes_hero_servicios/aplicacion-negro.jpg`} alt="" />
                        </div>
                        <div className="card-orange">
                            <img src={`${import.meta.env.BASE_URL}images/imagenes_hero_servicios/aplicacion-naranja.jpg`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
