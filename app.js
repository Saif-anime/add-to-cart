// select button 

var btn = document.querySelectorAll('.btn');

// select span tag 
var span = document.querySelector('span');


// create function 

const dataRead = () =>{
    span.innerHTML = Object.keys(JSON.parse(localStorage.cart)).length;
}


// first check in local Storage data exist or not 

if (localStorage.getItem('cart') == null) {
    // if localStorage is not exist in cart so what should i do 
    var cart = {};

} else {
    // convert json data to object 
    cart = JSON.parse(localStorage.getItem('cart'))
}


var qty = 1;

btn.forEach((v) => {
    v.addEventListener('click', () => {
        // check in cart data exist when the user click button 
        if (cart[v.id] == undefined) {
            qty=1;
            cart[v.id] = [v.id, qty];
            alert('add to cart');
        } else {
            qty+=1
            cart[v.id] = [v.id, qty];
            alert("update cart ")
        }
        
        localStorage.setItem('cart', JSON.stringify(cart))// convert object to json 
        dataRead();
    })
})

dataRead(); // call the function 