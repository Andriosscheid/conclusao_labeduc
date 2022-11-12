function typeWriter(elemento) { // criando a funcao com parametro elemento
    const textoarray = elemento.innerHTML.split('') //pegando tudo oq tem no html
    elemento.innerHTML = '' //tirando o elemento da tela pra so aparecer dps
    textoarray.forEach((letra, i) => { // para cada letra(valor) e i(indice)
        setTimeout(function () { //a gente determina um intervalo de tempo
            elemento.innerHTML += letra  // pegando e adicionando um letra por vez
        }, 100 * i)  // e muitiplicando a velocidade pelo numero d indice
    });
 }
 const titulo = document.querySelectorAll('h1')
 const position =document.querySelectorAll('h2')

 for(let i=0; i<titulo.length; i++) {
    typeWriter(titulo[i])
}
for(let i=0; i<position.length; i++) {
    typeWriter(position[i])
}
