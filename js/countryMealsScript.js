let areaName = document.getElementsByClassName("kitchenName").textContent;
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

        for (let index = 0; index < 4; index++) {
            let a = document.createElement('a');
            a.href = "./meal.html";
            let div = document.createElement('div');
            div.setAttribute('class','meal');
            let img = document.createElement('img');
            img.src = data.meals[index].strMealThumb;
            let h3 = document.createElement('h3');
            h3.textContent = data.meals[index].strMeal;
            

            div.appendChild(img);
            div.appendChild(h3);

            a.appendChild(div);
            meals2.appendChild(a);
            

            // function to store meal name in local storge
            a.addEventListener('click', function(){
                window.localStorage.setItem('storeValue', data.meals[index].strMeal);
            });

        }
        
    })
    .catch(error => { console.log('Something went wrong', error);
    });


}


window.onload = (event) => {
    viweArea();
    viewMeals();
};