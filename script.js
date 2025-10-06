document.addEventListener("DOMContentLoaded", function () {
    // console.log(document.getElementById("registration-form"));
    const Form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    Form.addEventListener("submit", function()
    {
            var isValid = true;
            let messages = [] ;
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username.length < 3)
            {
                isValid = false;
                messages.push("username less than 3");
            }

            if (!email.includes("@") || !email.includes("."))
            {
                isValid = false;
                messages.push("email not valid format");
            }
            if (password.length < 8 )
            {
                isValid = false;
                messages.push("password length is not valid");
            }
            
            feedbackDiv.style.display = "block"; 
            if (isValid) 
            {
                feedbackDiv.textContent = "Registration successful!";
                feedbackDiv.style.color = "#28a745"; 
            } 
            else 
            {
                feedbackDiv.innerHTML = messages.join("<br>");
                feedbackDiv.style.color = "#dc3545";
            }
            
            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Password:", password);
    });
    // console.log('email = ' +  Form.email); 

    // console.log(Form.value); 

});
