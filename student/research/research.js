function showSection(section) {
    document.querySelectorAll('main section').forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
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


//==============================================================================


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
// while clicking the subscribe button

function subscribe(planType) {
    // Store the user's subscription type in local storage
    localStorage.setItem('subscription', planType);
    alert(`Subscribed to ${planType} plan successfully!`);
    console.log(planType)
    window.location.href = './html/studenthome.html';
}

function adminhome(){
    window.location.href = "../html/studenthome.html"
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