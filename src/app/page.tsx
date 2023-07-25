import { Logo } from '../assets/icons/Logo'
import { Facebook } from '../assets/icons/Facebook'
import { Twitter } from '../assets/icons/Twitter'
import { Instagram } from '@/assets/icons/Instagram'
import { Linkedin } from '@/assets/icons/Linkedin'

import oakBg from '../assets/images/oak-bg.webp'
import villaBg from '../assets/images/villa-bg.webp'
import maple from '../assets/images/maple.webp'
import oakvilleBg from '../assets/images/oakville-bg.webp'

import Image from 'next/image'

import { FEATURES_LIST as features } from '../db/features'

import './Home.scss'
import { Quote } from '@/assets/icons/Quote'
import { Github } from '@/assets/icons/Github'

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

            <section className="gallery">
                <h4 className="gallery__title">Live in the future</h4>
                <div className="gallery__grid">
                    <div className="gallery__grid-1">
                        <Image
                            className="gallery__grid-image"
                            src={villaBg}
                            alt="building"
                        />
                        <p className="gallery__grid-name"> 15 VILLA</p>
                    </div>
                    <div className="gallery__grid-2">
                        <Image
                            className="gallery__grid-image"
                            src={oakBg}
                            alt="building"
                        />
                        <p className="gallery__grid-name"> 150 OAK</p>
                    </div>
                    <div className="gallery__grid-3">
                        <Image
                            className="gallery__grid-image"
                            src={oakvilleBg}
                            alt="building"
                        />
                        <p className="gallery__grid-name"> 30 OAKVILLE</p>
                    </div>
                    <div className="gallery__grid-4">
                        <Image
                            className="gallery__grid-image"
                            src={maple}
                            alt="building"
                        />
                        <p className="gallery__grid-name"> 234 MAPLE</p>
                    </div>

                    <div className="gallery__grid-text">
                        <p>Comfort is a choice</p>
                        <p className="gallery__grid-subtext">
                            and we offer 4 of those
                        </p>
                    </div>
                </div>
            </section>

            <section className="feedback">
                <h2 className="feedback__title">What others are saying</h2>

                <div className="feedback__articles">
                    <article className="feedback__articles-item">
                        <Quote className="feedback__icon" />
                        <p className="feedback__view">
                            I love the fact that there is a linking road in
                            Mabushi opposite blue Cabana which is really
                            amazing. I love the road network and the structure
                            is impressive.
                        </p>
                        <h5 className="feedback__author">Mr & Mrs Bamidele</h5>
                    </article>
                    <article className="feedback__articles-item">
                        <Quote className="feedback__icon" />
                        <p className="feedback__view">
                            I love the fact that there is a linking road in
                            Mabushi opposite blue Cabana which is really
                            amazing. I love the road network and the structure
                            is impressive.
                        </p>
                        <h5 className="feedback__author">Mr & Mrs Bamidele</h5>
                    </article>
                    <article className="feedback__articles-item">
                        <Quote className="feedback__icon" />
                        <p className="feedback__view">
                            I love the fact that there is a linking road in
                            Mabushi opposite blue Cabana which is really
                            amazing. I love the road network and the structure
                            is impressive.
                        </p>
                        <h5 className="feedback__author">Mr & Mrs Bamidele</h5>
                    </article>
                    <article className="feedback__articles-item">
                        <Quote className="feedback__icon" />
                        <p className="feedback__view">
                            I love the fact that there is a linking road in
                            Mabushi opposite blue Cabana which is really
                            amazing. I love the road network and the structure
                            is impressive.
                        </p>
                        <h5 className="feedback__author">Mr & Mrs Bamidele</h5>
                    </article>
                </div>
            </section>

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
                    <p className="footer__links-email">
                        📧 info@harmonyestate.com
                    </p>
                </section>
            </footer>
        </div>
    )
}

export default Home
