// variables

const cartButton = document.querySelector('.cart-btn')
const closeCartButton = document.querySelector('.close-cart')
const clearCartButton = document.querySelector('.clear-cart')
const cartDOM = document.querySelector('.cart')
const closeOverlay = document.querySelector('.cart-overlay')
const cartItems = document.querySelector('.close-cart')
const cartTotal = document.querySelector('.cart-total')
const cartContent = document.querySelector('.close-content')
const productsDOM = document.querySelector('.product-center')

// DOM = products just for js purposes

let cart = []

// get the products
class Products {
    async getProducts() {
        try {
            let result = await fetch('products.json')
            return result
        } catch (error) {
            console.log(error)

        }

    }

}

// display products

class UI {}


// local storage
class Storage {}

// 

document.addEventListener("DOMcontentLoaded", () => {

    const ui = new UI()
    const products = new Products()

    // get all products

    proucts.getProducts().then(data => console.log(data))
})