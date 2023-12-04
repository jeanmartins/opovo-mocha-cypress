/// <reference types='cypress'/>
import { PageObjectOPovo } from "../page-objects/PageObject-OPovo";

describe('O Povo Testes', () => {
  const pageObjectOPovo = new PageObjectOPovo();

  beforeEach(() => {
    pageObjectOPovo.navigate();
  })

  it('Deve retornar resultado ao pesquisar por UFC', () => {
    pageObjectOPovo.searchPage('UFC');
    pageObjectOPovo.validateSearchPage('have.length.greaterThan', 0);
  });
  
  it('Deve vefiricar se resultado ao pesquisar por UFC - Última Semana não é vazio', () => {
    pageObjectOPovo.searchPage('UFC');
    pageObjectOPovo.addFilterToSearchPage('li[rel="last_week"]')
    pageObjectOPovo.validateSearchPage('have.length.be.gte', 0);
  });
  
  it('Visitar página de um dos cadernos de Esportes', () => {
    pageObjectOPovo.navigateToCearaSports();
    pageObjectOPovo.validatePageIsCearaSports();
  });
  
  it('Consultar autor(a) da última notícia de Carnaval', () => {
    pageObjectOPovo.searchPageWithIntercept('Carnaval', '/index.php?id=%2Freboot%2Fsrc%2Fendpoints%2Fcall.php&dinamico=1&model=RebootBusca&action=filterNews&q=Carnaval&sp=all_period&sd=');
    pageObjectOPovo.navigateIfLinkIsVisible(':nth-child(1) > h2 > a > .txt-materia-listagem > .titulo-mateira-listagem');
    pageObjectOPovo.validateAuthorExist();
  });
});