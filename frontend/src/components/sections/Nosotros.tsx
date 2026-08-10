import SectionTag from '../ui/SectionTag'

const equipo = [
    {
        name: 'MARÍA ASÍS',
        cargo: 'Dirección Creativa e Identidad Visual',
        profesion: 'Fundadora de Agencia Decimoquinta',
    },
    {
        name: 'CAMILO PINEDA',
        cargo: 'Gestión de proyectos creativos y Marketing digital',
        profesion: 'Co-Fundador de Agencia Decimoquinta',
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
                            <div className="equipo-info">
                                <h3>{persona.name}</h3>
                                <br />
                                <span className="equipo-cargo">{persona.cargo}</span>
                                <span className="equipo-profesion">{persona.profesion}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Nosotros
