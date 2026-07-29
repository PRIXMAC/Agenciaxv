import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
        <div className="container footer-inner">
            <div className="footer-left">
            <img
                src="/images/Logo-Decimoquinta.png"
                alt="D&eacute;cimo Quinta"
                className="footer-logo"
            />
            </div>

            <div className="footer-right">
            <h3 className="footer-title">CONT&Aacute;CTANOS</h3>
            <a href="mailto:agencia.decimoquinta@gmail.com" className="footer-link">
                agencia.decimoquinta@gmail.com <FaEnvelope className="footer-icon" />
            </a>
            <a href="https://wa.me/56996145262" className="footer-link footer-phone">
                +56 9 9614 5262 <FaWhatsapp className="footer-icon" />
            </a>
            </div>
        </div>
        </footer>
    )
}

export default Footer
