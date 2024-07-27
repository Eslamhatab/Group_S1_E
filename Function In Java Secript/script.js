//1- Function 
/**
 * Regluar (Declaration) Function
 * 
 * Expression Function 
 * 
 * Arrow Function
 */

//1-
function sayWelcome(user){
    console.log(`Welcome ${user}`);
}
//call Function 
sayWelcome('Group S1_E')

//2-
const sayHello = function(name){
    return`hello , ${name}`
}

//3-
const user = username => `hello, ${username}`
//=================== Varables ===========================
//ES5 
    // var name = 'Group S1_E',
//Es6
// let  group = 'Group S1_E', 
// const age = 20
//=================== DataTypes  ===========================
/**
 *  String 
 *  Number 
 *  bloolean True False 
 *  undefiend 
 *  null 
 *  array
 *  object
 *  */
    let str = "Ahmed" ;
    console.log(typeof(str));

    let num = 1 ; 
    console.log(typeof(num));

    let bool = true; 
    console.log(typeof(ahmed));

    //what is Output 
        let std = ["Ahmed" , "Eslam" , "Mohamed"]     //Array 
        let emp ={name: "mohamed" , address: "Cairo"} //object 
    //=================== Operators ===========================
    //Arithmetic Operators
    /**
     *  + sumition 
     *  - subtraction 
     *  * multiplication 
     *  / division
  */

    let sum =  10 + 5;
    let sub =  10 - 5;
    let mul =  10 * 5;
    let div =  10 / 5;

    //Compaison Oprators 
    //Is Equal
    let isEqual = (10 == "10"); 
    console.log(isEqual); //true 
    //Is Strict Equal
    let isStrictEqual = (100 === "10")  
    console.log(isStrictEqual); //false

    //Is Not Equla 
    let isNotEqual = (10 != "10");
    console.log(isNotEqual); //false
    //Is Not Strict Equal
    let isNotStrictEqual = (100 !== "10");
//========================== logical ============ 
/***
 * and  
 * or  
 * not 
 */
    let and = (true && false) //false 
    let or  = (true || false) //true
    let not = (!true) //false



//===================================== Conditionals =====================
// if(condition) {
//     //code 
// } else if(anoutherCondition){
//     //code
// }else{
//     //code //error 
// }
// //ternary Opeator 
// let rusult = (condition) ? 'true' : 'false';

//======================= Loop =================================================
//for loop 
// let i = 0 
// for( ; ; i++){
//     if(i <= 10)
//     console.log(i);
// }
// // while loop
// let a = 0; 
// while(a < 10){
//     console.log(a);
//     a++;
// }

//Do-While Loop 
// let b = 0; 
// do{
//     console.log(b);
//     b++
// }while (b < 10) 
 //for of  Loop 
let arr = [1,2,3,4,5,6,7,8];
for(let value of arr){
    console.log(value);
}

//for in  loop 
let customer  = {
    name: 'sara',
    age:   20,
    gender: 'female'

}
for(let key in customer){
    console.table(key, customer[key]);
}