Cypress.Commands.add('login', (email, password) => { 
    cy.get('[data-test="input-loginEmail"]').type(email)
    cy.get('[data-test="input-loginPassword"]').type(password)
    cy.get('[data-test="submit-button"]').click(); 
})

Cypress.Commands.add('cadastrar', (nome, email, senha) => { 
    cy.get('[data-test="input-name"]').type(nome);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('[data-test="input-confirm-password"]').type(senha);
    cy.get('[data-test="submit-button"]').click(); 
})

Cypress.Commands.add('validaImagens', (imagens) => { 
    cy.get('.cards > :nth-child(1) > img').should('be.visible')
    cy.get('.cards > :nth-child(2) > img').should('be.visible')
    cy.get('.cards > :nth-child(3) > img').should('be.visible')
    cy.get('.cards > :nth-child(4) > img').should('be.visible')
    cy.get('.cards > :nth-child(5) > img').should('be.visible')
    cy.get('.cards > :nth-child(6) > img').should('be.visible')
    cy.get('.cards > :nth-child(7) > img').should('be.visible')
    cy.get('.cards > :nth-child(8) > img').should('be.visible')
    cy.get('.cards > :nth-child(9) > img').should('be.visible')
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })