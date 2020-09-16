
describe("endpoint is able to fetch data", () => {
  it("gets the data on a successful call", () => {
    cy.request("https://beamtech.github.io/boxing-kata-js/perks.json").should((response) => {
        expect(response.body[0]).to.have.property('name')
      })
  })

  it("gets an error on a failed call", () => {
    cy.server({
        method: 'get',
        delay: 1000,
        status: 404,
        response: {}
      })
    cy.visit("http://localhost:3000")
    cy.on('window:alert', () => true);

  })

})