// console.log('Hello World');

/**Create Variable
 *  1-var  Global Scope & Local Scope 
 * 2- Let  bLOCK oF Code 
 * 3- Const 
 */
// Var 
// if(true){
//     var a = 10;
// }
// console.log(a);
 // Let  Loop 
    // let i
    // for(i = 1; i <= 5; i++){
        // console.log(i); 
    // }
    // console.log(i); // Refrence Erorr => I Is Not Defined

    // let x = 5 
    //     x = 10
    //Const 
        // const a = 15 
        //     a   = 20

    /**
     * for Loop
     *  Steps 
     *  Select Initial Value 
     *  stop condition
     *  counter 
     * select Increment Value
     * for(init ; condition ; counter){
     * statements
     * }
     */
    

    // for(var i = 1; i <= 7 ; i++){
    //     console.log(i);
    // }
    // console.log(i);
/*** Trase 
 * I = 1 ==> 1  ==> i=2
 * I = 2 ==>  2 ==> i=3
 * I = 3 ==>  3 ==> i=4
 * I = 4 ==> 4  ==> i=5 
 * I = 5 ==> 5 ==>  i=6 
 * I = 6 ==> 6 ==>  i=7
 * i =7  ==> 7 ==>  i=8
 * i =8  ==> 8 
 */

/** حاصل جمع الارقام من 1 الي 5
    *      15 الناتج 
    * 1 + 2 + 3 + 4 + 5 ===> 15
    * sum = 0 + 1 = 1
    * sum = 1 + 2 = 3
    * sum = 3 + 3 = 6 
    * sum = 6 + 4= 10
    * sum = 10 +5 =15
    * 
*/
// let sum = 0; 
// for(var i = 1; i <= 5 ; i++){
//     sum = sum + i
//     console.log(sum)
// }
// console.log(`This Value Of Sum = ${sum}`); //Good Syntax
// console.log("This Value Of Sum" + sum); // Poor Syntax 


// // Array
var students = ["Awad" , "Sdeek" , "Ahmed"]
            console.log(students[2])
    //How To Add New Items  In Array 
    students.unshift('Eslam') //Add Items In First Column In Array
    students.push('Hager')
    students.shift()
    students.pop()
    
    console.log(students);
    console.log(students.length); // 5 Items In Array

    let numbers = []
    for(let i = 1; i <= 100; i++){
        numbers.push(i)
    }

// let salaries = [10000 , 15000 , 50000]
//     for(let salary of salaries){
//         console.log(salary *2)
//     } 

let employeeSalary = [10000  , 20000 , 30000] ,
    doubleSalary   = []
    for(let emp of employeeSalary ){
        doubleSalary.push(emp * 2)
    }

    /**
     * Tasks Home Work
     * 1-Check The Number Is Even or Odd 
     * 2-Compute Circle Area and Circumference
     * 3-print the sum of two numbers 
     * 4-6- check from two given integers, whether one is positive and
        another one is negative.
     * 
     * 
     * 
     * 
     */