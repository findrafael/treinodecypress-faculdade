export default class Usuarios{

    static buscaUser(id){
        if(id == null){ 
            return cy.request('GET', 'https://serverest.dev/usuarios')
        } else {
            return cy.request('GET', 'https://serverest.dev/usuarios/'+id)
        }
    }

    static criaUser(nome, email, password, administrador){
        switch(administrador){

            // caso para admin verdadeiro

            case true:
            return cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            failOnStatusCode: false,
            body: {
                "nome": nome,
                "email": email,
                "password": password,
                "administrador": "true"
              }
            })


            // caso para admin verdadeiro
            
            case false:
            return cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            failOnStatusCode: false,
            body: {
                "nome": nome,
                "email": email,
                "password": password,
                "administrador": "false"
              }
            })


            // caso default

            default:
            return cy.log("Erro ao criar usuário, o parâmetro de Administrador está inválido!")

        }
    }

    static fazLogin(email, password){

    return cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
              }
            })
            
    }
}