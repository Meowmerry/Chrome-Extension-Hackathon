// // display html

// const divInputButton = document.createElement('div');
// divInputButton.setAttribute('id', 'inputButton');
// document.querySelector("body").appendChild(divInputButton);
// const textField = document.createElement('input');
// textField.setAttribute('type', 'text');
// textField.setAttribute('id','textField');
// divInputButton.appendChild(textField);

// const inputButton = document.createElement('div');
// inputButton.setAttribute('class', 'inputButton');
// document.querySelector("body").appendChild(inputButton);

// const rowField1 = document.createElement('div');
// rowField1.setAttribute('class','rowField');
// inputButton.appendChild(rowField1);

// const number7 = document.createElement('button');
// number7.setAttribute('id','7b');
// number7.setAttribute('class','small');
// rowField1.appendChild(number7);
// number7.innerText = '7'

// const number8 = document.createElement('button');
// number8.setAttribute('id','8b');
// number8.setAttribute('class','small');
// rowField1.appendChild(number8);
// number8.innerText = '8'

// const number9 = document.createElement('button');
// number9.setAttribute('id','9b');
// number9.setAttribute('class','small');
// rowField1.appendChild(number9);
// number9.innerText = '9'

// const numberAddB = document.createElement('button');
// numberAddB.setAttribute('id','+b');
// numberAddB.setAttribute('class','small');
// rowField1.appendChild(numberAddB);
// numberAddB.innerText = '+';


// const rowField2 = document.createElement('div');
// rowField2.setAttribute('class','rowField');
// inputButton.appendChild(rowField2);

// const number4 = document.createElement('button');
// number4.setAttribute('id','4b');
// number4.setAttribute('class','small');
// rowField2.appendChild(number4);
// number4.innerText = '4';

// const number5 = document.createElement('button');
// number5.setAttribute('id','5b');
// number5.setAttribute('class','small');
// rowField2.appendChild(number5);
// number5.innerText = '5'

// const number6 = document.createElement('button');
// number6.setAttribute('id','6b');
// number6.setAttribute('class','small');
// rowField2.appendChild(number6);
// number6.innerText = '6'

// const numberSubB = document.createElement('button');
// numberSubB.setAttribute('id','-b');
// numberSubB.setAttribute('class','small');
// rowField2.appendChild(numberSubB);
// numberSubB.innerText = '-';


// const rowField3 = document.createElement('div');
// rowField3.setAttribute('class','rowField');
// inputButton.appendChild(rowField3);

// const number1 = document.createElement('button');
// number1.setAttribute('id','1b');
// number1.setAttribute('class','small');
// rowField3.appendChild(number1);
// number1.innerText = '1'

// const nubmer2 = document.createElement('button');
// nubmer2.setAttribute('id','2b');
// nubmer2.setAttribute('class','small');
// rowField3.appendChild(nubmer2);
// nubmer2.innerText = '2'

// const number3 = document.createElement('button');
// number3.setAttribute('id','3b');
// number3.setAttribute('class','small');
// rowField3.appendChild(number3);
// number3.innerText = '3';

// const rowField4 = document.createElement('div');
// rowField4.setAttribute('class','rowField');
// inputButton.appendChild(rowField4);


// const obField = document.createElement('button');
// obField.setAttribute('id','0b');
// obField.setAttribute('class','medium');
// rowField4.appendChild(obField);
// obField.innerText = '0'

// const bField = document.createElement('button');
// bField.setAttribute('id','/b');
// bField.setAttribute('class','small');
// rowField4.appendChild(bField);
// bField.innerText = '/';


// const numberMulB = document.createElement('button');
// numberMulB.setAttribute('id','-b');
// numberMulB.setAttribute('class','small');
// rowField3.appendChild(numberMulB);
// numberMulB.innerText = '*';

// const rowField5 =  document.createElement('div');
// rowField5.setAttribute('class','rowField');
// inputButton.appendChild(rowField5);

// const button = document.createElement('button');
// button.setAttribute('id', 'submit');
// button.setAttribute('class','large');
// rowField5.appendChild(button);
// button.innerText = 'Calculate';


// document.getElementById("submit").addEventListener("click", calculate)
// document.getElementById("7b").addEventListener("click", () => (des(7)))
// document.getElementById("8b").addEventListener("click", () => (des(8)))
// document.getElementById("9b").addEventListener("click", () => (des(9)))
// document.getElementById("4b").addEventListener("click", () => (des(4)))
// document.getElementById("5b").addEventListener("click", () => (des(5)))
// document.getElementById("6b").addEventListener("click", () => (des(6)))
// document.getElementById("1b").addEventListener("click", () => (des(1)))
// document.getElementById("2b").addEventListener("click", () => (des(2)))
// document.getElementById("3b").addEventListener("click", () => (des(3)))
// document.getElementById("0b").addEventListener("click", () => (des(0)))
// document.getElementById("+b").addEventListener("click", () => (des("+")))
// document.getElementById("/b").addEventListener("click", () => (des("/")))
// document.getElementById("-b").addEventListener("click", () => (des("-")))
// document.getElementById("*b").addEventListener("click", () => (des("*")))

// function calculate(){
//     var input = document.getElementById("textField").value
//     const value = eval(input)
//     document.getElementById("textField").value=value
// }

// function des(val){

//     document.getElementById("textField").value+=val
// }

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
const add = (input)=> Function("return " + input)();
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log(buttonText)
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
			screen.value = add(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}