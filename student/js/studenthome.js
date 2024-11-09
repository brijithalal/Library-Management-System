function showSection(section) {
    document.querySelectorAll('main section').forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// document.getElementById('userid').textContent = localStorage.getItem("userId") ;

// side bar

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const profileButton = document.querySelector('.profile-button');

    // Check if the click is outside the sidebar and profile button
    if (!sidebar.contains(event.target) && event.target !== profileButton) {
        sidebar.classList.remove('active');
    }
});

function logout() {
    // alert('Logged out');
    // localStorage.clear();
    window.location.href="http://127.0.0.1:5501/home.html";
    // window.location.href="http://127.0.0.1:5501/library%20management%20system/home.html";

}


// program starts from here

document.addEventListener('DOMContentLoaded', function() {
    // const activePlanElement = document.getElementById('activePlan');
    // const rentBookButton = document.getElementById('rentBookButton');
    // const isPlanActive = localStorage.getItem('planActive'); 
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    const subscriptionStatusElement = document.getElementById('subscriptionStatus');
    
    //show customer name
    if (firstname && lastname) {
        document.getElementById('customerName').textContent = `${firstname} ${lastname}`;
    }


    //check for active subscription
    const subscription = localStorage.getItem('subscription');
            if (subscription) {
                subscriptionStatusElement.textContent = `Active Subscription: ${subscription} plan`;
                subscriptionStatusElement.style.color = "green";
                
            } else {
                subscriptionStatusElement.textContent = "No active subscription. Please select a subscription plan.";
                subscriptionStatusElement.style.color = "red";
            }
        });

        // document.addEventListener('DOMContentLoaded', function() {
        //     const rentBookButtons = document.querySelectorAll('.rentBookButton');
            
        //     rentBookButtons.forEach(button => {
        //         button.addEventListener('click', function() {
        //             const subscription = localStorage.getItem('subscription');
        //             if (!subscription) {
        //                 alert('You need to subscribe to rent books. Please select a subscription plan first.');
        //                 window.location.href = '../html/subscription.html';
        //             } else {
        //                 window.location.href = '../html/payment.html';
        //             }
        //         });
        //     });
        // });

        // document.addEventListener('DOMContentLoaded', function() {
        //     const rentBookButtons = document.querySelectorAll('.purchaseBookButton');
            
        //     rentBookButtons.forEach(button => {
        //         button.addEventListener('click', function() {
        //             const subscription = localStorage.getItem('subscription');
        //             if (!subscription) {
        //                 alert('You need to subscribe to purchase books. Please select a subscription plan first.');
        //                 window.location.href = '../html/subscription.html';
        //             } else {
        //                 window.location.href = '../html/payment.html';
        //             }
        //         });
        //     });
        // });
        
        

// while subscribing it goes to payment portal

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('silver-plan').addEventListener('click', function() {
        window.location.href = '../html/paymentsub.html';
    });

    document.getElementById('gold-plan').addEventListener('click', function() {
        window.location.href = '../html/paymentsub.html';
    });

    document.getElementById('platinum-plan').addEventListener('click', function() {
        window.location.href = '../html/paymentsub.html';
    });
});


// while clicking the subscribe button

// function subscribe(planType) {
//     // Store the user's subscription type in local storage
//     localStorage.setItem('subscription', planType);
//     alert(`Subscribed to ${planType} plan successfully!`);
//     console.log(planType)
//     window.location.href = './html/studenthome.html';
// }

// =======================================================to store list of users in admin page:

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve subscription plan once at page load and store in a variable
    localStorage.setItem('subscription', planType);
    const planType = localStorage.getItem('subscription');
    
    // if (!planType) {
    //     // If not already set, assign a value to `planType`
    //     planType = 'yourPlanTypeHere'; // Replace 'yourPlanTypeHere' with the actual value logic
    //     localStorage.setItem('subscription', planType);
    // }

    console.log(planType); // Only log for testing
    // console.log(planType); // Only log for testing
    // Use planType in your UI logic as needed
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    const mobile = localStorage.getItem('phone');
    const email = localStorage.getItem('email'); // Ensure email is also stored
    // const isSubscribed = true; // Set to true when user subscribes

    // Check if the user already exists in the array
    let userIndex = users.findIndex(user => user.firstName === firstname && user.lastName === lastname);

    if (userIndex === -1) {
        // If user does not exist, create a new user entry
        const newUser = {
            firstName: firstname,
            lastName: lastname,
            mobile: mobile,
            email: email,
            // subscriptionPlan: planType,
            // isSubscribed: isSubscribed
        };
        users.push(newUser);
    } else {
        // If user exists, update the subscription information
        users[userIndex].subscriptionPlan = planType;
        users[userIndex].isSubscribed = isSubscribed;
    }

    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    // alert(`Subscribed to ${planType} plan successfully!`);
    // window.location.href = './html/studenthome.html';
}
);


// Toggle the edit form visibility
function toggleEditForm() {
    const editForm = document.getElementById('editForm');
    editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none';
    
    // Prefill form with current data
    document.getElementById('editFirstName').value = localStorage.getItem('firstname') || '';
    document.getElementById('editLastName').value = localStorage.getItem('lastname') || '';
    document.getElementById('editPhone').value = localStorage.getItem('phone') || '';
}

// Save updated details
function saveUserDetails() {
    const newFirstName = document.getElementById('editFirstName').value;
    const newLastName = document.getElementById('editLastName').value;
    const newPhone = document.getElementById('editPhone').value;

    // Save to localStorage
    if (newFirstName && newLastName && newPhone) {
        localStorage.setItem('firstname', newFirstName);
        localStorage.setItem('lastname', newLastName);
        localStorage.setItem('phone', newPhone);

        // Update displayed name
        document.getElementById('customerName').textContent = `${newFirstName} ${newLastName}`;
        alert('User details updated successfully!');
        
        // Hide the form after saving
        toggleEditForm();
    } else {
        alert('Please fill in all fields');
    }
}

