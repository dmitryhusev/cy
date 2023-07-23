/// <reference types="cypress" />

describe('Ajax data', () => {
  it('checks if element is visible on screen may be a non trivial task', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href="/visibility"]').click()
    cy.get('#hideButton').click()
    cy.get('#removedButton').should('not.exist')
    cy.get('#zeroWidthButton').should('exist')
    cy.get('#overlappedButton').should('exist')
    cy.get('#transparentButton').should('exist')
    cy.get('#invisibleButton').should('exist')
    cy.get('#notdisplayedButton').should('exist')
    cy.get('#offscreenButton').should('exist')
  })
})