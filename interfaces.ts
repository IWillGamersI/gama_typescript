interface Usuario {
    nome: string
    email: string
    address?:string
}

function getUser(){
    return{
        nome:'Willian',
        email:'willian@willian.com.br'
    }
}

function set_user(usuario: Usuario){
    //.....
}

