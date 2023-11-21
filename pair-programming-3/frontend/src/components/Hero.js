import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>backroads app</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <Link to="tours" className="btn hero-btn">
            explore tours
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hero;
