/// <reference types="cypress" />

describe('Ajax data', () => {
  it('should be able to wait for an element to show up', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href="/ajax"]').click()
    cy.get('#ajaxButton').click()
    cy.get('.bg-success', {timeout : 20 * 1000}).should('have.text', 'Data loaded with AJAX get request.')
  })
})