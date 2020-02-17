const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event){
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const  firstNameError = document.querySelector("#firstNameError");
    const  firstNameValue = firstName.value;

    if (checkInput(firstNameValue) === true){
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}

function checkInput(value){
    const trimmedValue = value.trim();

    if(trimmedValue.length > 2){
        return true;
    }else {
        return false;
    }
}






