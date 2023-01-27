import geradorDados from '../services/geradados'
let userfake = geradorDados.geraUsuario()

describe('Fluxo: Criar um usuário administrador', ()=>{

    it('Deve abrir o site da Serverest', ()=>{
        cy.visit('https://front.serverest.dev')
    })
    
    it('Deve clicar no botão de cadastro', ()=>{
        cy.get('[data-testid="cadastrar"]').click()
    })
    
    it('Deve cadastrar um usuário administrador', ()=>{

        //deve preencher o campo nome
        cy.get('[data-testid="nome"]').type(userfake.nome)
        
        //deve preencher o campo e-mail
        cy.get('[data-testid="email"]').type(userfake.email)
    
        //deve preencher o campo senha
        cy.get('[data-testid="password"]').type(userfake.senha)

        //deve pegar o campo do checkbox administrador
        cy.get('[data-testid="checkbox"]').click()
    
        //deve clicar no botão de cadastrar
        cy.get('[data-testid="cadastrar"]').click()
    
    })

    it('Deve validar visibilidade do modal de Sucesso', ()=>{
        cy.get('.alert-link').should('be.visible')
    })

    it('Deve validar redirecionamento para a home do Admin', ()=>{
        cy.url().should('be.equal', 'https://front.serverest.dev/admin/home')
        cy.wait(2000)
    })


})

describe('Fluxo: Validar login criado', ()=>{

    it('Deve fazer logout',()=>{
        cy.get('[data-testid="logout"]').click()
    })

    it('Deve fazer login com o usuário criado', ()=>{
        cy.get('[data-testid="email"]').type(userfake.email)
        cy.get('[data-testid="senha"]').type(userfake.senha)
        cy.get('[data-testid="entrar"]').click()
    })

    it('Deve validar redirecionamento para a home do Admin', ()=>{
        cy.url().should('be.equal', 'https://front.serverest.dev/admin/home')
        cy.wait(2000)
    })

    it('Deve validar o nome do usuário criado inicialmente', ()=>{
        cy.get('h1').contains('Bem Vindo ' + userfake.nome)
    })

})

describe('Fluxo: Deve fazer logout', ()=> {

    it('Deve fazer logout',()=>{
        cy.get('[data-testid="logout"]').click()
    })

    it('Deve validar redirecionamento para a tela de login', ()=>{
        cy.wait(2000)
        cy.url().should('be.equal', 'https://front.serverest.dev/login')
    })

})