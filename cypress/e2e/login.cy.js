/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide an ability to log in', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa') 
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it ('should not provide an ability to log in if username is not correct', () => {
    cy.get('#username')
      .type('Tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa') 
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it ('should not provide an ability to log in if password is not correct', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword');

    cy.get('.fa') 
      .click();

    cy.get('#flash')
    .should('contain.text', 'Your password is invalid!');
  }); 

  it('should provide an ability to log out', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa') 
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('.button')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
