let areaName = document.getElementsByClassName("kitchenName").textContent;
window.localStorage.setItem('an', areaName);
let areaName2 = localStorage.getItem("an");
let header = document.getElementById("header");


function viweArea(){
   let area = document.createElement("h1");
   let areaN = document.createTextNode(areaName2);
   area.appendChild(areaN);
   header.appendChild(area);

   

}
function viewMeals(){
    let meals2 = document.getElementById("meals");

    


    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName2}`)
    .then(response => {
        return response.json();      
    })    
    .then(data => {
        data.array.forEach(meals => {
            
            let html = "";
            html += `
            <a href="./meal.html">
                <div class = "meal">
                <img src="${meals.strMealThumb}" alt="">
                <h3>${meals.strMeal}</h3>
                <h4>${meals.strCategory}</h4>        
                </div>
            </a>
            `
            meals2.innerHTML += html;
        
        // mealImage.src = data.strMealThumb;
        // mealName.textContent = data.strMeal;
        // mealCategory.textContent = data.strCategory;



        });
        

    })
    .catch(error => { console.log('Something went wrong', error);
    });


}