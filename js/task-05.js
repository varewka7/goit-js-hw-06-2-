// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//         у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

// console.log(input)
// console.log(span)

input.addEventListener('input', onInputClick)

function onInputClick(event) {
    if (event.currentTarget.value != '') {
      return  span.textContent = event.currentTarget.value
    } 
     return   span.textContent = 'Anonymous'
  
        
   
 
}

