import './ModalCorreo.css'

interface ModalCorreoProps {
    correo: string
    abierto: boolean
    onCerrar: () => void
}

function ModalCorreo({ correo, abierto, onCerrar }: ModalCorreoProps) {
    if (!abierto) return null

    return (
        <div className="modal-overlay" onClick={onCerrar}>
            <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
                <button className="modal-cerrar" onClick={onCerrar}>
                    ✕
                </button>
                <h3>Contáctanos</h3>
                <a href={`mailto:${correo}`} className="modal-correo">
                    {correo}
                </a>
                <p className="modal-instruccion">Haz clic en el correo para enviarnos un mensaje</p>
            </div>
        </div>
    )
}

export default ModalCorreo
