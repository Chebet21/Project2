const formArray = JSON.parse(localStorage.getItem("userFormData")) || [];
const form1 = document.getElementById('form1');


form1.addEventListener('submit',function(event){
    event.preventDefault();

    
    const formData = new FormData(form1);
    const dataObject = Object.fromEntries(formData.entries());

    formArray.push(dataObject);
    
    localStorage.setItem("userFormData", JSON.stringify(formArray));

    console.log('Form Submitted Data');
    alert('Form data submitted successfully!');

    form1.reset();
    console.log("Current storage array:", formArray)
})

const ingInput = document.getElementById("ingInput");


ingInput.addEventListener('keydown', function(e){
    if(e.key === 'Backspace'){
        const pos = this.selectionStart;
        const textBeforeCursor = this.value.substring(0, pos);

        if (/^\d+\.\s$/.test(textBeforeCursor) || /\n\d+\.\s$/.test(textBeforeCursor)){
            e.preventDefault();
        }
    }

if (e.key === 'Enter') {
  const pos = this.selectionStart;
  const textBeforeCursor = this.value.substring(0, pos);
  
 
  const lastNewlineIndex = Math.max(textBeforeCursor.lastIndexOf('\n'), textBeforeCursor.lastIndexOf('\r'));
  const currentLine = textBeforeCursor.substring(lastNewlineIndex + 1);
  const cleanedLine = currentLine.trimEnd();
  
  const match = cleanedLine.match(/^(\d+)\.\s/);

  if (match) {
    e.preventDefault();
    
    const currentNum = parseInt(match[1], 10); 
    const nextNum = currentNum + 1;
    const nextLinePrefix = `\n${nextNum}. `;
    
    const textAfterCursor = this.value.substring(pos);
    this.value = textBeforeCursor + nextLinePrefix + textAfterCursor;
    
    const newCursorPos = pos + nextLinePrefix.length;
    this.setSelectionRange(newCursorPos, newCursorPos);
    this.dispatchEvent(new Event('input'));
  }
}


})



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


