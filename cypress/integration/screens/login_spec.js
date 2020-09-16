import LoginScreen from "../../../src/screens/LoginScreen/Login"
import Spinner from "../../../src/components/Spinner/Spinner"
describe("what the login screen should do", () => {
  it("clicks the sign in page and fills out input fields", () => {
    cy.visit("http://localhost:3000")
    cy.get('input[name="email"]')
    cy.get('input[name="password"]')
    cy.get("button").should("not.have.class", "disabled")
    cy.get('button[type="submit"]').click()
    cy.url().should("include", "/shipping")
  })
  it("displays a loading icon and when done shows modal", () => {
    cy.visit("http://localhost:3000/")
    cy.get(LoginScreen).get(Spinner)
  })
})
