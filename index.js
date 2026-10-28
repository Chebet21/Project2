const form = document.getElementById('form1')

form.addEventListener('submit',function(event){
    event.preventDefault();

    const formData = new FormData(form);

    const dataObject = Object.fromEntries(formData.entries());

    localStorage.setItem("userFormData", JSON.stringify(dataObject));

    console.log('Form Submitted Data');
    alert('Form data submitted successfully!');
    form.reset()
})

function getStoredData() {
    const storedData = localStorage.getItem("userFormData")

    if (storedData) {
        const data = JSON.parse(storedData);
        console.log('Retrieved data:', data);
        return data;
    }
    console.log('No data found in storage');
    return null;
}


const ingInput = document.getElementById('Ingredients');
const addIngBtn = document.getElementById('add-ing-btn');
const inglist = document.getElementById('ing-list');

function addIngredient(){
    const ingText = ingInput.value.trim();

    if(ingText){
        const newIng = document.createElement('li');
        newIng.textContent = addIngredient;

        inglist.appendChild(newIng);

        ingInput.value = '';
        
    } else{
        alert('Please add Ingredient');
    }

   
}

 addIngBtn.addEventListener('click', addIngredient);

    ingInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter'){
            addIngredient()
        }
    })



const prcInput = document.getElementById('Procedure');
const addPrcBtn = document.getElementById('add-prc-btn');
const prclist = document.getElementById('prc-list');

function addProcedure(){
    const prcText = prcInput.value.trim();

    if(prcText){
        const newPrc = document.createElement('li');
        newPrc.textContent = addProcedure;

        prclist.appendChild(newPrc);

        prcInput.value = '';
        
    } else{
        alert('Please add step');
    }
}

