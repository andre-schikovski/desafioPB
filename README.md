# ParanaBanco - Desafio Técnico
Este projeto traz a execução de desafios técnicos relacionados a automatização de testes propostos no desafio do Paraná Banco.

## Objetivos

- Aprender e aplicar práticas modernas de QA, incluindo testes automatizados, análise de requisitos e validação de funcionalidades.
- Automatizar testes para aumentar a eficiência e reduzir erros humanos.
- Garantir a qualidade do software por meio de processos bem definidos e ferramentas adequadas.

## Tecnologias Utilizadas

- [Ferramenta de testes automatizados] —  Cypress.
- [Linguagem de programação] — JavaScript.
- [Ferramenta de CI/CD] — GitHub.

## Dependências

- Plugin AJV utilizado para gestão e validação de Schemas JSON, necessário para a execução de testes de APIs

## Como executar os testes

1. Após a instação das dependências do projeto (Node.JS V.22.13.0 e Cypress V. 14.5.1):
    ```bash
    npx cypress open
    ```
    Execute a partir da interface do Cypress os testes no browser selecionado.

2.  Execução via prompt/bash
   ```bash
    npx cypress run --spec "cypress/e2e/Desafio_FrontEnd.cy.js"
    npx cypress run --spec "cypress/e2e/api/users.cy.js"
    ```