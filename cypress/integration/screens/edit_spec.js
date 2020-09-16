import Table from "../../../src/components/Table/Table"
import Snackbar from "../../../src/components/SnackBar/SnackBar"

describe("edit screen should contain crud table and button to save and move to next screen", () => {
  it("renders the login modal even when wrong url is hit", () => {
    cy.visit("http://localhost:3000/shipping")
    cy.get("button").contains("Sign In")
    cy.get("button").click()
    cy.wait(4000)
  })
  it("returns an editable table on the first shipping screen and shows a snackbar when to save button is clicked", () => {
    cy.get(Table)
    cy.contains("Save").debug()
    cy.wait(1000)
    cy.get(Snackbar).contains("success")
  })
})
