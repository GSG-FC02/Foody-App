const kitchenArea=document.getElementById('root');

fetch('../js/country.json')
  .then(response => response.json())
  .then(data => {
      data.forEach(area => {
          const card=document.createElement('a');
          card.setAttribute('class','kitchens')
          card.href="../Html/countryMeals.html"
          const img=document.createElement('img')
          img.src=area.strMealThumb;
          img.setAttribute('class','kitchen')
          const text=document.createElement('h2')
          text.setAttribute('class','kitchenName')
          text.textContent=area.strArea
          card.appendChild(img);
          card.appendChild(text);
          kitchenArea.appendChild(card);

      })
    });