// Load initial customer name on page load
document.addEventListener('DOMContentLoaded', function() {
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');

    if (firstname && lastname) {
        document.getElementById('customerName').textContent = `${firstname} ${lastname}`;
    }
});

// Toggle dropdown genre function
function toggleDropdown(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const dropdown = event.target.nextElementSibling;

    // Toggle the visibility of the clicked dropdown
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        // Close any open dropdowns before opening the clicked one
        document.querySelectorAll('.dropdown-content').forEach(menu => menu.style.display = 'none');
        dropdown.style.display = 'block';
    }
}


// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const isClickInside = event.target.closest('.dropdown');
    if (!isClickInside) {
        document.querySelectorAll('.dropdown-content').forEach(menu => menu.style.display = 'none');
    }
});


// Function to check subscription status and handle transactions
// function handleBookAction(actionType, button) {
//     const subscription = localStorage.getItem('subscription');
//     if (!subscription) {
//         alert(`You need to subscribe to ${actionType === 'rent' ? 'rent' : 'purchase'} books. Please select a subscription plan first.`);
//         window.location.href = '../html/subscription.html';
//     } else {
//         // Proceed to the payment page if subscription is active
//         const bookDetails = button.closest('.book-details');
//         const bookId = bookDetails.querySelector('p:nth-child(1)').innerText.split(": ")[1];
//         const bookName = bookDetails.querySelector('p:nth-child(2)').innerText.split(": ")[1];

//         // Store the action type and book details
//         localStorage.setItem('actionType', actionType);
//         localStorage.setItem('bookId', bookId);
//         localStorage.setItem('bookName', bookName);

//         // Redirect to payment page
//         window.location.href = '../html/payment.html'; // Update with the actual path
//     }
// }


// Attach event listeners to rent buttons
const rentButtons = document.querySelectorAll('.rentBookButton');
rentButtons.forEach(button => {
    button.addEventListener('click', function() {
        handleBookAction('rent', button);
    });
});


// Attach event listeners to purchase buttons
const purchaseButtons = document.querySelectorAll('.purchaseBookButton');
purchaseButtons.forEach(button => {
    button.addEventListener('click', function() {
        handleBookAction('purchase', button);
    });
});


// for accessing only certain genres

function handleBookAction(actionType, button) {
    const subscription = localStorage.getItem('subscription');
    const bookDetails = button.closest('.book-details');
    const genre = bookDetails.getAttribute('data-genre');

    // Define which genres are accessible for each plan
    const silverGenres = ['Fiction'];
    const goldGenres = ['Fiction', 'Non-Fiction','Biography'];
    const platinumGenres = ['Fiction', 'Non-Fiction', 'Biography', 'Studies', 'Research'];

    // Check the user's subscription and genre access
    let accessibleGenres = [];
    if (subscription === 'Silver') {
        accessibleGenres = silverGenres;
    } else if (subscription === 'Gold') {
        accessibleGenres = goldGenres;
    } else if (subscription === 'Platinum') {
        accessibleGenres = platinumGenres;
    } else {
        // Handle the case where there's no subscription
        alert('No active subscription found. Please subscribe to access this content.');
        window.location.href = '../html/subscription.html'; 
        return; // Stop the function here
    }


    if (!subscription || !accessibleGenres.includes(genre)) {
        alert(`You need to subscribe to a higher plan to access ${genre} books.`);
        window.location.href = '../html/upgrade.html'; // Redirect to subscription page
        return
    

    } else {
        // Proceed to the payment page if the genre is allowed
        const bookId = bookDetails.querySelector('p:nth-child(1)').innerText.split(": ")[1];
        const bookName = bookDetails.querySelector('p:nth-child(2)').innerText.split(": ")[1];

        // Store the action type and book details
        localStorage.setItem('actionType', actionType);
        localStorage.setItem('bookId', bookId);
        localStorage.setItem('bookName', bookName);
        localStorage.setItem('rented', 'true');

        // Redirect to the payment page
        if(actionType === 'purchase'){
            window.location.href='../html/ordering.html'
        }else{
            window.location.href = '../html/payment.html'; // Update with the actual path
        }
       
    }
}

//
function subscribe(planType) {
    // Store the new subscription type (optional)
    localStorage.setItem('subscription', planType);
    alert(`You are upgrading to the ${planType} plan.`);
    
    // Redirect to the payment page
    window.location.href = '../html/paymentsub.html';
}

function adminhome() {
    window.location.href="studenthome.html"
}




//------------------search-------------------------
// JavaScript to handle the search functionality
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const category = document.getElementById('categorySelect').value.toLowerCase();
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    const books = document.querySelectorAll('.book'); // Get all book elements
    books.forEach(book => {
        const bookDetails = book.querySelector('.book-details');
        const bookName = bookDetails.querySelector('p:nth-child(2)').textContent.toLowerCase(); // Book Name
        const bookGenre = bookDetails.getAttribute('data-genre').toLowerCase(); // Book Genre

        // Check if the book matches the search criteria
        if ((category === 'all' || category === bookGenre) && bookName.includes(query)) {
            book.style.display = 'block'; // Show book if it matches
        } else {
            book.style.display = 'none'; // Hide book if it doesn't match
        }
    });
});


function activePlan() {
    window.location.href='../html/readinterface.html'
}