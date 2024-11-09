// function validateForm() {
//     var phone = document.getElementById("number").value;
//     var email = document.getElementById("mail-id").value;
//     var phonePattern = /^[6-9]\d{9}$/;
//     var emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

//     var phoneError = document.getElementById("number-error");
//     var emailError = document.getElementById("email-error");

//     var isValid = true;

//     if (!phonePattern.test(phone)) {
//         phoneError.style.display = "block";
//         isValid = false;
//     } else {
//         phoneError.style.display = "none";
//     }

//     if (!emailPattern.test(email)) {
//         emailError.style.display = "block";
//         isValid = false;
//     } else {
//         emailError.style.display = "none";
//     }

//     if (isValid) {
//         // Store the form data in localStorage
//         var firstname = document.getElementById('firstname').value;
//         var lastname = document.getElementById('lastname').value;
//         var number = document.getElementById('number').value;
//         var mailId = document.getElementById("mail-id").value;
//         var userId = document.getElementById("userId").value;
//         var password = document.getElementById("password").value;

//         localStorage.setItem('firstname', firstname);
//         localStorage.setItem('lastname', lastname);
//         localStorage.setItem('number', number);
//         localStorage.setItem('mailId', mailId);
//         localStorage.setItem('userId', userId);
//         localStorage.setItem('password', password);

//         // Redirect to the login page
//         // alert("Successfully signed up");
//         window.location.href = "../html/login.html"; // Ensure this path is correct
//         return false; // Prevents form from submitting before the redirect
//     }

//     return false; // Prevent form submission if validation fails
// }


function validateForm() {
    var phone = document.getElementById("number").value;
    var email = document.getElementById("mail-id").value;
    var phonePattern = /^[6-9]\d{9}$/; // Validates phone numbers starting with 6, 7, 8, or 9
    var emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/; // Validates basic email format

    var phoneError = document.getElementById("number-error");
    var emailError = document.getElementById("email-error");

    var isValid = true;

    // Validate phone number
    if (!phonePattern.test(phone)) {
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    // Validate email address
    if (!emailPattern.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // If all validations pass
    if (isValid) {
        // Store user data in localStorage
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var mobile = document.getElementById('number').value;
        var mailId = document.getElementById("mail-id").value;
        var userId = document.getElementById("userId").value;
        var password = document.getElementById("password").value;
    
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = {
            firstName: firstname,
            lastName: lastname,
            mobile: mobile,
            email: mailId,
            userId: userId,
            password: password,
            subscriptionPlan: null,
            isSubscribed: false
        };
    
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    
        // Store first and last name in localStorage for later use
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
    
        // Redirect to login page
        window.location.href = "../html/login.html"; 
        return false; // Prevents form from submitting
    }

    // Prevent form submission if validation fails
    return false;
}