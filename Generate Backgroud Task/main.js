/*
  * Select Input 1 & input 2
*    select body
* function changeBackground 
 * 
 */

//create Varabiels 
let body = document.querySelector('#gradient-background'), 
input1 = document.querySelector('.input1'),
input2 = document.querySelector('.input2');
//Function SetBackground To Body
function setGradientBackgroundToBody(){
    //Select Body And Set function (linear Gradirnt) and Setup The Value From Input 
    body.computedStyleMap.background = `linear-gradient(to right , ${input1.value} , ${input2.value})`
}
//Call Function 
input1.addEventListener('input' , setGradientBackgroundToBody)
input2.addEventListener('input' , setGradientBackgroundToBody)

// setGradientBackgroundToBody() 
