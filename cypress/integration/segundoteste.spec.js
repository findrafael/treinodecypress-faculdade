describe('Fluxo: Logar', ()=>{

    it('Deve entrar na página de Login', ()=>{
        cy.visit('https://front.serverest.dev/')
    })

    it('Deve preencher os dados e logar', ()=>{
        cy.get('[data-testid="email"]').type('fulano@qa.com')
        cy.get('[data-testid="senha"]').type('teste')
        cy.get('[data-testid="entrar"]').click()
    })

})

describe('Fluxo: Ver todos os usuários cadastrados',()=>{

    it('Deve clicar no botão de Listar Usuários', ()=>{
        cy.wait(2000)
        cy.get('[data-testid="listarUsuarios"]').click()
    })

    it('Deve validar redirecionamento para a Lista de Usuários', ()=>{
        cy.wait(2000)
        cy.url().should('be.equal', 'https://front.serverest.dev/admin/listarusuarios')
    })

    it('Deve validar o título da página', ()=>{
        cy.get('h1').contains('Lista dos usuários')
    })



})