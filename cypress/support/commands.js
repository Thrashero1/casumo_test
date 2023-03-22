

Cypress.Commands.add('devowelizer', (input, output, respStatus) => {
    cy.request({
        url: `/:${input}`,
        method: 'GET',
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.be.equal(respStatus)
        expect(response.body).to.be.equal(output)
    })
})