# Ritual de foco

Uma experiencia de inspiracao curta para escolher uma intencao, encontrar uma ideia e guardar o que fizer sentido.

A aplicacao apresenta ideias por intencao, permite buscar no repertorio, favoritar frases, copiar o texto e alternar entre os temas claro e noturno.

## Pipelines

O projeto usa tres workflows independentes no GitHub Actions:

1. `ci.yml`: instala dependencias, executa lint e testes em Node.js 20 e 22.
2. `quality.yml`: verifica auditoria de dependencias e valida os arquivos publicados.
3. `deploy.yml`: prepara e publica o site estatico no GitHub Pages apos o push na branch `main`.

## Execucao local

```text
npm ci
npm test
npm run lint
```
