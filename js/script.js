let btnFechar = document.querySelector('.btn_fechar')
let btnEnviar = document.querySelector('.btn_enviar')
let modalEnviar = document.querySelector('.modal_enviar')
let msgErro = document.querySelector('.modal_msg_erro')
let msgSucesso = document.querySelector('.modal_msg_sucesso')


let validarDados = ({nome, email}) =>{
     // validar dados
    const nomeValido = nome && nome.length >= 3
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/
    const emailValido = email && emailRegex.test(email)

    if(!nomeValido === nome && nome.length >= 3){
        document.querySelector('#nomeId').textContent = "Nome obrigatório. No mínimo 3 caracters!"
    }
    

    return{
        nomeValido,
        emailValido
    }
    
}

let pegarDados = () =>{
    const dados ={
        nome: document.querySelector('#nomeId').value,
        email: document.querySelector('#emailId').value
    }

    const {nomeValido, emailValido} = validarDados(dados)   
    console.log(nomeValido, emailValido)

    const resultado = nomeValido && emailValido ? 'sucesso' : 'erro'
    document.querySelector('form').reset()
    return resultado
}   

const formatarModal = (statusRegister) =>{
    //Ifs ternários
    msgSucesso.style.display = (statusRegister === 'sucesso') ? 'block':'none'
    msgErro.style.display = (statusRegister === 'erro')? 'block': 'none'
    btnFechar.classList.add((statusRegister === 'sucesso')? 'bg_sucesso': 'bg_erro')
    btnFechar.classList.remove((statusRegister === 'erro') ? 'bg_sucesso': 'bg_erro')
}

const mostrarModal = (statusRegister) => {
    //const statusRegister = 'sucesso' // erro ou sucesso

   formatarModal(statusRegister)
    modalEnviar.showModal();
}
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    mostrarModal(pegarDados())
   
}) 

btnFechar.addEventListener('click', () => {
    modalEnviar.close();
}) 