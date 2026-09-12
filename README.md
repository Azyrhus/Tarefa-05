# GitHub Actions Marketplace - Projeto CI/CD

## Objetivo

Este projeto foi desenvolvido para demonstrar o uso de três Actions
disponíveis no GitHub Marketplace em uma pipeline automatizada de CI/CD.

A aplicação é uma API simples desenvolvida em ASP.NET Core 8.0.

## Actions utilizadas

### 1. actions/checkout@v4

**Etapa:** início da pipeline.

**Função:** faz o checkout do código do repositório para que o runner
do GitHub Actions possa acessar os arquivos do projeto.

**Contribuição:** automatiza a obtenção do código-fonte, eliminando a
necessidade de copiar o projeto manualmente para o ambiente de execução.

### 2. actions/setup-dotnet@v4

**Etapa:** preparação do ambiente.

**Função:** instala/configura o .NET 8 no runner utilizado pela pipeline.

**Contribuição:** garante que a versão necessária do ambiente .NET esteja
disponível para restaurar dependências, compilar e testar a aplicação.

### 3. docker/build-push-action@v6

**Etapa:** empacotamento.

**Função:** constrói uma imagem Docker utilizando o Dockerfile do projeto.

**Contribuição:** automatiza o empacotamento da aplicação em uma imagem
Docker, preparando o projeto para uma futura implantação.

## Fluxo da pipeline

```text
Push / Pull Request
        |
        v
Checkout do código
        |
        v
Configuração do .NET 8
        |
        v
Restore
        |
        v
Build
        |
        v
Testes
        |
        v
Build da imagem Docker
        |
        v
Pipeline concluída
```

## Estrutura

```text
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── MarketplaceActionsDemo.Tests/
│   ├── HealthTests.cs
│   └── MarketplaceActionsDemo.Tests.csproj
├── Dockerfile
├── .dockerignore
├── .gitignore
├── MarketplaceActionsDemo.csproj
├── Program.cs
└── README.md
```

## Como executar localmente

É necessário ter o .NET 8 SDK instalado.

```bash
dotnet restore
dotnet build
dotnet test
dotnet run
```

Depois, acesse:

```text
http://localhost:5000
```

ou a porta exibida pelo terminal.

## Como executar no GitHub

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste projeto.
3. Garanta que o arquivo `.github/workflows/ci-cd.yml` foi enviado.
4. Faça um commit/push na branch `main`.
5. Acesse a aba **Actions** do repositório.
6. Abra o workflow **CI/CD - GitHub Marketplace Actions**.
7. Verifique cada etapa da execução.

## Resultado esperado

A execução deve apresentar as etapas com sucesso:

- Checkout do código: concluído
- Configuração do .NET: concluída
- Restore: concluído
- Build: concluído
- Testes: concluídos
- Build da imagem Docker: concluído

## Conclusão

O projeto demonstra como Actions do GitHub Marketplace podem ser
combinadas em uma única pipeline para automatizar diferentes partes
do processo de desenvolvimento.

O checkout automatiza a obtenção do código, o setup-dotnet prepara o
ambiente de desenvolvimento e a Action do Docker automatiza a criação
da imagem da aplicação.

Com isso, sempre que houver uma alteração na branch principal, o GitHub
pode executar automaticamente a validação e o empacotamento do projeto.
