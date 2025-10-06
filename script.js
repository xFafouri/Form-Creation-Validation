document.addEventListener("DOMContentLoaded", function () {
    // console.log(document.getElementById("registration-form"));
    const Form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    Form.addEventListener("submit", function()
    {
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            
            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Password:", password);
    });
    // console.log('email = ' +  Form.email); 

    // console.log(Form.value); 

});
