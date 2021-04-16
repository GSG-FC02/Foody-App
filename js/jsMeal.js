const mealMeasure =document.getElementById('meal_measure');
const list=document.querySelector('.meal_ingredients');
const mealRecipe=document.querySelector('.recipe');
const divHeader=document.querySelector('.header_div');
const mealImg =document.querySelector('.picture');
const mealVideo =document.querySelector('.iframe');


let mealName= localStorage.getItem("storeValue");


fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
.then((response) => {
  if (response.status !== 200){
  console.log(`looks like there is a problem . status code : ${response.status}`)
} else {
  return response.json()
}})

.then((data) => {
    getIngMes(data.meals[0])


     divHeader.textContent=data.meals[0].strMeal;
     const imageMeal=document.createElement('img')
     imageMeal.src=data.meals[0].strMealThumb;
     imageMeal.setAttribute('class','meal_img')
     mealImg.appendChild(imageMeal)
     const para=document.createElement('p')
     para.textContent=data.meals[0].strInstructions
     console.log(data.meals[0].strInstructions)
     mealRecipe.appendChild(para)
     mealVideo.innerHTML=`<iframe class="iframe_video" src="${data.meals[0].strYoutube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`   

})
const getIngMes = (e) => {
    let mealIngredient = [];
    for (let i = 1; i <= 20; i++) {
        if (e[`strIngredient${i}`]) {
            mealIngredient.push(`${e[`strIngredient${i}`]} - ${e[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }
    const ingList=document.createElement('ol')
    console.log(mealIngredient)
    ingList.innerHTML= `${mealIngredient.map((ingredient)=>`<li class="ourIng">${ingredient}</li>`)}`
     console.log(ingList)
    list.appendChild(ingList)  
        
    
}


