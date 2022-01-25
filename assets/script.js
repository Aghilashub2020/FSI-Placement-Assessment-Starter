// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Aghilas" // HINT: Replace this with your own name!
// We'll use these variables to track the counts of each cookie type
// uptdat quantity 
function updateQuantity(displayQuantity){
    let quantity = document.querySelector('total-quantity')
    quantity.innerHTML=displayQuantity
}
let totalquantity = document.querySelector('.totalquantity'= gb+cc+sugar)
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const ccplusBtn = document.querySelector('#add-cc')
const sugerplusBtn = document.querySelector('#add-suger')
// negativeBtn
const gbNegativBtn = document.querySelector('#minus-gb')
const ccNegativeBtn = document.querySelector('#minus-cc')
const sugerNegativeBtn = document.querySelector('#minus-sugar')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function () {
        totalquantity = gb + 1
        updateQuantity('Quantity:  {total}')
        totalquantity.innerHTML = 'totalquantity'

        // HINT: You can delete this console.log after you no longer need it!
        console.log('Gingerbread + button was clicked!')

        // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    })



// TODO: Hook up event listeners for the rest of the buttons