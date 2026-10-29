const storedData = localStorage.getItem("savedFormData");

if (savedFormData) {
    const recipeData = JSON.parse(storedData);

    document.getElementById("display-Ingredients").textContent = savedFormData.Ingredients
    document.getElementById("display-Procedure").textContent = savedFormData.Procedure
}