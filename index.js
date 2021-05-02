let number = 10;

//Add and Subtract Functions

function add (){
    return number += 5;
}

function subtract(){
    return number -= 5;
}


//Multiply and divide functions

function multiply () {
    return number *= 2;
}


function divide() {
    return number /= 2;
}



//reset number

number = 20;

function add (a = number, b = 300) {
    return a += b;
}

function subtract(a = number,b = 300) {
    return a -= b;
}

// add and subtract call

add(a,b);

subtract(a,b);



//multiply, divide (a,b) functions and calls

function multiply (a, b = 10) {
    return a *= b;
}

function divide (a , b = 10) {
    return a /= b;
}

multiply (a,b);

divide (a,b);



//reset number

number = 10;

// increment and decrement () functions

function increment(number) {
    ++number;
    return number;
}

function decrement(number) {
    --number;
    return number;
}

// increment and decrement () calls

increment(number);

decrement(number);


//parsing

number = 'a';

function makeInt(number) {
    return parseInt(number, 10);
}


//Preserve Decimal

number = '2.222';

function preserveDecimal(number) {
    return parseFloat(number);
}

