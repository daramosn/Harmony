import './Home.scss'
import { Logo } from '../assets/Logo'

const Home = () => {
    return (
        <div className="home">
            <header className="header__hero">
                <div className="header__hero-left">
                    <nav className="header__navbar">
                        <Logo />
                        <ul className="header__navbar-items">
                            <li className="header__navbar-item">Features</li>
                            <li className="header__navbar-item">Services</li>
                            <li className="header__navbar-item">Feedbacks</li>
                        </ul>
                    </nav>

                    <section className="header__titles">
                        <h4 className="header__titles-slogan">
                            Discover the perfect blend of luxury and tranquility
                        </h4>
                        <h2 className="header__titles-brand">Maple</h2>
                    </section>

                    <footer>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </footer>
                </div>

                <div className="header__hero-right" />
                <div className="header__hero-card">
                    <h3>555</h3>
                </div>
            </header>

            <section>
                <div>Hola</div>
            </section>
            <section>Features</section>

            <section>Gallery</section>

            <section>Feedback</section>

            <footer>Footer</footer>
        </div>
    )
}

export default Home
