document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const selectedIndex = urlParams.get('index');
    const formArray = JSON.parse(localStorage.getItem("userFormData")) || [];

    const recipeTTL = document.getElementById('recipettl');
    const recipeING = document.getElementById('recipeIng');
    const recipePRC = document.getElementById('recipePrc');
    const eraseBtn = document.getElementById('eraseBtn')

    if(selectedIndex !==null && formArray[selectedIndex]) {
        const activeRecipe = formArray[selectedIndex];

        recipeTTL.textContent = activeRecipe.Title;
        recipeING.textContent = activeRecipe.Ingredients || 'No Ingredients';
        recipePRC.textContent = activeRecipe.Precedure || 'No Procedure';

        if (eraseBtn) {
            eraseBtn.addEventListener('click', function(){
                if(confirm("Are you sure you wat to delete this recipe?")){
                    formArray.splice(selectedIndex, 1);
                    localStorage.setItem("userFormData", JSON.stringify(formArray));
                    window.location.href = "index.html";
                }
            });
        }

        console.log ("this is what i am seeing", activeRecipe)
    } else {
        recipeTTL.textContent = "Recipe not found";
        if (eraseBtn) eraseBtn.style.display = 'none'
        }
})