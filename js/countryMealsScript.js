let areaName = document.getElementsByClassName("kitchenName").textContent;
window.localStorage.setItem('an', areaName);

function viewMeals(){
    let areaName2 = localStorage.getItem('an');
    let mealImage = document.getElementById('mealImg');
    let mealName = document.getElementById('mealName');
    let mealCategory = document.getElementById('mealCategory');

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName2}`)
    .then(response => {
        return response.json();      
    })    
    .then(data => {
        
        mealImage.src = data.strMealThumb;
        mealName.textContent = data.strMeal;
        mealCategory.textContent = data.strCategory;

    })
    .catch(error => { console.log('Something went wrong', error);
    });
}