describe("The Home Page", () => {
   it("successfully loads", () => {
      const { email, password } = {
         email: "matheusgomes1203@hotmail.com",
         password: "123456",
      };

      cy.login(email, password);
   });
});
