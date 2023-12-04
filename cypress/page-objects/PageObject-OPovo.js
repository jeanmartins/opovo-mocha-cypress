/// <reference types='cypress'/>

export class PageObjectOPovo {
    navigate() {
        cy.visit('https://www.opovo.com.br/');
    }

    searchPage(searchKey){
        cy.get('.icon-busca').click();
        cy.get('#busca', {timeout: 5000}).focus().type(searchKey);
        cy.get('.btnBuscaButton').click();
    }

    searchPageWithIntercept(searchKey,urlIntercept){
        cy.intercept('GET', urlIntercept).as('search');
        searchPage(searchKey);
        cy.wait(['@search'], { responseTimeout: 15000 });
    }
    validateSearchPage(validateKey,validateValue){
        cy.get('#listagem').within(() => {
            cy.get('.caixa-listagem').should(validateKey, validateValue);
          });
    }
   
    navigateToCearaSports(){
        cy.get('#icon-menulateral').click();
        cy.get(':nth-child(2) > .parent-link > .d-flex > .icon-mais').click();
        cy.get(':nth-child(2) > .parent-link > .submenu-lateral > :nth-child(1) > a').click();
    }

    validatePageIsCearaSports(){
        cy.get('.title-listing').should('contain', 'Ceará Sporting Club');
    }

    navigateIfLinkIsVisible(element){
        cy.get(element).should('be.visible').and('have.css', 'pointer-events', 'auto').click();
    }

    validateAuthorExist(){
        cy.get('.autor').should('be.visible');
    }

    addFilterToSearchPage(element){
        cy.get(element).click({force: true});
    }
}