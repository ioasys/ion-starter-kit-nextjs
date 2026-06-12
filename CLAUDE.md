# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o projeto

Starter kit oficial da ioasys para aplicações Next.js (App Router) com o design system privado **@ioasys/ion-react**. Stack: Next.js 16, React 19, TypeScript estrito, Tailwind CSS 4, Biome (lint + format), Vitest + Testing Library.

## 🤖 Documentação do ion para IA — leia antes de gerar UI

O pacote `@ioasys/ion-react` (>= 0.6.4) embarca a documentação completa do design system em `node_modules/@ioasys/ion-react/ai/`. Antes de gerar ou editar qualquer UI:

1. `node_modules/@ioasys/ion-react/ai/llms.txt` — índice de toda a documentação (manifesto machine-readable em `ai/components.json`)
2. `node_modules/@ioasys/ion-react/ai/dos-and-donts.md` — regras obrigatórias (✅/❌)
3. `node_modules/@ioasys/ion-react/ai/components.md` — catálogo dos 37 componentes + árvore de decisão
4. `node_modules/@ioasys/ion-react/ai/components/<Nome>.md` — props exatas, variantes válidas e exemplos do componente que for usar
5. `node_modules/@ioasys/ion-react/ai/patterns.md` — receitas de composição (formulário, página, sidebar, modal…)
6. `node_modules/@ioasys/ion-react/ai/icons.md` — nomes válidos de ícones (`IconName`)
7. `node_modules/@ioasys/ion-react/ai/tokens-and-theme/` — cores, tipografia, espaçamento, temas

Regras de ouro: importe sempre de `@ioasys/ion-react` (não recrie componentes); nunca invente variantes nem nomes de ícone; cores via props semânticas/tokens (nunca hex no `className`); texto via `Typography` (nunca `font-size` cru); temas claro/escuro são automáticos (nunca `dark:` hardcoded); `Button` para ação, `Link` para navegação.

## Registry privado

O `@ioasys/ion-react` vem do registry Azure DevOps da ioasys, configurado no `.npmrc`. A instalação exige a variável de ambiente `IOASYS_NPM_TOKEN`. Use **npm** (o `package.json` bloqueia yarn) e Node >= 22 (`.nvmrc`).

Se um upgrade do ion-react quebrar com `Cannot find module '@ioasys/ion-react'`, verifique o tarball publicado com `npm pack @ioasys/ion-react@<versão> --dry-run` — já houve publish sem a pasta `dist/`.

## Comandos

```bash
npm run dev            # servidor de desenvolvimento (localhost:3000)
npm run build          # build de produção
npm run lint           # biome check .
npm run lint:fix       # biome check --write .
npm run check-types    # tsc --noemit
npm test               # vitest em modo watch
npm run test:coverage  # vitest run --coverage
npx vitest run <path>  # rodar um único arquivo de teste
```

O pre-commit (husky) roda `check-types` e `lint-staged` (biome com `--write` nos arquivos staged) — commits falham com erro de tipo ou lint.

## Convenções de código

Biome, não ESLint/Prettier: tabs, aspas simples, sem ponto e vírgula, largura 80, imports organizados automaticamente. Comentários e textos de UI em pt-BR.

## Arquitetura

- **Componentes em atomic design**: `src/components/{atoms,molecules,organisms,templates,pages}`. Componentes visuais vêm do `@ioasys/ion-react` (Button, Typography, Icon, IconButton...); os locais compõem sobre eles.
- **Rotas**: App Router com route groups — `src/app/(unauth)/` para páginas públicas. Testes de página ficam ao lado (`page.test.tsx`).
- **Alias** `@/` → `src/` (tsconfig e vitest.config).
- **`src/services/`**: camada para APIs, com `queryKeys.ts` centralizando chaves de query.

### Sistema de temas (light/dark)

Três peças que funcionam juntas — alterações em uma geralmente exigem revisar as outras:

1. **Script inline em [src/app/layout.tsx](src/app/layout.tsx)** roda antes da hidratação e define `document.documentElement.dataset.theme` a partir do localStorage (chave `theme`) ou do `prefers-color-scheme`, evitando flash de tema errado (FOUC).
2. **[src/contexts/theme.tsx](src/contexts/theme.tsx)** (`ThemeProvider`/`useTheme`) gerencia `light | dark | system` em runtime, persiste no localStorage e mantém `data-theme` sempre explícito.
3. **CSS do ion em [src/styles/global.css](src/styles/global.css)**: importa os temas do ion-react em ordem (common → reference → dimensions → light → dark → typography). O variant `dark:` do Tailwind reage a `[data-theme="dark"]`, **não** ao `prefers-color-scheme` — por isso o `data-theme` precisa estar sempre setado. O `@source` no final faz o Tailwind enxergar as classes usadas dentro do ion-react.

Componentes client que dependem do tema resolvido (ex.: [src/components/atoms/ThemeToggle/index.tsx](src/components/atoms/ThemeToggle/index.tsx)) usam um estado `mounted` para evitar mismatch de hidratação.

### Testes

Vitest com jsdom e globals habilitados. O [vitest.setup.ts](vitest.setup.ts) mocka `window.matchMedia` (exigido pelo ThemeProvider) — qualquer componente sob `ThemeProvider` depende desse mock.
