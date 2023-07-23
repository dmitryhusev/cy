/// <reference types="cypress" />
require('@cypress/xpath');

describe('Text Input', () => {
  it('checks text input', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href="/progressbar"]').click()
    cy.get('#startButton').click()
    cy.get('#progressBar', {timeout: 30 * 1000}).should('contain.text', '75%')
    cy.get('#stopButton').click()
    cy.get('#result').should('contain.text', 'Result: 0')
  })
})