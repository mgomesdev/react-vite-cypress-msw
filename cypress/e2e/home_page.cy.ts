describe("The Home Page", () => {
   it("successfully loads", () => {
      const { email, password } = {
         email: "matheusgomes1203@hotmail.com",
         password: "123456",
      };

      cy.login(email, password);
   });

   it.only("Deve exibir os dados do usuário mockado", () => {
      cy.intercept("GET", "https://example.com/user", {
         fixture: "user",
      }).as("userMSW");

      cy.visit("/");

      cy.wait("@userMSW");

      cy.contains("Gomes").should("be.visible");
      cy.contains("ID: c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d").should("be.visible");
   });
});
