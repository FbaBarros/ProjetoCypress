/*describe('Teste de páginas no Adopet', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/')
  })

  it('Visite a página principal do AdoPet e clique no botão "Ver pets disponíveis para adoção”', () => {
      cy.get('.button').click();
    })

  it('Visita a página principal e valida o botão header Home', () => {
      cy.get('.header__home').click();
  })

  it('Visita a página principal e valida o botão header Mensagens', () => {
    cy.get('.header__home').click();
  })  

  it('Visita a página de Login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
  })

  it('Visita a página de Home', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
  })

  it('Visita a página principal e valida o botão header “Falar com o responsável”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    cy.get('.header__message').click();
  })
})

describe('Testes Página principal', () => {
    beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    })
    it('Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.', () => {
        cy.title().should('eq','AdoPet');
    })
})

describe('Testes Quem ama adota!', () => {
    beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    })
    it('Verifica mensagem de texto “Quem ama adota!” está presente no html', () => {
        cy.contains('p','Quem ama adota!').should('be.visible');
    })
    it('Verifica mensagem de texto Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!', () => {
        cy.contains('p','Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
})

describe('Fluxo Login alternativo', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        
    })
    it('Deve acessar a página de login pelo botão de mensagem no header da página', () => {
      cy.get('.header__message').click();
      cy.login('ana@email.com','Senha123')
    })
})

describe('Testes Página Home', () => {
  beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/home')
      
  })
  it('Deve acessar a página home e validar se todas as imagens dos pets aparecem.', () => {
    //cy.validaImagens('imagens')
    cy.get('.cards').should('be.visible');
  })
})

describe('Testes exemplos Cypress', () => {
  beforeEach(() => {
      cy.visit('https://example.cypress.io/todo')
  })

  it('Valida se consegue deletar todas as tarefas', () => {
    cy.get(':nth-child(1) > .view > .toggle').click();
    cy.get(':nth-child(2) > .view > .toggle').click();
    cy.contains('Clear completed').click()    
    cy.contains('Clear completed').should('not.exist')    
  })

  it('Valida filtro de tarefas', () => {  
    cy.contains('Active').click() 
    cy.contains('Completed').click() 
    cy.contains('All').click() 
  })

  it('Para filtrar tarefas completas', () => {
    cy.get(':nth-child(1) > .view > .toggle').click();
    cy.contains('Completed').click()

    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Pay electric bill')

    cy.contains('Walk the dog').should('not.exist')
    })
    
    it('Para filtrar tarefas completas', () => {
      cy.get(':nth-child(2) > .view > .toggle').click(); 
      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
   })
})*/