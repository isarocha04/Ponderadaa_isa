// cypress/integration/footstats.spec.js
const FootStatsPage = require('../pageObjects/FootStatsPage');

describe('Testando a SPA do FootStats', () => {
  beforeEach(() => {
    // Visita a página principal da SPA
    cy.visit('https://www.footstats.com.br/#/');
  });

  it('Deve verificar se o menu e o conteúdo principal carregam corretamente', () => {
    // Verificar se o menu está presente
    FootStatsPage.clickMenuButton();

    // Navegar para uma seção específica da SPA
    FootStatsPage.navigateToSpecificSection();

    // Verificar se o conteúdo principal foi carregado
    FootStatsPage.checkMainContentLoaded();

    // Verificar se o rodapé está visível
    FootStatsPage.checkFooterVisible();
  });
});