/// <reference types="cypress" />
require('@cypress/xpath');

describe('Sample App', () => {
  let email = 'admin@admin.com'
  it('cheks login with valid credentials', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href="/sampleapp"]').click()
    cy.get('[name=UserName]').type(email)
    cy.get('[name=Password]').type('pwd')
    cy.get('#login').click()
    cy.get('#loginstatus').should('have.text', `Welcome, ${email}!`)
  })
})