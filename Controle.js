class Controle {

    procuraUsuario (){
    let pesquisado = document.getElementById ('input')
    let modelo = new Modelo();
    modelo.buscaDados (pesquisado.value)

    let visualizador = new Visualizador();
    visualizador.MostraNaTela(modelo)
    }
    

}