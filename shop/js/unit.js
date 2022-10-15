let cart = [
    {id:1, value:0, cost:980},
    {id:2, value:0, cost:1080},
    {id:3, value:0, cost:1080},
    {id:4, value:0, cost:1140},
    {id:5, value:0, cost:980},
    {id:6, value:0, cost:1080},
    {id:7, value:0, cost:1080},
    {id:8, value:0, cost:1140},
]

document.addEventListener("DOMContentLoaded", () => {
    const lscart = window.localStorage.getItem("cart")
    if(!lscart){
        window.localStorage.setItem("cart", JSON.stringify(cart))
    }
})

const plusFunction = (id) => {
    const lscart = JSON.parse(window.localStorage.getItem("cart"));
    lscart[id-1].value++
    console.log('value ' + lscart[id-1].id + ' ' + lscart[id-1].value)
    window.localStorage.setItem("cart", JSON.stringify(lscart))
    summFunction();
}
const minusFunction = (id) => {
    const lscart = JSON.parse(window.localStorage.getItem("cart"));
    if(lscart[id-1].value == 0){
        //deleteFunction(id);
        return true;
    }
    if(lscart[id-1].value >=0){
        //
    }
    if(lscart[id-1].value <= 0){
        
        plusFunction(target.dataset.id);
    }
    
    lscart[id-1].value--
    console.log('value ' + lscart[id-1].id + ' ' + lscart[id-1].value)
    window.localStorage.setItem("cart", JSON.stringify(lscart))
    summFunction();
}
const summFunction = () => {
    const lscart = JSON.parse(window.localStorage.getItem("cart"));
    
    let sum = 0;
    Array.from(lscart).forEach((a) => {
        sum += a.cost*a.value
        
    })
    console.log(sum)
    window.localStorage.setItem("sum", sum);
}
window.addEventListener('DOMContentLoaded', () => {
    const lscart = JSON.parse(window.localStorage.getItem("cart"));
    let goods = Array.from(document.getElementsByClassName("cost"))
    goods.forEach(element => {
        console.log(element.getAttribute('data-id'))
        element.textContent = lscart[element.getAttribute('data-id') - 1].cost + '₽'
    });
})









/*let cart = {
    'sis1':{value:0, cost:980},
    'sis2':{value:0, cost:1080},
    'sis3':{value:0, cost:1080},
    'sis4':{value:0, cost:1140},
    'sis5':{value:0, cost:980},
    'sis6':{value:0, cost:1080},
    'sis7':{value:0, cost:1080},
    'sis8':{value:0, cost:1140},
}

document.onclick = event =>{
    if(event.target.classList.contains('plus')){
        plusFunction(event.target.dataset.id);
    }
    if(event.target.classList.contains('minus')){
        minusFunction(event.target.dataset.id);
    }
}
const plusFunction = id =>{
    cart[id].value++;
        window.localStorage.setItem("cart", JSON.stringify(cart));
        window.localStorage.getItem( Number(window.localStorage.getItem(cart[id].cost))+Number(window.localStorage.getItem("sum")));
        //window.localStorage.setItem('sum', Number(window.localStorage.getItem('sum'))+cart[id].cost);
    renderCart();
}
const minusFunction = id =>{
    if(cart[id].value == 0){
        //deleteFunction(id);
        return true;
    }
    if(cart[id].value >=0){
        window.localStorage.setItem('sum', Number(window.localStorage.getItem('sum'))-cart[id].cost);
    }
    if(cart[id].value <= 0){
        
        plusFunction(target.dataset.id);
    }
    cart[id].value--;
    renderCart();
}
const deleteFunction = id =>{
    delete cart[value];
    renderCart();
}

const renderCart = () =>{
    console.log(cart);
    function sum(cart) {
    let sum = Number(window.localStorage.getItem('sum'));
  for (let id in cart) {
    if (typeof cart[id].value) {
       sum += cart[id].value*cart[id].cost;
    }
  }
  return sum;
}
console.log('sum: ' + sum(cart));
    //var summ = cart.value;
    //console.log(summ);
}
renderCart();


window.addEventListener('DOMContentLoaded', () => {
    let goods = Array.from(document.getElementsByClassName("cost"))
    goods.forEach(element => {
        console.log(element.getAttribute('data-id'))
        element.textContent = cart[element.getAttribute('data-id')].cost + '₽'
    });
})

//JSON.parse(window.localStorage.getItem("cart"));
//50 string is not work cause the summ of cart bigger in 2 times

*/



