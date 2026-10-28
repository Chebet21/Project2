const form = document.getElementById('form1')

form.addEventListener('submit',function(event){
    event.preventDefault();

    const formData = new FormData(form);

    const dataObject = Object.fromEntries(formData.entries());

    localStorage.setItem("userFormData", JSON.stringify(dataObject));

    console.log('Form Submitted Data');
    alert('Form data submitted successfully!');
    form.reset
})

function getStoredData() {
    const storedData = localStorage.getItem("userFormData")

    if (storedData) {
        const data = JSON.parse(storedData);
        console.log('Retrieved data:', data)
        return data;
    }
    console.log('No data found in storage');
    return null;
}


