import Table from "../../../src/components/Table/Table"

describe("edit screen should contain crud table and button to save and move to next screen", () => {
  it("renders the login modal even when wrong url is hit", () => {
    cy.visit("http://localhost:3000/shipping")
    cy.get("button").contains("Sign In")
    cy.get("button").click()
    cy.wait(4000)
  })
  it("When continue is clicked it moves to next screen", () => {
    cy.location().get("button").get(".continue").click()
    cy.wait(4000)
    cy.get(Table)
  })
})
