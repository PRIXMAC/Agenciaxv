import SectionTag from '../ui/SectionTag'

const servicios = [
  {
    title: 'BRANDING\nESTRATÉGICO',
    description:
      'Construimos identidades visuales coherentes, memorables y alineadas con los objetivos de cada marca.',
  },
  {
    title: 'DISEÑO WEB',
    description:
      'Diseñamos experiencias digitales funcionales, modernas y adaptadas a computadores y dispositivos móviles.',
  },
  {
    title: 'COMUNICACIÓN\nVISUAL',
    description:
      'Creamos piezas gráficas capaces de comunicar ideas, fortalecer la identidad y conectar con el público.',
  },
]

function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="container">
        <div className="servicios-encabezado">
          <SectionTag>SERVICIOS</SectionTag>
          <h2 className="servicios-title">
            DISEÑO PARA MARCAS
            <br />
            QUE QUIEREN DESTACAR.
          </h2>
        </div>

        <div className="servicios-grid">
          {servicios.map((servicio, i) => (
            <article key={i} className="servicio-card">
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
