// Changes from the header to the header scrolled position
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('#logo');
    const nav = document.querySelector('nav');

    // Check if page has been scrolled
    if (window.scrollY > 0) {
        // if it as been scrolled down add the scrolled class
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
        nav.classList.add('scrolled');
    } else {
        // if it has not been scrolled, remove scrolled class
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        nav.classList.remove('scrolled');
    }
});

// Return to top of page
var scrollToTopButton = document.getElementsByClassName('scroll-button')[0];

if (scrollToTopButton) {
    // Add a click event listener to the button
    scrollToTopButton.addEventListener('click', function() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Hide text button
const articles = document.querySelectorAll('.post');
articles.forEach(article => {
    const articleText = article.querySelector('.articleText');
    const hideButton = article.querySelector('.hideButton');
    const showButton = article.querySelector('.showButton');

    hideButton.addEventListener('click', function() {
        articleText.style.display = 'none';
        hideButton.style.display = 'none';
        showButton.style.display = 'inline';
    });

    showButton.addEventListener('click', function() {
        articleText.style.display = 'block';
        showButton.style.display = 'none';
        hideButton.style.display = 'inline';
    });
});

//check password
function checkPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = "22";
    if (password != confirmPassword) {
        alert("Passwords do not match. Try twotwo");
        return false;
    }
    document.location.href='./index.html';
}

//prevents forms being submitted if fields are empty
function checkForm() {
        var elements = [{id: "login-username", error:"user_error"},{id: "login-password",error:"psw_error"}];
        console.log(elements);
        let validCount =0

        elements.forEach(function(element){
            let x = document.forms["login"][element.id].value;
            var errorText = document.getElementById(element.error);
            var textLength = x.length;
            console.log(element, " has textlength of ", textLength)

            if (textLength === 0){
                document.getElementById(element.id).style.borderColor = "orange";
                errorText.style.color = 'orange';    
                errorText.textContent = 'Missing text';
                
            }
            if (textLength > 0){
                // undo changes
                document.getElementById(element.id).style.borderColor = "#025E73";
                errorText.textContent = '';

                validCount++
                console.log("current valid count is", validCount)
            }
        })

        if (validCount === 2){
            alert("Success! You have logged in");
            window.location.href ="index.html";
        
    }
}

//only works for the two first items
function validateForm() {
    var elements = [
        {inputId: "span_title", error: "title_error", maxLength: 80, errorMessage: "This title is too long, try using less than 80 characters" },
        {inputId: "span_tags", error: "tags_error", maxLength: Infinity, errorMessage: "" },
        {inputId: "span_content", error: "content_error", maxLength: Infinity, errorMessage: "" }
    ];

    var validCount = 0;

    elements.forEach(function(element) {
        var spanElement = document.getElementById(element.inputId);
        var errorText = document.getElementById(element.error);
        var textLength = spanElement.textContent.trim().length;

        if (textLength === 0) {
            spanElement.style.borderColor = 'orange';
            errorText.style.color = 'orange';
            errorText.textContent = 'Missing text';
            spanElement.setAttribute('placeholder', 'Please write here');
        } else if (textLength > element.maxLength) {
            spanElement.style.borderColor = 'orange';
            errorText.style.color = 'orange';
            errorText.textContent = element.errorMessage;
        } else {
            spanElement.style.borderColor = '#025E73';
            errorText.textContent = '';
            validCount++;
        }
    });

    if (validCount === elements.length) {
        confirm("Success!");
        window.location.href ="index.html";
    }
}

//reset function, clears all fields
function resetForm() {
    let span1 = document.getElementById("span_title");
    let span2 = document.getElementById("span_tags");
    let span3 = document.getElementById("span_content");
    let error1 = document.getElementById("title_error");
    let error2 = document.getElementById("tags_error");
    let error3 = document.getElementById("content_error");
 
    span1.textContent = "";
    span2.textContent = "";
    span3.textContent = "";
    span1.style.borderColor = '#025E73';
    error1.textContent = '';
    span2.style.borderColor = '#025E73';
    error2.textContent = '';
    span3.style.borderColor = '#025E73';
    error3.textContent = '';

 }  

//check email valid (check email contains "@" and ".xxx")
function validateEmail(address) {
    //Standard expression for validating an email address - referenced multiple webpages but I got ChatGPT to talk me through it
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Checks if input to email field matches the pattern of the regex
    if(regex.test(address)) {
        return true; //Email is in a valid form, it's possible it exists
    }
    else {
        return false; //Email not valid
    }
}

//checks password confirms to password policy
function validatePassword(input) {
    //let input = document.forms["registrationForm"].elements.password.value;
    let lowercase = /[a-z]/g;
    let uppercase = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let symbols = /[!-\/:-@[-`{-~]/;
    if(document.forms["registrationForm"].elements.password.value.match(lowercase) 
    && document.forms["registrationForm"].elements.password.value.match(uppercase) 
    && document.forms["registrationForm"].elements.password.value.match(numbers) 
    && document.forms["registrationForm"].elements.password.value.match(symbols) 
    && document.forms["registrationForm"].elements.password.value.length > 9) {
        return true; //password conforms to password policy, that is contains at least 1 letter, 1 number, one symbol 
        //and is at least 10 characters long
    }
    else {
        return false;
    }
}

const form = document.forms["registrationForm"];
if (form) {
    form.addEventListener("submit", validateRegoForm);
} else {
    console.error("Unable to find the registration form; no validation will be performed");
}
//Reference: KIT202 Tutorial 5, shoutouts for the code piece

//prevents registration form being submitted if any fields are empty or if password and confirm password do not match
function validateRegoForm(event) {
    //stops page from refreshing
    event.preventDefault();

    //a variable to count errors on the page
    let i = 0;
    
    //checks if there is content in the username field, returns an error if not
    if(document.forms["registrationForm"].elements.username.value == "") {
        document.getElementById("usernameError").innerHTML = "Enter a valid username";
        document.getElementById("username").setAttribute("style", "border-color: red");
        i++;
    }
    //checks if there is content in the email field, returns an error if not
    if(document.forms["registrationForm"].elements.email.value == "") {
        document.getElementById("emailError").innerHTML = "Enter an email";
        document.getElementById("email").setAttribute("style", "border-color: red");
        i++;
    }
    else {
        //checks the format of the email field, returns an error if invalid
        if(validateEmail(document.forms["registrationForm"].elements.email.value) == false) {
            document.getElementById("emailError").innerHTML = "Email not valid form";
            document.getElementById("email").setAttribute("style", "border-color: red");
            i++;
        }
    }
    //checks if there is content in the password field, returns an error if not
    if(document.forms["registrationForm"].elements.password.value == "") {
        document.getElementById("passwordError").innerHTML = "Enter a password";
        document.getElementById("password").setAttribute("style", "border-color: red");
        i++;
    }
    else {
        //checks if the password conforms to the password policy, returns an error if not
        if(validatePassword(document.forms["registrationForm"].elements.password.value) == false) {
            document.getElementById("passwordError").innerHTML = "Password must be at least 10 characters and contain 1 lowercase and 1 uppercase letter, 1 number and 1 symbol";
            document.getElementById("password").setAttribute("style", "border-color: red");
            i++;
        }
    }
    //checks if there is content in the confirm password field, returns an error if not  
    if(document.forms["registrationForm"].elements.cpassword.value == "") {
        document.getElementById("cpasswordError").innerHTML = "Confirm password";
        document.getElementById("cpassword").setAttribute("style", "border-color: red");
        i++;
    }
    //checks if the password and confirm password fields match, returns an error if not
    if(document.forms["registrationForm"].elements.password.value !== document.forms["registrationForm"].elements.cpassword.value) {
        document.getElementById("cpasswordError").innerHTML = "Passwords do not match";
        document.getElementById("cpassword").setAttribute("style", "border-color: red");
        document.getElementById("password").setAttribute("style", "border-color: red");
        i++;
    }
    //if no errors on the page, on submit, redirect to site homepage - otherwise do nothing
    if(i === 0) {
        window.location.href="index.html";
    }
}

//code recycled from Sara's resetForm function above, clears fields on Registration page
function resetRegoForm() {
    let field1 = document.getElementById("username");
    let field2 = document.getElementById("email");
    let field3 = document.getElementById("password");
    let field4 = document.getElementById("cpassword");
    let error1 = document.getElementById("usernameError");
    let error2 = document.getElementById("emailError");
    let error3 = document.getElementById("passwordError");
    let error4 = document.getElementById("cpasswordError");
 
    field1.textContent = "";
    field2.textContent = "";
    field3.textContent = "";
    field4.textContent = "";

    error1.textContent="";
    error2.textContent="";
    error3.textContent="";
    error4.textContent="";
    document.getElementById("email").setAttribute("style", "border-color: #025E73");
    document.getElementById("username").setAttribute("style", "border-color: #025E73");
    document.getElementById("password").setAttribute("style", "border-color: #025E73");
    document.getElementById("cpassword").setAttribute("style", "border-color: #025E73");

}
