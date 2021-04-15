const inputNameMeal =document.querySelector('.inputMealName')
const searchbtn=document.querySelector('.btn')

searchbtn.addEventListener('click' , result);

function result (){

const mealName=inputNameMeal.value
console.log(mealName);
localStorage.setItem('storeValue', mealName);

  

}

