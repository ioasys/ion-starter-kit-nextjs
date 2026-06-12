# 🧩 @ioasys/ion-react Starter Kit for Next.js

Bem-vindo ao **@ioasys/ion-react Starter Kit**, o ponto de partida oficial para criar aplicações **Next.js** utilizando o **design system privado [@ioasys/ion](https://ion.ioasys.com.br)**.

Este template foi desenvolvido pela **ioasys** para oferecer uma base moderna, consistente e integrada com as boas práticas do time de frontend.

---

## 🚀 Iniciando um novo projeto

Crie um novo projeto Next.js a partir deste template com o comando abaixo:

```bash
npx create-next-app@latest --example "https://github.com/ioasys/ion-starter-kit-nextjs" [nome-do-projeto]
```

> Substitua `[nome-do-projeto]` pelo nome desejado para seu novo repositório.

---

## ⚙️ Pré-requisitos

Antes de começar, garanta que você tenha instalado:

- **Node.js** >= 22 (veja o `.nvmrc`)
- **npm** (este projeto usa npm — outros gerenciadores são bloqueados)
- **Git** (necessário para clonar o template via `create-next-app`)

Além disso, o `@ioasys/ion-react` é publicado no registry privado da ioasys. Para instalar as dependências, exporte o token de acesso:

```bash
export IOASYS_NPM_TOKEN=seu-token-aqui
```

> Solicite o token ao time de frontend da ioasys.

---

## 💻 Como rodar o projeto

Após clonar ou criar o projeto, instale as dependências e execute o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Scripts disponíveis

| Comando                 | Descrição                                  |
| ----------------------- | ------------------------------------------ |
| `npm run dev`           | Servidor de desenvolvimento                |
| `npm run build`         | Build de produção                          |
| `npm start`             | Servir o build de produção                 |
| `npm run lint`          | Lint com Biome                             |
| `npm run lint:fix`      | Lint com correção automática               |
| `npm run format`        | Formatação com Biome                       |
| `npm run check-types`   | Checagem de tipos (`tsc --noemit`)         |
| `npm test`              | Testes com Vitest (modo watch)             |
| `npm run test:coverage` | Testes com relatório de cobertura          |

> O pre-commit (husky + lint-staged) roda a checagem de tipos e o lint automaticamente.

---

## 📚 Recursos e Documentação

- **Documentação oficial do @ioasys/ion**  
  Acesse a documentação do design system para conhecer componentes, tokens e guidelines:  
  👉 [https://ion.ioasys.com.br](https://ion.ioasys.com.br)

- **Wikijs da ioasys**  
  Repositório central com diretrizes, padrões de código e processos do time de frontend:  
  👉 [https://wikijs.ioasys.com.br](https://wikijs.ioasys.com.br)

---

## 🧠 Sobre o Ion

O **@ioasys/ion** é o design system privado da ioasys, criado para garantir **consistência visual**, **qualidade de código** e **eficiência no desenvolvimento** das interfaces dos produtos da empresa.  
Este starter kit traz uma configuração base pronta para uso, com:

- Estrutura Next.js 16 (App Router) + React 19
- Integração com o design system Ion
- Tailwind CSS 4 com tokens e tipografia do Ion
- Suporte a temas (light/dark/system) sem flash de tema incorreto
- Lint e formatação com Biome (pre-commit via husky)
- Testes com Vitest + Testing Library
- Sitemap e robots.txt gerados automaticamente

---

## 🏗️ Estrutura do projeto

```
├── public/              # Assets públicos (ícones, logos, etc.)
├── src/
│   ├── app/             # Rotas e páginas Next.js (App Router)
│   ├── components/      # Componentes (atomic design)
│   ├── contexts/        # React contexts e providers (ex.: tema)
│   ├── hooks/           # Hooks reutilizáveis
│   ├── services/        # Chamadas a APIs e integrações
│   ├── types/           # Tipagens TypeScript
│   ├── styles/          # Configurações de tema e Tailwind
│   └── utils/           # Funções auxiliares
├── package.json
└── README.md
```

---

## 🧩 Licença

Este projeto é de uso **interno da ioasys**.  
O conteúdo, código e design system **não devem ser compartilhados publicamente** sem autorização prévia.

---

**ioasys © 2026** — Starter Kit Ion + Next.js  
Desenvolvido com 💜 pelo time de frontend.
