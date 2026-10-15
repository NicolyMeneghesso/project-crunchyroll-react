# Crunchyroll React

Projeto demonstrativo de uma landing page inspirada na página de assinatura da Crunchyroll. A interface apresenta um destaque promocional, opções de planos Premium e um rodapé com links e seletor de idioma. A aplicação é construída com React e Vite e pode ser executada em um container Docker.

> Este projeto é uma reprodução visual para fins demonstrativos e não é um serviço oficial da Crunchyroll. Preços e textos são dados estáticos de exemplo.

## Tecnologias

- React 19
- Vite 8
- React Bootstrap e Bootstrap 5
- React Router DOM
- JavaScript e CSS
- Docker e Docker Compose

## Estrutura do projeto

```text
.
├── Dockerfile
├── docker-compose.yml
├── index.html
├── package.json
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── main.css
    ├── components/
    │   ├── Header/
    │   └── Footer/
    ├── pages/
    │   └── Home/
    │       ├── components/  # Destaque e cards de planos
    │       ├── containers/  # Composição da página inicial
    │       └── data/        # Dados estáticos dos planos
    └── routes/
```

## Observações

- Os planos e valores exibidos são definidos estaticamente em `src/pages/Home/data/plans.js`.
- Os botões de login e assinatura são apenas elementos visuais; não há autenticação, checkout ou integração com uma API. As ações dos botões dos planos atualmente escrevem no console.
- Links do rodapé ainda usam destinos de demonstração.
- A imagem de destaque e a fonte DM Sans são carregadas de serviços externos; sua exibição depende de conexão com a internet.
- O Dockerfile e o Compose estão configurados para desenvolvimento com Vite, não para servir uma implantação de produção.
