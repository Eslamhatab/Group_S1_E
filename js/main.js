
// //
// function sayWelcome(){ //String 
//     return 'Welcome'
// }
// // console.log(typeof(sayWelcome()));

// function display(){
//     return []
// }
// console.log(typeof(display()));

// function test(){
//     return {
//         x : 1
//     }
// }
// console.log(typeof(test()));

// //==================== Objet  
// let car = {
//     carName  : "Bmw", 
//     carModel : 2024 , 
//     carPrice : 1000000
// }  


// //Access Object 

// console.log(car.carName);      // dot Notation 
// console.log(car['carModel']); // Bracket Notation
// car.power = "300cc"
// car['carColor'] = "Green"; 
// console.log(car); 

// Example 2 Use FUNCTION iN oBJECT 
// let student = {
//     name    : "Ahmed" ,  
//     age     : 25 , 
//     address : "Ciro" , 
//     phone   : "01018162571",
//     getInfo : function(){
//         console.log(`std Name = ${student.name} \n Std Age = ${student.age} \n std address ${student.address} \n std Phone ${student.phone}`); //Poor Syntax
//             console.log(`std Name = ${this.name} \n  std Age = ${this.age} \n std address ${this.address} \n std phone ${this.phone}`);
//     }
// }
// //Access Function 
// student.getInfo()

//========================================================

// let language = { 
//     langName    : "JavaScript" , 
//     getLangName : function(){
//         console.log(this.langName);
//     }
// }

// language.getLangName()

//=================== Object In Array =====================================================
const employee = [ 
    {id : 1 , name :"mohamed" , salary: 10000},
    {id : 2 , name :"Ahmed" ,   salary: 20000},
    {id : 3 , name :"Hager" ,   salary: 40000},
    {id : 4 , name :"shahd" ,   salary: 40000},
    {id : 4 , name :"shahd" ,   salary: 40000}

]

for(const emp of employee){
    console.table(emp);
}


console.table(employee);    
