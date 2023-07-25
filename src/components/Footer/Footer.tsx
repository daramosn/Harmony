import { Logo } from '@/assets/icons/Logo'
import { Github } from '@/assets/icons/Github'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer__title">Book consultation</h2>
            <form className="footer__form">
                <div className="footer__form-left">
                    <label className="footer__form-label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="footer__form-input"
                        type="text"
                        id="name"
                        name="name"
                    />

                    <label className="footer__form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="footer__form-input"
                        type="text"
                        id="email"
                        name="email"
                    />

                    <label className="footer__form-label" htmlFor="phone">
                        Phone number
                    </label>
                    <input
                        className="footer__form-input"
                        type="text"
                        id="phone"
                        name="phone"
                    />
                </div>

                <div className="footer__form-right">
                    <label className="footer__form-label" htmlFor="message">
                        Enter your message
                    </label>
                    <textarea
                        className="footer__form-textarea"
                        name="message"
                        id="message"
                        cols={20}
                        rows={10}
                    />

                    <button className="footer__form-button">
                        SEND MESSAGE
                    </button>
                </div>
            </form>

            <section className="footer__links">
                <Logo className="footer__links-logo" />
                <br />
                <a href="https://github.com/daramosn/Harmony">
                    <Github className="footer__links-github" />
                </a>
                <p className="footer__links-phone">📞 (555) 555-5555 </p>
                <p className="footer__links-email">📧 info@harmonyestate.com</p>
            </section>
        </footer>
    )
}

export default Footer
