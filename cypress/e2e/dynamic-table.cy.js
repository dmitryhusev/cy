/// <reference types="cypress" />
require('@cypress/xpath');


describe('Dynamic Table', () => {
  const chrome_xpath = '//span[text()="Chrome"]/following-sibling::span[contains(text(), "%")]'
  it('compares two values', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href="/dynamictable"]').click()
    cy.xpath(chrome_xpath).then(($data) => {
      cy.get('.bg-warning').should('contain.text', $data.text())
    })
  })
})