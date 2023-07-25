import { Facebook } from '@/assets/icons/Facebook'
import { Instagram } from '@/assets/icons/Instagram'
import { Twitter } from '@/assets/icons/Twitter'
import { Linkedin } from '@/assets/icons/Linkedin'
import { Logo } from '@/assets/icons/Logo'

import './Header.scss'

const Header = () => {
    return (
        <header className="header__hero">
            <div className="header__hero-left">
                <nav className="header__navbar">
                    <Logo className="header__logo" />
                    <ul className="header__navbar-items">
                        <li className="header__navbar-item">Features</li>
                        <li className="header__navbar-item">Services</li>
                        <li className="header__navbar-item">Feedbacks</li>
                    </ul>
                </nav>

                <section className="header__titles">
                    <h5 className="header__titles-slogan">
                        Discover the perfect blend of luxury and tranquility
                    </h5>
                    <h1 className="header__titles-brand">Maple</h1>
                </section>

                <section className="header__media">
                    <Facebook className="header__media-brand" />
                    <Instagram className="header__media-brand" />
                    <Twitter className="header__media-brand" />
                    <Linkedin className="header__media-brand" />
                </section>
            </div>

            <div className="header__hero-right" />
            <div className="header__hero-card">
                <h3 className="header__hero-card-number">437</h3>
                <h2 className="header__hero-card-units">Units</h2>
            </div>
        </header>
    )
}

export default Header
