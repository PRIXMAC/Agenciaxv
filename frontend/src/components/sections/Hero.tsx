

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  
                            utlabore et dolore magna aliqua. 
                        </p>
                        <a href="#contacto" className="hero-button">
                            Agenda reuni&oacute;n
                        </a>
                    </div>

                    <div className="hero-cards">
                        <div className="card-yellow">
                            <img src={`${import.meta.env.BASE_URL}images/card-amarilla.jpg`} alt="" />
                        </div>
                        <div className="card-white">
                            <img src={`${import.meta.env.BASE_URL}images/card-blanca.jpg`} alt="" />
                        </div>
                        <div className="card-orange">
                            <img src={`${import.meta.env.BASE_URL}images/card-naranja.jpg`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
