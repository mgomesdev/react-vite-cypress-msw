/// <reference types="cypress" />

Cypress.Commands.add("login", (email, password) => {
   cy.visit("/");

   cy.get("input[name=email]").type("matheusgomes1203@hotmail.com");
   cy.get("input[name=password").type("123456");
   cy.get("button").click();

   cy.getCookie("your-sesssion-cookie").should("be.null");

   cy.get("h1").should("contain", "Logado com sucesso!");
});
