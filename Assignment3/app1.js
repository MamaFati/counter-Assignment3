// const h1 = document.querySelector('h1');
// const p = document.getElementById('display');
// const button = document.getElementsByClassName('generate');
// const display = document.querySelector('#display');
// const generate = document.querySelector('.generate');
// // generate.addEventListener('click',() 1++
// // {
//     alert('password generated'); 

// })
// 

// window.alert(' i love programming ')

// const generate = document.querySelector('.generate'); 
// function addValue () {
//     // const generate = document.querySelector('.generate'); 
//     alert(' password ')
// }
// generate.addEventListener('click',addValue)

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
function increment(){
    count = count + 1
    countEl.innerText = count
    countEl.style.color = 'green'; 
}
function decrement(){
    count = count - 1
    countEl.innerText = count
    countEl.style.color = 'red'; 
}