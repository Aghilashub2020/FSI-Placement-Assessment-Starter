
let yourName = 'Aghilas' 


// We'll use these variables to track the counts of each cookie typ
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle



let cookieTotal = gb + cc + sugar
function updateTotal (ct1, ct2, ct3) {
  cookieTotal = ct1 + ct2 + ct3 
  console.log(cookieTotal)
  document.getElementById('qty-total').innerHTML = cookieTotal
}


// Code to update name display
document.getElementById('credit').textContent = `Created by ${yourName}`

// positive function GingerBread
document.getElementById('add-gb').addEventListener('click', function () {
  gb = gb + 1
  document.getElementById('qty-gb').innerHTML = gb
  updateTotal(gb, cc, sugar)
       

    })
    // negativ function GingerBread
    document.getElementById('minus-gb').addEventListener('click',function(){
      if (gb > 0){
        gb =gb - 1
        document.getElementById('qty-gb').innerHTML = gb
        updateTotal(gb, cc, sugar)
      }

    })
    // positive cc
  document.getElementById('add-cc').addEventListener('click', function () {
  cc= cc + 1
  document.getElementById('qty-cc').innerHTML = cc
  updateTotal(gb, cc, sugar)
  
  })
  //negativ cc
  document.getElementById('minus-cc').addEventListener('click',function(){
      if (cc > 0){
        cc =cc - 1
        document.getElementById('qty-cc').innerHTML = gb
        updateTotal(gb, cc, sugar)
      }

    })
    // positiv sugar
    document.getElementById('add-sugar').addEventListener('click', function() {
  sugar = sugar + 1
  document.getElementById('qty-sugar').innerHTML = sugar
  updateTotal(gb, cc, sugar)
       

    })
    document.getElementById('minus-sugar').addEventListener('click',function(){
      if (sugar > 0){
        sugar = sugar - 1
        document.getElementById('qty-sugar').innerHTML = gb
        updateTotal(gb, cc, sugar)
      }

    })

    
    
   



