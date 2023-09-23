// javascript logic for calculator
// initaily we will declared variable that will store and use to display the str 
let str = "";

// now we will create variable that will store all the btn 
let btn = document.querySelectorAll('.button');
// create variable that will access the input box 
let inputbox = document.querySelector('input')
// now by using Array.from()method we will add onclick event on each button 
Array.from(btn).forEach((button)=>{
  // we will add eventlistener to button that will perform action when user will click on button 
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      str = eval(str);
      inputbox.value = str;
    }else if(e.target.innerHTML == 'AC'){
      str = "";
      inputbox.value = str;
    }else if(e.target.innerHTML == '<i class="bi bi-backspace"></i>'){
      str = str.slice(0, -1);
      inputbox.value = str;
    }else{
      str = str + e.target.innerHTML;
      inputbox.value = str; 
    }
  })
})