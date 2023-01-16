const productsCart = [
    {
        id: 1,
        name: "banana",
        price: 7.98
    },
    {
        id: 2,
        name: "feijão",
        price: 5.90
    },
    {
        id: 3,
        name: "melancia",
        price: 2.99
    },
    {
        id: 4,
        name: "uva",
        price: 6
    },
]

const main = document.createElement('main')
main.classList.add('container')

const body = document.querySelector('body')
body.appendChild(main)

const h1 = document.createElement('h1')
h1.innerText = "Virtual Market"

const header = document.createElement('div')
header.classList.add('header')
header.innerText= 'produto   preço'

const productList = document.createElement('ul')
const total = document.createElement('div')
total.classList.add('total')



const buttonEnd = document.createElement('button')
buttonEnd.classList.add('finzalizar')
buttonEnd.innerText = 'Finalizar'

function soma (productsCart) {
    let contador =0
    for (let j=0; j<productsCart.length; j++) {

        

        contador += productsCart[j].price
        
    }
    return contador
}

function carrinhoCompras (productsCart) {
    let contador = 0
    

    for (let i=0; i<productsCart.length; i++) {

        const ProductDetails = document.createElement('li')
        ProductDetails.innerText = `${productsCart[i].name}    R$ ${productsCart[i].price}`

        productList.appendChild(ProductDetails)

        
        
    }
    total.innerText = soma(productsCart)
}
carrinhoCompras(productsCart)

main.append(h1, header, productList, total, buttonEnd)