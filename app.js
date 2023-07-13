

let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 1;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

document.querySelector('.total').disabled = true;

const price = document.querySelector('.price')
const logo = document.querySelector('.chbox')
const country = document.querySelector('.country')
const counter = document.querySelector('.counter-display')
const total = document.querySelector('.total')
const check = document.querySelector('.chbox')

price.addEventListener('input', event => {
    total.innerHTML = price.value
    console.log(total.textContent)
})
counterPlusElem.addEventListener('click', event => {
    total.innerHTML = Number(total.textContent) + Number(price.value)
})
counterMinusElem.addEventListener('click', event => {
    total.innerHTML = Number(total.textContent) - Number(price.value)
})
check.addEventListener('change', event => {
    if (check.checked === true) {
        total.innerHTML = Number(total.textContent) + 35 + Number(counter.textContent) * 1
    }
    else if (check.checked === false) {
        total.innerHTML = Number(total.textContent) - 35 + Number(counter.textContent) * 1
    }
})
const element = document.querySelector('.js-choice')

const percentCountry = {
    0: 0.52,
    1: 0.43,
    2: 0.44,
    3: 0.47,
    4: 0.4,
    5: 1.02,
    6: 1.16,
    7: 0.86,
    8: 0.94,
    9: 0.48,
    10: 0.9,
    11: 0.47,
    12: 0.52,
    13: 0.5,
    14: 0.35,
    15: 0.64,
    16: 0.86,
    17: 0.34,
    18: 0.66,
    19: 0.45,
    20: 0.41

}


function updatePrice(){
    const selectedValue = element.value
    const prices = percentCountry[selectedValue]
    total.innerHTML = Math.ceil(Number(total.textContent) + price.value * prices) 
    console.log(price.value, prices)
    console.log(selectedValue)
}

element.addEventListener('change', updatePrice)
updatePrice()




// element.addEventListener('change', event => {
//     if (element.value == 'UK') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.52)
//     }  else if (element.value == 'France') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.43)
//     } else if (element.value == 'Italy') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.44)
//     } else if (element.value == 'Belgium') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.47)
//     } else if (element.value == 'The Netherlands') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.4)
//     } else if (element.value == 'USA') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 1.02)
//     } else if (element.value == 'Canada') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 1.16)
//     } else if (element.value == 'Qatar') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.86)
//     } else if (element.value == 'UAE') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.94)
//     } else if (element.value == 'Cyprus') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.48)
//     } else if (element.value == 'Ghana') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.9)
//     } else if (element.value == 'Germany') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.47)
//     } else if (element.value == 'Romania') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.52)
//     } else if (element.value == 'Portugal') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.5)
//     } else if (element.value == 'Czech Republic') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.35)
//     } else if (element.value == 'Saudi Arabia') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.64)
//     } else if (element.value == 'Mexico') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.86)
//     } else if (element.value == 'Spain') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.66)
//     } else if (element.value == 'Lithuania') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.34)
//     } else if (element.value == 'Latvia') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.45)
//     } else if (element.value == 'Estonia') {
//         total.innerHTML = Math.ceil(Number(total.textContent) + price.value * 0.41)
//     } 
// })
