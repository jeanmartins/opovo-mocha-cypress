<reference types='cypress'/>

export class PageObjectOPovo {
    navigate() {
        cy.visit('https://www.opovo.com.br/');
    }
}