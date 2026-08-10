import SectionTag from '../ui/SectionTag'

const base = import.meta.env.BASE_URL

const servicios = [
  {
    title: 'BRANDING\nESTRATÉGICO',
    description:
      'Construimos identidades visuales coherentes, memorables y alineadas con los objetivos de cada marca.',
    img: `${base}images/imagenes_hero_servicios/aplicacion-negro.jpg`,
  },
  {
    title: 'DISEÑO WEB',
    description:
      'Diseñamos experiencias digitales funcionales, modernas y adaptadas a computadores y dispositivos móviles.',
    img: `${base}images/imagenes_hero_servicios/aplicacion-amarilla.jpg`,
  },
  {
    title: 'COMUNICACIÓN\nVISUAL',
    description:
      'Creamos piezas gráficas capaces de comunicar ideas, fortalecer la identidad y conectar con el público.',
    img: `${base}images/imagenes_hero_servicios/aplicacion-naranja.jpg`,
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
            <article
              key={i}
              className="servicio-card"
              style={{ backgroundImage: `url(${servicio.img})` }}
            >
                <div className="servicio-card-body">
                    <h3>{servicio.title}</h3>
                    <p>{servicio.description}</p>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
