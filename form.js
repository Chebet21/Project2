const form1 = document.getElementById('form1');
 const formArray = [];

 

form1.addEventListener('submit',function(event){
    event.preventDefault();

    
    // const formData = new FormData(form1);
    // const dataObject = Object.fromEntries(formData.entries());

    // localStorage.setItem("userFormData", JSON.stringify(dataObject));

    // console.log('Form Submitted Data');
    // alert('Form data submitted successfully!');
   
    const ingredients = document.getElementById('Ingredients');
    const procedure = document.getElementById('Procedure');
   
    const formData = {
       Ingredients: ingredients,
       Procedure: procedure
    }
    localStorage.setItem('savedFormData', JSON.stringify(formData));
    formArray.push(ingredients, procedure);
    alert('Form Data saved');
    console.log(formArray);
    window.location.href = "recipe.html";

   
    form1.reset()
})

const textarea = document.getElementsByClassName("textarea")

textarea.addEventListener('focus', function(){
    if (this.value === '1. '){
        this.setSelectionRange(3, 3);
    }
});

textarea.addEventListener('keydown', function(e){
    if(e.key === 'Backspace'){
        const pos = this.selectionStart;
        const textBeforeCursor = this.value.substring(0, pos);

        if (/^\d+\.\s$/.test(textBeforeCursor) || /\n\d+\.\s$/.test(textBeforeCursor)){
            e.preventDefault();
        }
    }

    if(e.key === 'Enter'){
        const pos = this.selectionStart;
        const textBeforeCursor = this.value.substring(0, pos);
        const lines = textBeforeCursor.split('\n');
        const currentLine = lines[lines.length - 1];

        const match = currentLine.match(/^\d+\.\s$/);

        if(match){
            e.preventDefault();

            const currentNum = parseInt(match[1], 10);
            const nextNum = currentNum + 1;
            const nextLinePrefix = `\n${nextNum}. `;

            const textAfterCursor = this.value.substring(pos);
            this.value = textBeforeCursor + nextLinePrefix + textAfterCursor;
            
            const newCursorPos = pos + nextLinePrefix.length;
            this.setSelectionRange(newCursorPos, newCursorPos);
            this.dispatchEvent(new Event('input'))


        }
    }

})



// let formArray = JSON.parse(localStorage.getItem('formData')) [];  

// function getStoredData() {
//     const storedData = localStorage.getItem("userFormData")

//     if (storedData) {
//         const data = JSON.parse(storedData);
//         console.log('Retrieved data:', data);
//         return data;
//     }
//     console.log('No data found in storage');
//     return null;
// }


// const ingInput = document.getElementById('Ingredients');
// const addIngBtn = document.getElementById('add-ing-btn');
// const inglist = document.getElementById('ing-list');

// function addIngredient(){
//     const ingText = ingInput.value.trim();

//     if(ingText){
//         const newIng = document.createElement('li');
//         newIng.textContent = addIngredient;

//         inglist.appendChild(newIng);

//         ingInput.value = '';
        
//     } else{
//         alert('Please add Ingredient');
//     }

   
// }

//  addIngBtn.addEventListener('click', addIngredient);

//     ingInput.addEventListener('keypress', function(event) {
//         // event.preventDefault()
//         if (event.key === 'Enter'){
//             addIngredient()
//         }
//     })



// const prcInput = document.getElementById('Procedure');
// const addPrcBtn = document.getElementById('add-prc-btn');
// const prclist = document.getElementById('prc-list');

// function addProcedure(){
//     const prcText = prcInput.value.trim();

//     if(prcText){
//         const newPrc = document.createElement('li');
//         newPrc.textContent = addProcedure;

//         prclist.appendChild(newPrc);

//         prcInput.value = '';
        
//     } else{
//         alert('Please add step');
//     }
// }

const imageInput = document.getElementById('imageInput');
const imgPreview = document.getElementById('imgPreview');

imageInput.addEventListener('change', function(){
    const file = this.file[0];

    if (file){
        const objectURL = URL.createObjectURL(file);

        imgPreview.src = objectURL;
        imgPreview.style.display = 'block';
    }
})

