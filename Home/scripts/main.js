


// Aqui é o BTN de remover os produtos da tabela
const removeProductButtons = document.getElementsByClassName('btn-remover')
console.log(removeProductButtons)
for (var i =0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.remove()
    })
}



const carProduts = document.getElementsByClassName("car-products")
    for (var i =0; i < carProduts.length; i++) {
        // console.log(carProduts[i])
         const productPrice = carProduts[i].getElementsByTagName("valor-produto")
         console.log(productPrice)
    }