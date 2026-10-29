import './Home.css';
import imgHome from '../../assets/images/home.jpg';

export function Home() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <p>Your AI Learning Companion</p>
                    <i></i>
                </div>

                <h1>
                    Learn Smarter,
                    <br />
                    Understand Deeper.
                </h1>

                <p className="hero-description">
                    Turn your study materials into clear explanations,
                    interactive mind maps, and smarter practice.
                </p>

                <ul className="hero-benefits">
                    <li>Understand more.</li>
                    <li>Memorize better.</li>
                    <li>Achieve more.</li>
                </ul>

                <div className="hero-buttons">
                    <button className="primary-button">
                        Create Account
                    </button>

                    <button className="secondary-button">
                        Login
                    </button>
                </div>
            </div>

            <div className="hero-image">
                <img src={imgHome} alt="AI-powered learning visualization" />
            </div>
        </section>
    )
}
