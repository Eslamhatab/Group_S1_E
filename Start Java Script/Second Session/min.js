//  Check The Number IS Even Or Odd

/**
 * Prompot Box 
 * 
 * 
 */

// var number = Number (prompt("Enter Your Number"))
// // Condition (If)
// if (number % 2 == 0 ){
//     console.log("The Number Even");
// //
// }else {
//     console.log("The Number Odd");
// }

// var raduis = Number(prompt("Enter Circle Raduis"))

// pi = 22/7, 

// // area = raduis * raduis * pi //Poor Syntax
// area = Math.pow(raduis , 2) * pi // Good Syntax
// // Cicumference 
// // circumference = 2 * raduis * pi //  Poor Syntax
// circumference = 2 * Math.PI * raduis // Good Syntax
// diameter      = 2 * raduis

// console.log(`Circle Area          = ${area}`);
// console.log(`Circle circumference = ${circumference}`);
// console.log(`circle Diameter      = ${diameter}`)

    // var num1 = 2, 
    //     num2 = 5
    //     console.log(`total = ${num1 + num2}`);

/* Fizz & Buzz Game
 *  1:15 
 * condtion 
 * 1 
 */

// for(let i = 1; i<= 15; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }else if(i% 5 === 0){
//         console.log("Buzz");
//     }
//     else if(i % 3 === 0){
//         console.log("fizz");
//     }else { 
//         console.log(i);
//     }
// }

// Function 

// User Defined Function 
// function greetingUser(){
//     alert("welcome")
// }
// greetingUser(); // Call Functio

// Parameter Function 

// function sum(num1 , num2){
//     let sum = num1 + num2;
//     console.log(`the Value Of Sum = ${sum}`);
// }
// sum(5 , 3) 

// const btn = document.querySelector('.btn')
//     body  = document.querySelector('body')
// function changeStyle(){
//     body.style.background = "#2f2f2f";
//     body.style.color      = "white";
// }

// btn.addEventListener('click' , changeStyle)

const    btn = document.querySelector('.dark'),
        btn2 = document.querySelector('.light')
        body = document.querySelector('body');

    //  First Function 
    function changeToDarkStyle(){
        body.style.background = "#2f2f2f";
        body.style.color      = "red";
    }

    // Second Function
    function changeTolightStyle(){
        body.style.background = "#fff";
        body.style.color      = "black";
    }

    btn.addEventListener('click', changeToDarkStyle )
    btn2.addEventListener('click' ,changeTolightStyle)