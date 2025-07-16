/*

FrontEnd - Paraná Banco Desafio
Validação de elementos da página challenging_dom
Data: 17/07/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/

describe('Desafio - Validar elementos da página challenging_dom', () => {
  beforeEach(() => {
    cy.intercept('GET', '**optimizely.com/**', { statusCode: 204 });
    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  });

  it('Validar o funcionamento dos botões principais', () => {
    // Botões: azul, vermelho e verde
    cy.get('.button').should('exist').and('be.visible');
    cy.get('.button.alert').should('exist').and('be.visible');
    cy.get('.button.success').should('exist').and('be.visible');
   
});

  it('Clica nos botões usando classes específicas', () => {
    cy.get('a.button:not(.alert):not(.success)').click();   // botão azul
    cy.get('a.button.alert').click();                       // botão vermelho
    cy.get('a.button.success').click();                     // botão verde
  });

  it('Valida a estrutura da tabela e presença de dados', () => {
      // Verificar se  a tabela existe
      cy.get('table').should('exist').and('be.visible');

      // Validar que a tabela tem cabeçalho com 7 colunas
      cy.get('thead tr th').should('have.length', 7);

      // Valida que há pelo menos uma linha no corpo da tabela
      cy.get('tbody tr').should('have.length.greaterThan', 0);

      // Para cada linha, validar colunas e os botões de editar/deletar
      cy.get('tbody tr').each(($row) => {
        cy.wrap($row).find('td').should('have.length', 7);
        cy.wrap($row).find('a').contains('edit').should('exist');
        cy.wrap($row).find('a').contains('delete').should('exist');
      });
    });

    it('Valida que os dados da tabela estão visíveis e acessíveis', () => {
      cy.get('tbody tr').first().within(() => {
        cy.get('td').each(($cell) => {
          cy.wrap($cell).should('be.visible');
        });
      });
    });


});
