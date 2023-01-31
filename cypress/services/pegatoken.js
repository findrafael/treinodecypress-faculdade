export default class pegatoken{


    static pegatoken(res){
        token = res.body.authorization.slice(7)
        return token
    }

}