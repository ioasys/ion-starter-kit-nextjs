# AGENTS.md — ion Starter Kit (Next.js)

Starter kit oficial da ioasys: Next.js (App Router) + design system **@ioasys/ion-react**. Stack: Next.js 16, React 19, TypeScript estrito, Tailwind CSS 4, Biome, Vitest.

## Documentação do design system ion — leia antes de gerar UI

O pacote `@ioasys/ion-react` embarca a documentação completa para agentes de IA em `node_modules/@ioasys/ion-react/ai/`:

- `ai/llms.txt` — índice de toda a documentação
- `ai/components.json` — manifesto machine-readable (props, tipos e union values de todos os componentes)
- `ai/dos-and-donts.md` — regras obrigatórias (✅/❌)
- `ai/components.md` — catálogo dos 37 componentes + árvore de decisão
- `ai/components/<Nome>.md` — props exatas, variantes válidas, exemplos e armadilhas por componente
- `ai/patterns.md` — receitas de composição (formulário, página com header, sidebar, modal…)
- `ai/icons.md` — nomes válidos de ícones (`IconName`)
- `ai/tokens-and-theme/` — cores, tipografia, espaçamento, temas claro/escuro

## Regras de ouro do ion

1. **Sempre** importe de `@ioasys/ion-react`. Nunca recrie componentes que já existem.
2. **Nunca** invente variantes nem nomes de ícone — use apenas os valores documentados.
3. **Cores** via props semânticas (`color="danger"`) e tokens CSS — nunca hex no `className`.
4. **Tipografia** via componente `Typography` — nunca `font-size` cru.
5. Temas **claro/escuro** são automáticos via tokens e `data-theme` — nunca cores fixas.
6. `Button` para ação, `Link` para navegação.

## Trabalhando neste repositório

- Guia completo (arquitetura, sistema de temas, testes): [`CLAUDE.md`](./CLAUDE.md)
- Comandos: `npm run dev` · `npm run build` · `npm run lint` · `npm run check-types` · `npm test`
- Biome: tabs, aspas simples, sem ponto e vírgula, 80 colunas. Textos de UI em pt-BR.
- Componentes locais em atomic design (`src/components/{atoms,molecules,organisms,templates,pages}`) compõem sobre os do ion.
- Registry privado Azure DevOps: instalação exige `IOASYS_NPM_TOKEN` e npm (yarn bloqueado).
