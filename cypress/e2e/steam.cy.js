describe("Testando o site da Steam", () => {
    it("Deve carregar a página principal da Steam e verificar o título", () => {
      // Acessa o site da Steam
      cy.visit("https://store.steampowered.com");
      // Verifica o título da página
      cy.title().should("include", "Steam");
      // Verifica se o logo da Steam está visível
      cy.get("#logo_holder img").should("be.visible");
    });
    it("Deve buscar por um jogo na barra de pesquisa", () => {
      // Acessa o site da Steam
      cy.visit("https://store.steampowered.com");
      // Digita “Cyberpunk” na barra de pesquisa e pressiona enter
      cy.get("input#store_nav_search_term").type("Cyberpunk 2077{enter}");
      // Verifica se a página de resultados de busca foi carregada
      cy.url().should("include", "search");
      // Verifica se pelo menos um resultado é exibido
      cy.get(".search_result_row").should("be.visible");
    });
  });