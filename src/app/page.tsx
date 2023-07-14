import { Logo } from '../assets/icons/Logo'
import { Facebook } from '../assets/icons/Facebook'
import { Twitter } from '../assets/icons/Twitter'
import { Instagram } from '@/assets/icons/Instagram'
import { Linkedin } from '@/assets/icons/Linkedin'

import Image from 'next/image'

import { FEATURES_LIST as features } from '../db/features'

import './Home.scss'

const Home = () => {
    return (
        <div className="home">
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

            <section className="features">
                <ul className="features__list">
                    {features.map((feature) => (
                        <li className="features__item" key={feature.id}>
                            <Image
                                className="features__item-icon"
                                src={feature.icon}
                                alt="icon"
                            />
                            <h4 className="features__item-title">
                                {feature.title}
                            </h4>
                            <p className="features__item-description">
                                {feature.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
            <section>Features</section>

            <section>Gallery</section>

            <section>Feedback</section>

            <footer>Footer</footer>
        </div>
    )
}

export default Home
