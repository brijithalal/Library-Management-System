// Function to handle upgrading the subscription
document.querySelector('.purchaseBookButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    const currentPlan = document.getElementById('current-plan');
    const newPlan = document.getElementById('new-plan');

    const currentPlanValue = currentPlan.value;
    const newPlanValue = newPlan.value;

    const currentPrice = parseInt(currentPlan.selectedOptions[0].getAttribute('data-price'));
    const newPrice = parseInt(newPlan.selectedOptions[0].getAttribute('data-price'));

    // Check if the new plan is the same as the current plan
    if (currentPlanValue === newPlanValue) {
        alert("You are already on this plan.");
        return; // Stop the function here
    }

    // Check if the new plan is a downgrade
    if (newPrice < currentPrice) {
        alert("Downgrading to a lower plan is not allowed.");
        return; // Stop the function here
    }

    // If it's an upgrade, proceed with storing the new plan and redirect to payment page
    if (newPrice > currentPrice) {
        localStorage.setItem('subscription', newPlanValue); // Store the new plan in localStorage
        
        // Redirect to the payment page
        window.location.href = '../html/paymentsub.html';
    }
});

// Display current subscription status
const subscriptionStatusElement = document.getElementById('subscription-status');
const subscription = localStorage.getItem('subscription');

if (subscription) {
    subscriptionStatusElement.textContent = `Active Subscription: ${subscription} plan`;
    subscriptionStatusElement.style.color = "green";
} else {
    subscriptionStatusElement.textContent = "No active subscription. Please select a subscription plan.";
    subscriptionStatusElement.style.color = "red";
}

// Upgrade fee calculation
function calculateUpgrade() {
    const currentPlan = document.getElementById('current-plan');
    const newPlan = document.getElementById('new-plan');

    const currentPrice = parseInt(currentPlan.selectedOptions[0].getAttribute('data-price'));
    const newPrice = parseInt(newPlan.selectedOptions[0].getAttribute('data-price'));

    // Calculate upgrade fee
    let upgradeFee = newPrice - currentPrice;

    if (upgradeFee > 0) {
        document.getElementById('upgrade-fee').textContent = `Upgrade Fee: Rs ${upgradeFee}`;
    } else if (upgradeFee === 0) {
        document.getElementById('upgrade-fee').textContent = "You're already on this plan.";
    } else {
        document.getElementById('upgrade-fee').textContent = "Cannot downgrade to a lower plan.";
    }
}

// Function to handle renting or purchasing books
function handleBookAction(actionType, button) {
    const subscription = localStorage.getItem('subscription');
    const bookDetails = button.closest('.book-details');
    const genre = bookDetails.getAttribute('data-genre');

    // Define which genres are accessible for each plan
    const genreAccess = {
        'Silver': ['Fiction'],
        'Gold': ['Fiction', 'Non-Fiction', 'Biography'],
        'Platinum': ['Fiction', 'Non-Fiction', 'Biography', 'Studies', 'Research']
    };

    // Check if the user has an active subscription
    if (!subscription) {
        alert('No active subscription found. Please subscribe to access this content.');
        window.location.href = '../html/subscription.html'; 
        return; // Stop the function here
    }

    // Get accessible genres for the current subscription
    const accessibleGenres = genreAccess[subscription] || [];

    // Check if the user has access to the requested genre
    if (!subscription || !accessibleGenres.includes(genre)) {
        // Redirect based on the genre requested
        if (genre === 'Non-Fiction' && subscription === 'Silver') {
            alert('You need to upgrade to Gold to access Non-Fiction books.');
            window.location.href = '../html/subscription.html'; // Redirect to upgrade page for Gold
        } else if (genre === 'Biography' && subscription === 'Gold') {
            alert('You need to upgrade to Platinum to access Biography books.');
            window.location.href = '../html/subscription.html'; // Redirect to upgrade page for Platinum
        } else if (genre === 'Studies' && subscription === 'Platinum') {
            alert('You need to upgrade to Platinum to access Studies books.');
            window.location.href = '../html/subscription.html'; // Redirect to upgrade page for Platinum
        } else {
            alert(`You need to subscribe to a higher plan to access ${genre} books.`);
        }
        return; // Stop the function here
    } 

    // Proceed to the payment page if the genre is allowed
    const bookId = bookDetails.querySelector('p:nth-child(1)').innerText.split(": ")[1];
    const bookName = bookDetails.querySelector('p:nth-child(2)').innerText.split(": ")[1];

    // Store the action type and book details
    localStorage.setItem('actionType', actionType);
    localStorage.setItem('bookId', bookId);
    localStorage.setItem('bookName', bookName);

    // Redirect to the payment page
    window.location.href = '../html/paymentsub.html'; // Update with the actual path
}

// Event listener for renting and purchasing books
document.querySelectorAll('.rentBookButton, .purchaseBookButton').forEach(button => {
    button.addEventListener('click', function() {
        const actionType = button.classList.contains('rentBookButton') ? 'rent' : 'purchase';
        handleBookAction(actionType, button);
    });
});

// Function to upgrade subscription
function upgradeSubscription(newPlanType) {
    // Store the user's new subscription type in local storage
    localStorage.setItem('subscription', newPlanType);
    alert(`Upgraded to ${newPlanType} plan successfully!`);
    
    // Redirect to the student home page
    window.location.href = './html/studenthome.html'; 
}

// Event listeners for subscription upgrade buttons
document.getElementById('silver-plan').addEventListener('click', function() {
    upgradeSubscription('Silver');
});

document.getElementById('gold-plan').addEventListener('click', function() {
    upgradeSubscription('Gold');
});

document.getElementById('platinum-plan').addEventListener('click', function() {
    upgradeSubscription('Platinum');
});
