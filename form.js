const formArray = JSON.parse(localStorage.getItem("userFormData")) || [];
const form1 = document.getElementById('form1');


if (form1) {
form1.addEventListener('submit',function(event){
    event.preventDefault();

    const formData = new FormData(form1);
    const dataObject = Object.fromEntries(formData.entries());

    formArray.push(dataObject);
    
    localStorage.setItem("userFormData", JSON.stringify(formArray));

    console.log('Form Submitted Data');
    alert('Form data submitted successfully!');

    const newRecipeIndex = formArray.length - 1;

    form1.reset();
    console.log("Current storage array:", formArray);
    window.location.href = `recipe.html?index=${newRecipeIndex}`;
})
}

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

