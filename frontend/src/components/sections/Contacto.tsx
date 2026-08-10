
import BotonAgenda from '../ui/BotonAgenda'


function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="contacto-cta">
        <div className="container text-center">
          <h2 className="contacto-title">
            ¿TU MARCA
            <br />
            TRANSMITE EL NIVEL
            <br />
            DE TU NEGOCIO?
          </h2>
          <BotonAgenda className="btn-contacto">
            AGENDAR REUNIÓN
          </BotonAgenda>
        </div>
      </div>
    </section>
  )
}

export default Contacto
