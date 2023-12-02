describe('template spec', () => {



  it('Deve retornar resultado ao pesquisar por UFC', () => {
    cy.visit('https://www.opovo.com.br/');
    cy.get('.icon-busca').click();
    cy.get('#busca', {timeout: 1000}).focus().type('UFC');
    cy.get('.btnBuscaButton').click();
    cy.get('#listagem').within(() => {
      cy.get('.caixa-listagem ').should('have.length.greaterThan', 0);
    });
  });
  
  it('Deve vefiricar se resultado ao pesquisar por UFC - Última Semana não é vazio', () => {
    cy.visit('https://www.opovo.com.br/');
    cy.get('.icon-busca').click();
    cy.get('#busca', {timeout: 1000}).focus().type('UFC');
    cy.get('li[rel="last_week"]').click({force: true});
    cy.get('.btnBuscaButton').click();
    cy.get('#listagem').within(() => {
      cy.get('.caixa-listagem ').should('have.length.be.gte', 0);
    });
  });
  
  it('Visitar página de um dos cadernos de Esportes', () => {
    cy.visit('https://www.opovo.com.br/');
    cy.get('#icon-menulateral').click();
    cy.get(':nth-child(2) > .parent-link > .d-flex > .icon-mais').click();
    cy.get(':nth-child(2) > .parent-link > .submenu-lateral > :nth-child(1) > a').click();
    cy.get('.title-listing').should('contain', 'Ceará Sporting Club');
  });
  
  it.only('Consultar autor(a) da última notícia de Carnaval', () => {
    cy.visit('https://www.opovo.com.br/');
    cy.get('.icon-busca').click();
    cy.get('#busca', {timeout: 1000}).focus().type('Carnaval');
    cy.get('.btnBuscaButton').click();
    cy.get(':nth-child(1) > h2 > a > .txt-materia-listagem > .titulo-mateira-listagem').should('be.visible').click();
    cy.get('.autor').should('exist');
  });
});