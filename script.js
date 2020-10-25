var buttons = document.querySelectorAll('button');
var display = document.querySelector('.display');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });

function calculate(event) {
    var clickedButtonValue = event.target.value;
  
    if (clickedButtonValue === '=') {
      if (display.value !== '') {
        display.value = eval(display.value);
      }
    } 
    else if (clickedButtonValue === 'C') {
      display.value = '';
    }
     else {
      display.value += clickedButtonValue;
    }
  }