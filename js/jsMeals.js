// const mealMeasure =document.getElementById('meal_measure');
// const mealIngredients=document.getElementById('meal_ingredients');
// const mealRecipe=document.getElementById('instructions');
// const mealVideo =document.getElementById('video');


// window.localStorage.getItem("storeValue");


// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
// .then((response) => {
//   if (response.status !== 200){
//   console.log(`looks like there is a problem . status code : ${response.status}`)
// } else {
//   return response.json()
// }})

//   /* if the api have correct conection this will bring the value in search input and look for it in api then it will create the elements down */
// .then((data) => {

//   /* call the non appeare items to change there values and display them on screen with every search and new information the user search for*/
// const mealTitle = document.getElementById('shawarma');
// const link = document.getElementById('link');
// const mealImg = document.getElementsByClassName('meal_img');

//   mealTitle.textContent= data.meals[0].strMeal;
//   link.href = data.meals[0].url;
//   mealImg.src=data.meals[0].strMealThumb;

// //Ingredients
// dats.forEach(el => {
//     const oList=document.createElement('ol')
//     const olList=document.createElement('li')
//     olList.textContent=el.meals[0].strIngredient;
//     const uList=document.createElement('ul')
//     const ulList=document.createElement('li')
//     ulList.textContent=el.meals[0].strMeasure;
//     const recipe =document.createElement('p')
//     recipe.textContent=el.meals[0].strInstructions
//     const video =document.createElement('iframe')
//     video.setAttribute('class','iframe_video')
//     video.src=el.meals[0].strYoutube;
//     mealIngredients.appendChild(oList)
//     oList.appendChild(olList);
//     mealMeasure.appendChild(uList)
//     uList.appendChild(ulList)
//     mealRecipe.appendChild(recipe)
//     mealVideo.appendChild('video')
// });
// })

