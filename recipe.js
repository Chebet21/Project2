document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const selectedIndex = urlParams.get('index');
    const formArray = JSON.parse(localStorage.getItem("userFormData")) || [];

    const recipeTTL = document.getElementById('recipettl');
    const recipeING = document.getElementById('recipeIng');
    const recipePRC = document.getElementById('recipePrc');

    if(selectedIndex !==null && formArray[selectedIndex]) {
        const activeRecipe = formArray[selectedIndex];

        recipeTTL.textContent = activeRecipe.Title;
        recipeING.textContent = activeRecipe.Ingredients || 'No Ingredients';
        recipePRC.textContent = activeRecipe.Precedure || 'No Procedure';

        console.log ("this is what i am seeing", activeRecipe)
    } else (
        recipeTTL.textContent = "Recipe not found"
    )
})