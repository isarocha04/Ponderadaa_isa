# Cypress testes para a Steam 

Este repositório tem testes de interface do usuário (UI, como vimos na aula) automatizados para o site da Steam, utilizando Cypress. O objetivo é validar o comportamento da página inicial e da funcionalidade de busca de jogos.

## Como executar os testes


### 1.Passo a passo

##### 1.1 Clonar o repositório:
  
     git clone https://github.com/isarocha04/Ponderadaa_isa.git
  
##### 1.2 Instalando as dependncias 
     
     npm install
     
##### 1.3 Cypress

  
    npx cypress open
    
    
### 2. Executando os exemplos 

##### 2.1. Teste de Carregamento da Página Principal

 Esse teste verifica se a página principal da Steam carrega corretamente e se o logo está visível.


<img width="426" alt="Captura de Tela 2024-09-10 às 10 49 54" src="https://github.com/user-attachments/assets/b0ced53a-e640-4c94-bf3f-fd1b8130a15d">


##### 2.2. Teste de Pesquisa de Jogo
 Esse teste  busca o jogo “Cyberpunk 2077” e valida se os resultados são carregados de forma correta.
 


<img width="430" alt="Captura de Tela 2024-09-10 às 10 50 16" src="https://github.com/user-attachments/assets/4eb78d2a-556e-46f8-b2f4-d6b2d445d019">

<img width="397" alt="Captura de Tela 2024-09-10 às 10 50 36" src="https://github.com/user-attachments/assets/b622cbae-9cab-424c-b9d8-66c0527a6def">



### 3. Comentários e TDD 


##### Teste 1: Carregando a Página Principal

```bash
describe("Testando o site da Steam", () => {
  // Teste para verificar o carregamento da página principal e se o título e logo estão corretos
  it("Deve carregar a página principal da Steam e verificar o título", () => {
    // Visita a URL principal da Steam
    cy.visit("https://store.steampowered.com");

    // Assertiva para garantir que o título da página contém a palavra 'Steam'
    cy.title().should("include", "Steam");

    // Verifica se o logo da Steam está visível
    cy.get("#logo_holder img").should("be.visible");
  });
});
```


##### Teste 2: Testando a Barra de Pesquisa
```bash
it("Deve buscar por um jogo na barra de pesquisa", () => {
  // Navega para a página principal
  cy.visit("https://store.steampowered.com");

  // Insere o nome do jogo 'Cyberpunk 2077' e realiza a busca pressionando {enter}
  cy.get("input#store_nav_search_term").type("Cyberpunk 2077{enter}");

  // Verifica se a URL contém 'search', indicando que a página de resultados de busca foi carregada
  cy.url().should("include", "search");

  // Garante que pelo menos um resultado de jogo foi exibido
  cy.get(".search_result_row").should("be.visible");
});
```

 ##### TDD
 
 - No processo de TDD, os testes são escritos antes de qualquer código de produção. Isso garante que os requisitos estão bem definidos e que o código é escrito para passar nesses testes.Nesse caso, todos os testes foram escritos antes do código ser implementado, garantindo que o código é guiado pelos requisitos do teste.
	
 - Cada teste foca em um único ponto da aplicação, garantindo que a funcionalidade é testada de maneira isolada e não depende de outros testes para funcionar. Para isso,estamos utilizamos o Cypress para garantir que elementos chave (como o logo e resultados de busca) estão presentes e funcionando corretamente.



