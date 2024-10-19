let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list'); 
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'caffe latte cappuccino'
        price: 13.00
    },
    {
        id: 2,
        name: 'green tea',
        price: 6.00
    },
    {
        id: 3,
        name: 'americano',
        price: 6.00
    },
    {
        id: 4,
        name: 'mocha latte',
        price: 13.00
    },
    {
        id: 5,
        name: 'hazelnut latte',
        price: 14.00
    },
    {
        id: 6,
        name: 'lemon tea',
        price: 5.00
    },
    {
        id: 7,
        name: 'Mochi (Red Bean)',
        price: 3.00
    },
    {
        id: 8,
        name: 'Mochi (Peanut)',
        price: 3.00
    },
    {
        id: 9,
        name: 'original mocha ice blended',
        price: 14.00
    },
    {
        id: 10,
        name: 'blueberry pie',
        price: 5.20
    },
    {
        id: 11,
        name: 'royal chocolate Cake',
        price: 8.00
    },
    {
        id: 12,
        name: 'egg and salmon sandwich',
        price: 7.50
    },
    {
        id: 13,
        name: 'cranberry salad',
        price: 10.00
    },
    {
        id: 14,
        name: 'spicy tuna sandwich(2pcs)',
        price: 6.00
    },
    {
        id: 15,
        name: 'original tuna sandwich(2pcs)',
        price: 6.00
    },
    {
        id: 16,
        name: 'popcorn chicken',
        price: 7.99
    },
    {
        id: 17,
        name: 'Tapioca Cake',
        price: 3.00
    },
    {
        id: 18,
        name: 'spaghetti bolognese',
        price: 4.00
    },
    {
        id: 19,
        name: 'garlic bagel',
        price: 5.00
    },
    {
        id: 20,
        name: 'chicken puff',
        price: 3.00
    },
    {
        id: 21,
        name: 'cheese Cake',
        price: 7.00
    },
    {
        id: 22,
        name: 'french fries',
        price: 6.00
    },
    {
        id: 23,
        name: 'wedges',
        price: 8.00
    },
    {
        id: 24,
        name: 'black sesame paste',
        price: 6.00
    },
    {
        id: 25,
        name: 'Angku (Mini)',
        price: 3.00
    },
    {
        id: 26,
        name: 'manggo Puddling',
        price: 3.00
    },
    {
        id: 27,
        name: 'Yam Cake',
        price: 3.00
    },
    {
        id: 28,
        name: 'Onde-onde',
        price: 3.00
    },
    {
        id: 29,
        name: 'Homemade Kaya',
        price: 5.00
    }
];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        // copy product form list to list card
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}
