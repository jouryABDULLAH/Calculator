let num1 = '';
let operator = '';
let num2 = '';

let CLR_flag;
let EQUL_flag;

let clear = document.getElementById('clear');

let equal = document.querySelector('.calculator__key--enter');
let operators = document.getElementsByClassName('calculator__key--operator');
let operators_array = Array.from(operators);

let multiplication = document.getElementById('multiplication');
let division = document.getElementById('division');
let subtraction = document.getElementById('subtraction');
let addition = document.getElementById('addition');

let result = document.querySelector('.calculator__output');

let keys = document.querySelectorAll('.calculator__key');
let keys_array = Array.from(keys);

let numbers = document.querySelectorAll('.number');
let numbers_array = Array.from(numbers);

let zero = document.getElementById("zero");

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}


function is_operator(string){

    let flag = 0 ; 

    let opertors = ['-','+','*','/'];
    for(let i =  0 ; i < operators.length ; i++){
        if(Array.from(string).includes(opertors[i])){
            flag = 1;
        }
    }

    return flag;
}

// if( num1 || num2 ){
//     Undisable_zero();
// }else{
//     disable_zero();
// }

function display(input){

    if(result.innerText == '0'){
        result.innerText = '';
    }
    if(input === '-' || input === '+' || input === '/' || input === '*'){
       // disable_zero();
        if(num1){
            num1 = result.innerText;
            operator = input;
            num2 = "";
           // Undisable_zero();
        }
    }else if(!isNaN(input)){
        // Undisable_zero();
        if(is_operator(result.innerText) == 0){
            num1 += input;
            // num2 = '';
        }else if(is_operator(result.innerText) == 1){
            num2 += input ;
        }
    
    }
    
    if(CLR_flag === 1){
        result.innerText = input;  
        CLR_flag = 0; 
    }else if(EQUL_flag === 1){
        result.innerText = input;
        EQUL_flag = 0 ;
    }else{
        result.innerText += input; // add the input to the display, while keeping the already displayed output
    }
    
}

function disableKeys(){
    operators_array.forEach( btn => btn.disabled = true);
}

function UndisableKeys(){
    operators_array.forEach( btn => btn.disabled = false);
}

// function disable_zero(){
//     zero.disabled = true ;
// }

// function Undisable_zero(){
//     zero.disabled = false ;
// }

disableKeys();
// disable_zero();

multiplication.addEventListener('click', () => {
    // operator = '*';
    display('*');
    disableKeys();
})


subtraction.addEventListener('click', () => {
    // operator = '-';
    display('-');
    disableKeys();
})


addition.addEventListener('click', () => {
    // operator = '+';
    display('+');
    disableKeys();
})


division.addEventListener('click', () => {
    // operator = '/';
    UndisableKeys();
    display('/');
    disableKeys();
})

// operators_array.forEach( op => op.addEventListener('click', (e) => {
//     operator = op.innerText;
//     disableKeys();
// }));

numbers_array.forEach( num => num.addEventListener('click', () => {
    UndisableKeys();
}));

numbers_array.forEach( num => num.addEventListener('click', (e) => {
    display(num.innerText);
}));

zero.addEventListener('click', ()=>{
    display(zero.innerText);
});

// operators_array.forEach( op => op.addEventListener('click', (e) => {
//     display(op.innerText);
// }));



function operate(num1, num2, op){
    
    switch (op) {
        case '+':
            return add(num1,num2);
            break;
        case '*':
            return mul(num1,num2);
            break;
        case '/':
            return div(num1,num2);
            break;
        case '-':
            return sub(num1,num2);
            break;

        default:
            break;
    }

}

clear.addEventListener('click', () => {
    CLR_flag = 1;
    num1 = '';
    num2 = '';
    operator = '';
    // display('');
    result.innerText = '0';
});

equal.addEventListener('click', () => {
    
    if( num1 && num2 && operator){
        if(num2 === '0' && operator === '/'){
            result.innerText = 'undefined';
        }else{
            EQUL_flag = 1 ;
            let rslt = operate(Number(num1),Number(num2),operator);
            num1 = rslt;
            display(rslt);
        }
    }else{
        alert('wrong input');
    }
});