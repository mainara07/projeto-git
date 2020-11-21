/*

Sua página deve conter um formulário com um campo para receber o nome de usuário do
Github;
Esse formulário deve possuir um botão para processamento e envio da requisição;
Sua requisição deve tratar possíveis erros;
Os seguintes resultados devem ser exibidos na página como você melhor escolher: Nome do
usuário, nome dos repositórios, link dos repositórios e linguagem de programação do
repositório;
Seu projeto deve ser estruturado utilizando MVC;
Seu projeto deve utilizar classes e orientação a objetos;
Seu projeto deve utilizar arrow functions;

*/

class Modelo {
    constructor () {
        this._nome;
        this._usuario;
        this._repositorios;
        this._seguidores;
        this._avatar;
    }
    buscaDados(user){
        let pedido = new XMLHttpRequest();
        try {
        pedido.addEventListener('load', ()=>{
            if (pedido.status == 200){
                let dados = JSON.parse (pedido.responseText)
                this.dadosAtualizados (dados)
            }
        })
        pedido.open('GET',`https://api.github.com/users/${user}`,false)
        pedido.send();
    } catch (error) {
        throw ('erro', error)
        }
    }
    
    processaDados (dado) {
        let resposta = JSON.parse(dado)
        console.log (resposta)
        
    }
    
    dadosAtualizados (dados) {
        this._nome = dados.name
        this._usuario = dados.login
        this._avatar = dados.avatar_url
        this._repositorios = dados.repos_url
        this._seguidores = dados.followers
        
    }

    getNome(){
        return this._nome;
    }

    getUsuario(){
        return this._usuario;
    }

    getAvatar(){
        return this._avatar;
    }

    getSeguidores (){
        return this._seguidores;
    }
    getRepositorio (){
        return this._repositorios;
    }

}


