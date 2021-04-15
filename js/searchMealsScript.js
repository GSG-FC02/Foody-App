const searchFood = document.getElementById('search');
// const mealMeasure =document.getElementById('meal_measure');
// const mealIngredients=document.getElementById('meal_ingredients');
// const mealRecipe=document.getElementById('instructions');
// const mealVideo =document.getElementById('video');

// mealTitle.style.display = 'none';
// mealImg.style.display = 'none';
// mealMeasure.style.display = 'none';
// mealIngredients.style.display = 'none';
// mealRecipe.style.display = 'none';
// mealVideo.style.display = 'none';

searchFood.addEventListener('click' , result);
/* when we click the button it will call the function */
/* this func fetch the api and check if it have correct connection */
function result (){
//   mealTitle.style.display = 'flex';
//   mealImg.style.display = 'flex';
//   mealMeasure.style.display = 'flex';
//   mealIngredients.style.display = 'flex';
//   mealRecipe.style.display = 'flex';
//   mealVideo.style.display = 'flex';
  var val = document.getElementById('searchtext');
  var value = val.value;
  window.localStorage.setItem('storeValue', value);
  console.log(value);
}

// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
// .then((response) => {
//   if (response.status !== 200){
//   console.log(`looks like there is a problem . status code : ${response.status}`)
// } else {
//   return response.json()
// }})

  /* if the api have correct conection this will bring the value in search input and look for it in api then it will create the elements down */
// .then((data) => {

  /* call the non appeare items to change there values and display them on screen with every search and new information the user search for*/
// const mealTitle = document.getElementById('shawarma');
// const link = document.getElementById('link');
// const mealImg = document.getElementsByClassName('meal_img');

//   mealTitle.textContent= data.meals[0].strMeal;
//   link.href = data.meals[0].url;
//   mealImg.src=data.meals[0].strMealThumb;

//Ingredients
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

// const it1 = document.getElementById('item1');
// const it2 = document.getElementById('item2');
// const it3 = document.getElementById('item3');
// const it4 = document.getElementById('item4');
// const it5 = document.getElementById('item5');
// const it6= document.getElementById('item6');
// const it7 = document.getElementById('item7');
// const it8= document.getElementById('item8');
// const it9 = document.getElementById('item9');
// const it10 = document.getElementById('item10');
// const it11 = document.getElementById('item11');
// const it12 = document.getElementById('item12');
// const it13 = document.getElementById('item13');
// const it14 = document.getElementById('item14');
// const it15 = document.getElementById('item15');

//Measure

//  const meas1 =document.getElementById('Measure1');
//  const meas2 =document.getElementById('Measure2');
//  const meas3 =document.getElementById('Measure3');
//  const meas4 =document.getElementById('Measure4');
//  const meas5 =document.getElementById('Measure5');
//  const meas6 =document.getElementById('Measure6');
//  const meas7 =document.getElementById('Measure7');
//  const meas8 =document.getElementById('Measure8');
//  const meas9 =document.getElementById('Measure9');
//  const meas10 =document.getElementById('Measure10');
//  const meas11 =document.getElementById('Measure11');
//  const meas12 =document.getElementById('Measure12');
//  const meas13 =document.getElementById('Measure13');
//  const meas14 =document.getElementById('Measure14');
//  const meas15 =document.getElementById('Measure15');

//Recipe

// const recipe = document.getElementById('recipePar');

//Video
// const video =document.getElementsByClassName('iframe_video');


//Ingredients data

// it1.textContent=`: ${data.meals[0].strIngredient1}`;
// it2.textContent=`: ${data.meals[0].strIngredient2}`;
// it3.textContent=`: ${data.meals[0].strIngredient3}`;
// it4.textContent=`: ${data.meals[0].strIngredient4}`;
// it5.textContent=`: ${data.meals[0].strIngredient5}`;
// it6.textContent=`: ${data.meals[0].strIngredient6}`;
// it7.textContent=`: ${data.meals[0].strIngredient7}`;
// it8.textContent=`: ${data.meals[0].strIngredient8}`;
// it9.textContent=`: ${data.meals[0].strIngredient9}`;
// it10.textContent=`: ${data.meals[0].strIngredient10}`;
// it11.textContent=`: ${data.meals[0].strIngredient11}`;
// it12.textContent=`: ${data.meals[0].strIngredient12}`;
// it13.textContent=`: ${data.meals[0].strIngredient13}`;
// it14.textContent=`: ${data.meals[0].strIngredient14}`;
// it15.textContent=`: ${data.meals[0].strIngredient15}`;


//Measure data
// meas1.textContent= data.meals[0].strMeasure1;
// meas2.textContent= data.meals[0].strMeasure2;
// meas3.textContent= data.meals[0].strMeasure3;
// meas4.textContent= data.meals[0].strMeasure4;
// meas5.textContent= data.meals[0].strMeasure5;
// meas6.textContent= data.meals[0].strMeasure6;
// meas7.textContent= data.meals[0].strMeasure7;
// meas8.textContent= data.meals[0].strMeasure8;
// meas9.textContent= data.meals[0].strMeasure9;
// meas10.textContent= data.meals[0].strMeasure10;
// meas11.textContent= data.meals[0].strMeasure11;
// meas12.textContent= data.meals[0].strMeasure12;
// meas13.textContent= data.meals[0].strMeasure13;
// meas14.textContent= data.meals[0].strMeasure14;
// meas15.textContent= data.meals[0].strMeasure15;


//Recipe data
// recipe.textContent=data.meals[0].strInstructions;