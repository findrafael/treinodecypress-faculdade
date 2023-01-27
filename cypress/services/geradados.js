const faker = require('faker-br');

export default class geradorDados{
    
    static geraUsuario(){
        return {
            'nome':  faker.name.findName(),
            'email': faker.internet.email(),
            'senha': faker.internet.password()
        }
    }

}