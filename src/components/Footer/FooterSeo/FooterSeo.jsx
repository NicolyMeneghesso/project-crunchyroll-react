import "./FooterSeo.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

function FooterSeo() {

  const [expanded, setExpanded] = useState(false);

  return (
    <section className="footer-seo">

      {/* A classe "footer-seo-content" é sempre aplicada. Se expanded for true, também adiciona a classe "expanded".
          Se expanded for false, nenhuma classe extra é adicionada. */}
      <div className={`footer-seo-content ${expanded ? "expanded" : ""}`}>

        <div className="footer-seo-container footer-seo-text">
          <div className="text-group">
            <p class="m-0 p-0">
              Bem-vindo ao Crunchyroll, seu destino definitivo para streaming do melhor entretenimento em anime.
              Seja você um fã de longa data ou esteja apenas começando sua jornada no mundo dos animes,
              o Crunchyroll oferece uma vasta biblioteca de séries e filmes de anime de primeira linha.
              De aventuras cheias de ação como Naruto e One Piece a favoritos dos fãs como Demon Slayer e Attack on Titan,
              trazemos o mundo do anime diretamente para a sua tela. Com milhares de horas de conteúdo,
              você encontrará algo para cada humor e gosto, seja ação eletrizante, romance emocionante ou mistérios envolventes.
            </p>

            <p class="m-0 p-0">
              Na Crunchyroll, temos orgulho de ser a plataforma preferida dos amantes de anime ao redor do mundo.
              Você pode mergulhar em uma ampla variedade de gêneros, incluindo fantasia, slice of life e ficção científica,
              garantindo que sempre haja algo novo para descobrir.
            </p>
          </div>

          <div className="text-group">
            <p class="m-0 p-0">
              Com simulcasts diretamente do Japão, você nunca perderá um momento dos lançamentos mais recentes e incríveis de anime.
              Nossa seleção vai além das séries—desfrute de uma curadoria especial de filmes de anime que destacam o melhor da animação
              e narrativa. Assista a qualquer hora, em qualquer lugar, com o aplicativo Crunchyroll disponível em todos os seus dispositivos.
            </p>

            <p class="m-0 p-0">
              Além do streaming, a Crunchyroll é um centro para tudo relacionado a anime.
              Explore a Loja Crunchyroll para encontrar mercadorias exclusivas de anime, colecionáveis e vestuário.
              Mantenha-se atualizado com as Notícias da Crunchyroll, trazendo o mais recente sobre anime, mangá e cultura pop.
              E para os gamers, a Crunchyroll Games traz seus mundos de anime favoritos à vida de maneiras emocionantes e interativas.
              Junte-se à comunidade Crunchyroll e mergulhe em um mundo onde o anime é mais que um gênero—é um estilo de vida.
            </p>
          </div>
        </div>

      </div>

      <Button variant="link" className="footer-seo-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Menos detalhes" : "Mais detalhes"}
      </Button>
    </section>
  );
}

export default FooterSeo;