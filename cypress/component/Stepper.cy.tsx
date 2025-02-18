import React from "react";
import { mount } from "cypress/react";

import { Stepper } from "../../src/App";

describe("stepper shold default to 0", () => {
   it("Deve incrementar o contador ao clicar no botão increment", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      mount(<Stepper counter={0} onChange={onChangeSpy} />);
      cy.get("[data-cy=increment]").click();
      cy.get("@onChangeSpy").should("have.been.calledWith", 1);
   });

   it("Deve decrementar o contador ao clicar no botão decrement", () => {
      mount(<Stepper counter={0} />);
      cy.get("[data-cy=decrement]").click();
      cy.get("[data-cy=count]").should("have.text", "-1");
   });
});
