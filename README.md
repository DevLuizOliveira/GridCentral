# 🏁 GRID CENTRAL

O **GRID CENTRAL** é uma aplicação web interativa desenvolvida para entusiastas de Fórmula 1. A aplicação permite buscar informações detalhadas sobre os pilotos da categoria através do seu número de corrida, utilizando a API pública **OpenF1**.

---

## 🚀 Funcionalidades

- **Busca por Número de Piloto:** Consulta em tempo real das informações do piloto fornecendo seu número.
- **Integração com OpenF1 API:** Consumo dos dados oficiais de sessão e pilotos da F1.
- **Exibição Personalizada:**
  - Nome completo e sigla/acrônimo.
  - Foto do piloto (com tratamento de exceções específicas).
  - Bandeira e nome do país de origem (via CDN Flagcdn).
  - Escuderia (equipe) e imagem do carro correspondente.
- **Título Interativo:** Alternância dinânica no título da aba do navegador exibindo o nome do piloto consultado.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da interface.
- **CSS3:** Estilização e layout responsivo (`style.css`).
- **JavaScript (ES6+):** Manipulação do DOM, consumo de API assíncrona (`fetch`) e lógica da aplicação.
- **APIs Externas:**
  - [OpenF1 API](https://openf1.org/): Dados de pilotos e sessões de F1.
  - [FlagCDN](https://flagcdn.com/): Exibição dinâmica de bandeiras dos países.

---

## 📂 Estrutura de Pastas

```text
GRID-CENTRAL/
├── img/
│   ├── favicon/
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon-16x16.png
│   │   └── site.webmanifest
│   ├── equipes/
│   ├── carros/
│   └── artigo-F1-novo-2.jpg
├── index.html
├── script.js
├── style.css
└── README.md
```

---

## 🏁 Como Executar o Projeto

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/DevLuizOliveira/GridCentral.git
   ```

2. **Acessar a Pasta do Projeto:**
   ```bash
   cd grid-central
   ```

3. **Abrir a Aplicação:**
   - Abra o arquivo `index.html` diretamente em qualquer navegador moderno.
   - Ou utilize a extensão **Live Server** no VS Code para uma experiência de desenvolvimento em tempo real.

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais detalhes.
