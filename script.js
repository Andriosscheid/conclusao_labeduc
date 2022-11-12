const form = document.querySelector('#form')
const usarname = document.querySelector('#usarname')
const email = document.querySelector('#email')
const idade = document.querySelector('#idade')


form.addEventListener('submit', (e) => {
    e.preventDefault()  //prevenir comportamento padrao do navegador
    checkInputs() //chamando a funçao para verificar os inputs
})

function checkInputs () {
    
    const usernameValue = usarname.value.trim()  //pegando as variaveis e colocando na funcao
    const emailValue = email.value.trim() //retornando uma lista de valores(values) de email, e tirando os espaços(trim())
    const idadeValue = idade.value.trim()
    function errorValidation(input, message) { //criando a funçao de erro com dois parametros
        const formDivs = input.parentElement //pegando o elemento pai do parametro input
        const small = formDivs.querySelector('small') //criando uma variavel que vai receber o small do html
        small.innerText = message //mudando a msg do small para mensagens que vamos atribuir dependendo do tipo do erro
        formDivs.className = 'form-divs error' //adicionando a class error que a gente definiu no css
    }

    function successValidation (input) { //criando a funçao de acerto que como nao precisa corrigir nada a gente so precisa de um parametro
        const formDivs = input.parentElement  //pegando elemento pai
        formDivs.className = 'form-divs success'  //mudando a classe
    }

    if(usernameValue === '') {
        errorValidation(usarname, 'Preencha esse campo') //chamando a funçao de erro e defenindo os parametros
    }else {
        successValidation(usarname) //chamando funçao de success com seu parametro
    }

    if(emailValue === '') {
        errorValidation(email, 'Preencha esse campo') 
    }else {
        successValidation(email) 
    }

    if(idadeValue === ''){
        errorValidation(idade, 'Preencha esse campo')
    }else{
        successValidation(idade)
    }


}