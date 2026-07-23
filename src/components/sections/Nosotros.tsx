import SectionTag from '../ui/SectionTag'

const equipo = [
    {
        name: 'MARÍA ASÍS',
        cargo: 'Diseño Gráfico e Identidad Visual',
        profesion: 'Fundadora de Agencia Decimoquinta',
        desc: 'Convierto la visión de tu negocio en una marca profesional y funcional. Te ayudo a construir una identidad visual estratégica que te haga único e identificable, generando coherencia y confianza para conectar con tu cliente ideal.',
        img: `${import.meta.env.BASE_URL}images/equipo/maria-asis.jpg`,
    },
    {
        name: 'CAMILO PINEDA',
        cargo: 'Gestión de proyectos creativos y Marketing digital',
        profesion: 'Co-Fundador de Agencia Decimoquinta',
        desc: 'Ofrezco un servicio creativo multifocal, donde tendrás un único punto de contacto encargado de toda la ejecución creativa. Esto abarca una gestión profesional unificada y resultados coherentes.',
        img: `${import.meta.env.BASE_URL}images/equipo/camilo-pineda.jpg`,
    },
]

function Nosotros() {
    return (
        <section id="nosotros" className="nosotros">
            <div className="container">
                <div className="nosotros-encabezado">
                    <SectionTag>NOSOTROS</SectionTag>
                    <h2 className="nosotros-title">
                        NO SOMOS UNA
                        <br />
                        AGENCIA TRADICIONAL.
                    </h2>
                    <p className="nosotros-intro">
                        Combinamos estrategia, branding y dirección creativa para construir
                        tu marca con personalidad, coherencia y una visión clara.
                    </p>
                </div>

                <div className="equipo-grid">
                    {equipo.map((persona) => (
                        <div key={persona.name} className="equipo-item">
                            <div className="equipo-foto">
                                <img src={persona.img} alt={persona.name} />
                            </div>
                            <div className="equipo-info">
                                <h3>{persona.name}</h3>
                                <span className="equipo-cargo">{persona.cargo}</span>
                                <span className="equipo-profesion">{persona.profesion}</span>
                                <p>{persona.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Nosotros
