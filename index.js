const listContainer = document.getElementById("recipeNames");
const formArray= JSON.parse(localStorage.getItem("userFormData")) || [];


document.addEventListener('DOMContentLoaded', function(){


function renderList(formArray){

    listContainer.innerHTML = ''

    if (formArray.length === 0){
        recipeNames.innerHTML = '<p> No recipes yet </p>';
        return;
    }


    formArray.forEach((recipe, index) => {
        const recipeLink = document.createElement('a');

        recipeLink.href = `recipe.html?index=${index}`;
        recipeLink.classList.add(`title-item`);
        recipeLink.style.display = 'block';

        recipeLink.textContent = recipe.Title || `Untitled Recipe #${index + 1}`;

        listContainer.appendChild(recipeLink);



    })
    
   

}
 renderList(formArray);


const searchInput = document.getElementById('search');

if (searchInput){
    
    searchInput.addEventListener('input', function(event){
        const searchTerm = event.target.value.toLowerCase();

        const filterArray = formArray.filter(recipe => {
            const recipeTitle = (recipe.Title || '').toLowerCase();
            return recipeTitle.includes(searchTerm);
        });

        renderList(filterArray)
    });
}


});

