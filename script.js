
let modalsite = document.querySelector('dialog')
let btnfechar = document.querySelectorAll('dialog button')

let contador = 0

setTimeout(() => {
    modalsite.showModal()

}, 3000)
/*document.addEventListener('mouseleave', () =>{
    if (contador == 0 ){
        modalsite.showModal()
    }
})*/

btnfechar.forEach(button => {
    button.addEventListener('click', () => {
        modalsite.close()
        contador = 1
    })
})