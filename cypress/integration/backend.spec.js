import geradorDados from "../services/geradados"
import Usuarios from "../services/users"
let usuarioADM = geradorDados.geraUsuario()
let usuarioNORMAL = geradorDados.geraUsuario()

it('Deve consultar todos os usuários cadastrados', ()=>{
    cy.request('GET', 'https://serverest.dev/usuarios')
    .then(res =>{
        expect(res.status).to.eq(200)
        expect(res.body.quantidade).to.be.greaterThan(0)
        expect(res.body).to.have.property('usuarios')
    })
})

describe('FLUXO: Busca de Usuários', ()=>{
    
    it('Deve buscar usuário com e sem ID', ()=>{

        // buscando com ID
        Usuarios.buscaUser('0uxuPY0cbmQhpEz1').then(res =>{
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('_id')
            }
        )
    })
    
    it('Deve buscar todos os usuários', ()=>{
    
            // buscando sem ID - todos os usuários
            Usuarios.buscaUser().then(res =>{
                expect(res.status).to.eq(200)
                expect(res.body.quantidade).to.be.greaterThan(0)
                expect(res.body).to.have.property('usuarios')
                }
            )
    })

})

describe('FLUXO: Criação de Usuários', ()=>{

    it('Deve criar um usuário administrador', ()=>{
        Usuarios.criaUser(usuarioADM.nome, usuarioADM.email, usuarioADM.senha, true)
        .then(res =>{
            expect(res.status).to.eq(201)
            expect(res.body.message).to.eq('Cadastro realizado com sucesso')
        })
    })

    it('Deve criar um usuário normal', ()=>{
        Usuarios.criaUser(usuarioNORMAL.nome, usuarioNORMAL.email, usuarioNORMAL.senha, false)
        .then(res =>{
            expect(res.status).to.eq(201)
            expect(res.body.message).to.eq('Cadastro realizado com sucesso')
        })
    })

})

describe('FLUXO: Login de Usuários', ()=>{

    it('Deve fazer login com usuário normal', ()=>{
        Usuarios.fazLogin(usuarioNORMAL.email, usuarioNORMAL.senha)
        .then(res=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('authorization')
        })
    })

    it('Deve fazer login com usuário ADM', ()=>{
        Usuarios.fazLogin(usuarioADM.email, usuarioADM.senha)
        .then(res=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('authorization')
        })
    })

})

