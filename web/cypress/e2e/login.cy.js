describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })
  it('Não deve logar com senha invalida ', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'teste@123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
  it('Não deve logar com email não cadastrado', () => {
    cy.start()
    cy.submitLoginForm('lucas@teste.com', 'katana123')
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
  it('Não deve logar com email invalido', () => {
    cy.start()
    cy.submitLoginForm('teste', 'katana123')
    cy.contains('Hmm... esse email parece estar errado ')
      .should('be.visible')

  })

}) 