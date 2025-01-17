describe('Login inválido', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
          cy.intercept('POST','https://adopet-api-i8qu.onrender.com/adotante/login', {statusCode:400,}).as('stubPost');
    })

    it('Verifica mensagem de falha no login', () => {
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Insira sua senha').should('be.visible');
    })

    /*  
    it('Deve preencher os campos do login incorretamente e autenticar as mensagens de erro', () => {
      cy.get('[data-test="input-loginEmail"]').type('ana@ana')
      cy.get('[data-test="input-loginPassword"]').type('!!')
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })*/   

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {  
      cy.login('ana@email.com', 'Senha123');
      cy.wait('@stubPost');
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })     
})
