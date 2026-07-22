import SectionTag from '../ui/SectionTag'

function Problema() {
    return (
        <section id="problema" className="problema">
            <div className="container">
                <div className="problema-inner">
                    <SectionTag>PROBLEMA</SectionTag>
                    <h2 className="problema-title">
                        TU NEGOCIO PUEDE
                        <br />
                        SER <span className="text-yellow">EXCELENTE</span>, PERO
                        <br />
                        TU IMAGEN PODRÍA
                        <br />
                        ESTAR <span className="text-orange">FRENANDO</span> TU
                        <br />
                        CRECIMIENTO.
                    </h2>
                    <p className="problema-text">
                        Muchas empresas tienen un servicio sobresaliente, pero proyectan
                        una identidad genérica o desactualizada. En Décimo Quinta
                        construimos activos comerciales funcionales y memorables.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Problema
