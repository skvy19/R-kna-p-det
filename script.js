const input1 = document.querySelectorAll('input')[0]
const input2 = document.querySelectorAll('input')[1]
const operator = document.querySelector('select').options
const btn = document.querySelector('button')
const script = document.querySelector('script')
let result

function showResult(){
  const div = document.createElement('div')
  const text = document.createTextNode(`Resultat: ${result.toFixed(6)}`)
  document.body.insertBefore(div, script)
  div.appendChild(text)
}

btn.onclick = function() {
  let num1 = parseFloat(input1.value)
  let num2 = parseFloat(input2.value)

  if(input1.value.length > 0 && input2.value.length >0){
    switch(operator.selectedIndex) {
      case 0:
        result = num1 * num2
        break;
      case 1:
        result = num1 / num2
        break;
      case 2:
        result = num1 + num2
        break;
      case 3:
        result = num1 - num2
        break;
    }

    showResult() 

  } else {
  alert('Ange värde som ska räknas!')
  }
    
} 