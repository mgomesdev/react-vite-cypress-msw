import React from "react";
import { mount } from "cypress/react";

/// <reference types="cypress" />

const Test = () => <>test</>;

describe("ComponentName.cy.tsx", () => {
   it("playground", () => {
      mount(<Test />);
   });
});
