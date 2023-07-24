/// <reference types="cypress" />
require('@cypress/xpath');

describe('Text Input', () => {
  it('checks text input', () => {
    const textToInput = 'some text'
    cy.visit('http://localhost:3000')
    cy.get('a[href="/textinput"]').click()
    cy.get('#newButtonName').type(textToInput)
    cy.get('#updatingButton').click()
    cy.get('#updatingButton').should('have.text', textToInput)
  })
})