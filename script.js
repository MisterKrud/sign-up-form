const passwordField = document.getElementById("pwd");
const passwordConfirmation = document.getElementById("confirm");
const submitButton = document.getElementById("submitButton");


submitButton.addEventListener("click", () => {
    if(passwordField != passwordConfirmation){
        passwordConfirmation.setAttribute("style","background-colour: lightpink;");
        passwordConfirmation.innerHTML ="<p>Passwords do not match<p>"
    preventDefault()
    }
} )