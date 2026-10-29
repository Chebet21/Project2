const recipeNames = document.getElementById('recipeNames')

function goTolist(){
 const listItem = document.createElement('li');

 listItem.textContent = 

 listItem.addEventListener('click', ()=> {
    window.location.href = 'recipe.html';
 });
 document.getElementById('recipeList').appendChild(listItem)
}

