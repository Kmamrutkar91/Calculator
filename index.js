let display = document.getElementById('input_number');
buttons = document.querySelectorAll('button');
let inputval = '';
for (iterator of buttons) {
    iterator.addEventListener('click', (element)=>{
        buttonText = element.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            inputval += buttonText;
            display.value = inputval;
        }
        else if (buttonText == 'AC') {
            inputval = "";
            display.value = inputval;
        }
        else if (buttonText == 'DEL') {
            display.value = display.value.substr(0, display.value.length - 1);
            let delete_value =inputval.slice(0,inputval.length-1)
            inputval=delete_value
            // console.log(inputval)
        }
        else if (buttonText == '=') {
            display.value = eval(inputval);
        }
        else {
            inputval += buttonText;
            display.value = inputval;
        }

    })
}