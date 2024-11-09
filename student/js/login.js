// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     var userId = document.getElementById("userId").value;
//     var password = document.getElementById("password").value;
    
//     // Here you can add logic to validate the input and send a request to your server for authentication.
//     // For now, let's just log the input values to the console.

//     // if(!userId || !password) {
//     //     alert("Please enter both User ID and Password")
//     //     return;
//     // }
    
//     console.log("User ID: " + userId);
//     // document.getElementById('userid').textContent = userId
//     console.log("Password: " + password);
    
//      // Save the userId to localStorage
//     localStorage.setItem("userId", userId);
//     login()

//     // Set the text content of the span element to show the username
//     // document.getElementById("userid").textContent = userId; 
// });

// function login(){
//     window.location.href="../html/studenthome.html";
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//         document.getElementById('userId').textContent = userId;
//     }
// });






// // document.getElementById("loginForm").addEventListener("submit", function(event) {
// //     event.preventDefault();
    
// //     var userId = document.getElementById("userId").value;
// //     var password = document.getElementById("password").value;

// //     // Validate inputs
// //     if (!userId || !password) {
// //         alert("Please enter both User ID and Password");
// //         return; // Stop execution if validation fails
// //     }

// //     // Log the input values to the console (for debugging)
// //     console.log("User ID: " + userId);
// //     console.log("Password: " + password);

// //     // Optionally, perform additional validation based on the input patterns
// //     const userIdPattern = /^[A-Za-z0-9]+$/; // Pattern for User ID
// //     const passwordPattern = /^[A-Za-z0-9]{8}$/; // Pattern for Password (8 characters, no special)

// //     if (!userIdPattern.test(userId)) {
// //         alert("User ID can only contain alphanumeric characters.");
// //         return;
// //     }

// //     if (!passwordPattern.test(password)) {
// //         alert("Password must be exactly 8 alphanumeric characters with no special characters.");
// //         return;
// //     }

// //     // Save the userId to localStorage
// //     localStorage.setItem("userId", userId);

// //     // Redirect to the student home page after successful validation
// //     login();
// // });

// // function login() {
// //     window.location.href = "../html/studenthome.html";
// // }

// // document.addEventListener('DOMContentLoaded', (event) => {
// //     const userId = localStorage.getItem("userId");
// //     if (userId) {
// //         // If you have a specific element to show the user ID, target it here
// //         // For example: document.getElementById("displayUserId").textContent = userId; 
// //         console.log("User ID from storage: " + userId); // This is for debugging
// //     }
// // });


// // function validateLogin(event) {
// //     // Prevent the default form submission behavior
// //     event.preventDefault();

// //     var userId = document.getElementById("userId").value;
// //     var password = document.getElementById("password").value;

// //     var userIdPattern = /^[A-Za-z0-9]+$/; // Pattern for User ID (alphanumeric)
    
// //     var userIdError = document.getElementById("userId-error");
// //     var passwordError = document.getElementById("password-error");

// //     var isValid = true;

// //     // User ID validation
// //     if (!userIdPattern.test(userId)) {
// //         userIdError.textContent = "Invalid User ID. Only alphanumeric characters are allowed.";
// //         userIdError.style.display = "block";
// //         isValid = false;
// //     } else {
// //         userIdError.style.display = "none";
// //     }

// //     // Password validation
// //     if (password.length < 8) { // Check for minimum password length
// //         passwordError.textContent = "Password must be at least 8 characters long.";
// //         passwordError.style.display = "block";
// //         isValid = false;
// //     } else {
// //         passwordError.style.display = "none";
// //     }

// //     // If all validations pass, proceed with the login
// //     if (isValid) {
// //         // Here you would typically send the login data to your server for validation
// //         console.log("User ID: " + userId);
// //         console.log("Password: " + password);

// //         // Simulating successful login for demonstration
// //         alert("Login successful!"); // Optionally provide feedback
// //         window.location.href = "../html/studenthome.html"; // Redirect on successful login
// //     }
// // }

// // Add this to the form element to ensure validation runs on submission
// // <form id="loginForm" onsubmit="validateLogin(event)"> 


// // function validateLogin(event) {
// //     event.preventDefault(); // Prevent the default form submission

// //     var userId = document.getElementById("userId").value;
// //     var password = document.getElementById("password").value;

// //     var userIdPattern = /^[A-Za-z0-9]+$/; // Pattern for User ID (alphanumeric)
    
// //     var userIdError = document.getElementById("userId-error");
// //     var passwordError = document.getElementById("password-error");

// //     var isValid = true;

// //     // User ID validation
// //     if (!userIdPattern.test(userId)) {
// //         userIdError.textContent = "Invalid User ID. Only alphanumeric characters are allowed.";
// //         userIdError.style.display = "block";
// //         isValid = false;
// //     } else {
// //         userIdError.style.display = "none";
// //     }

// //     // Password validation
// //     if (password.length < 8) { // Check for minimum password length
// //         passwordError.textContent = "Password must be at least 8 characters long.";
// //         passwordError.style.display = "block";
// //         isValid = false;
// //     } else {
// //         passwordError.style.display = "none";
// //     }

// //     // Check if user ID exists in localStorage
// //     var storedUserId = localStorage.getItem('userId');
// //     var storedPassword = localStorage.getItem('password'); // Assuming you also store the password

// //     if (isValid) {
// //         if (userId !== storedUserId) {
// //             userIdError.textContent = "User ID not found.";
// //             userIdError.style.display = "block";
// //             isValid = false;
// //         } else {
// //             userIdError.style.display = "none";
// //         }

// //         // Check if the password matches
// //         if (isValid && password !== storedPassword) {
// //             passwordError.textContent = "Incorrect password.";
// //             passwordError.style.display = "block";
// //             isValid = false;
// //         } else {
// //             passwordError.style.display = "none";
// //         }

// //         // If all validations pass, proceed with the login
// //         if (isValid) {
// //             alert("Login successful!"); // Provide feedback
// //             window.location.href = "../html/studenthome.html"; // Redirect on successful login
// //         }
// //     }
// // }




// ====================== final code===============================================================
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;

    console.log("User ID: " + userId);
    console.log("Password: " + password);

    // Check if the user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.userId === userId);

    if (!user) {
        // If user is not found
        alert("User not found. Please check your User ID.");
        return;
    }

    // Check if the password matches
    if (user.password !== password) {
        // If password does not match
        alert("Incorrect password. Please try again.");
        return;
    }

    // If login is successful
    alert("Login successful! Welcome, " + user.firstName + "!");
    window.location.href = "../html/studenthome.html"; // Redirect to student home page
});