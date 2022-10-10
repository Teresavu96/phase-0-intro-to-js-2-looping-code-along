
function writeCards(names, event){

    let cart = [];
    for (let i = 0; i < names.length; i++){
        cart.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cart
}
function countDown(number){
    let n = number;
    while (n>=0){
        console.log(n--);
    }
}
