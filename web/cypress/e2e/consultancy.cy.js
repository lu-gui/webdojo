describe('Formulario de Consultoria', () => {

    it('Deve solicitar conultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')
        cy.get('#name').type('Fernando Papito')
        cy.get('#email').type('papito@teste.com')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11 98348-8657')
            .should('have.value', '(11) 98348-8657')
        cy.get('#consultancyType').select('individual')
        ////span[text()="Pessoa Física"]/..//input
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')
            
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('47153872973')
            .should('have.value', '471.538.729-73')

        const discoveryChannels = [
            'Instagram',
            'LinkedIn', 
            'Udemy', 
            'YouTube',  
            'Indicação de Amigo'
        ]

        discoveryChannels.forEach((channel)=>{
        cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked')
            
        })

        cy.get('input[type="file"]')
            .selectFile('document.pdf', {force:true})

       
            
    })

})