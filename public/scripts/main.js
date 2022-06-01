// importando o arquivo que está sendo usado em outra parte
// import  handle  from './express/lib/application'
import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")


//pegar todos os botoes que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")


//aplicando a lógica de abrir para todos os event de document
checkButtons.forEach(button =>{
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick (event, false))
})

function handleClick(event, check = true){

    // para que quando abrir a modal, não entender como uma nova página
    event.preventDefault()

    const mensagem = "Tem certeza que deseja "
    const text = check ? "Marcar como lida" : "Excluir "
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    //selecionando e mudando a rota de envio do form 
    const form = document.querySelector(".modal form")
    form.setAttribute("actions", `/room/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButton.innerHTML = `sim, ${text.toLowerCase()}`
    
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}
