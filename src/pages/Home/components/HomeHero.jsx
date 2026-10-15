import "./HomeHero.css";
import Button from "react-bootstrap/Button";

function HomeHero() {
  return (
    <section className="premium-hero">
      <picture className="premium-hero-image-wrapper">
        <source
          srcSet="
            https://static.crunchyroll.com/cr-acquisition/assets/img/start/hero/brazil-latam/background-desktop.webp 1x,
            https://static.crunchyroll.com/cr-acquisition/assets/img/start/hero/brazil-latam/background-desktop@2x.webp 2x,
            https://static.crunchyroll.com/cr-acquisition/assets/img/start/hero/brazil-latam/background-desktop@3x.webp 3x
          "
          type="image/webp"
        />

        <img
          srcSet="
            https://static.crunchyroll.com/cr-acquisition/assets/img/start/hero/brazil-latam/background-desktop@2x.jpg 2x,
            https://static.crunchyroll.com/cr-acquisition/assets/img/start/hero/brazil-latam/background-desktop@3x.jpg 3x
          "
          src="https://static.crunchyroll.com/cr-acquisition/assets/img/start/hero/brazil-latam/background-desktop.jpg"
          alt="Ilustração promocional da Crunchyroll"
          className="premium-hero-image"
        />
      </picture>

      <div className="premium-hero-overlay" />

      <div className="premium-hero-container">
        <div className="premium-hero-content">

          <h1 className="premium-hero-title">
            A maior coleção de Anime sob demanda do mundo
          </h1>

          <p className="premium-hero-text">
            Junte-se ao Crunchyroll e descubra o mundo do Anime
          </p>

          <Button
            variant="light"
            className="premium-hero-button"
          >
            Iniciar Teste Grátis
          </Button>

        </div>
      </div>
    </section>
  );
}

export default HomeHero;