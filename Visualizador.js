class Visualizador {
    MostraNaTela(user) {
        let $ = document.querySelector.bind(document);
        let nome =  $('#nome');
        let usuario= $('#username');
        let repositorios = $('#linkRepo')
        let imagem= $('#imagem')
        

        nome.textContent = `Nome: ${user.getNome()}`
        usuario.textContent =`Login de Usuário: ${user.getUsuario()}`
        imagem.innerHTML = `<img src="${user.getAvatar()}" alt="sem">`
        repositorios.innerHTML= `<a href="https://github.com/${user.getUsuario()}?tab=repositories">`
      
    }

}