
// Calculate upgrade fee based on selected plans
function calculateUpgrade() {
    const currentPlan = document.getElementById('current-plan');
    const newPlan = document.getElementById('new-plan');

    const currentPrice = parseInt(currentPlan.selectedOptions[0].getAttribute('data-price'));
    const newPrice = parseInt(newPlan.selectedOptions[0].getAttribute('data-price'));

    // Check if upgrade is possible and calculate the fee
    let upgradeFee = 0;
    if (newPrice > currentPrice) {
        upgradeFee = newPrice - currentPrice;
        document.getElementById('upgrade-fee').textContent = `Upgrade Fee: Rs ${upgradeFee}`;
    } else if (newPrice === currentPrice) {
        document.getElementById('upgrade-fee').textContent = "You're already on this plan.";
    } else {
        document.getElementById('upgrade-fee').textContent = "Cannot downgrade to a lower plan.";
    }
}


// Function to handle payment redirect
// function handlePayment() {
//     const upgradeFeeText = document.getElementById('upgrade-fee').textContent;
//     const upgradeFeeMatch = upgradeFeeText.match(/Rs (\d+)/); // Extract the fee amount

//     if (upgradeFeeMatch) {
//         const upgradeFee = parseInt(upgradeFeeMatch[1]);
//         const newPlan = document.getElementById('new-plan');

//         //store the new subscription in local storage
//         localStorage.setItem('subscription',newPlan) //update subscription

//         if (upgradeFee > 0) {
//             localStorage.setItem('upgradeFee', upgradeFee); // Store the upgrade fee in local storage
//             window.location.href = '../html/paymentsub.html'; // Redirect to payment page
//         } 
//         // If there's no upgrade fee, just redirect to the payment page
//         window.location.href = '../html/paymentsub.html'; // Redirect to payment page
//     } 
// }

// Attach event listener for the payment button
// document.querySelector('.see-more').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default form submission
//     handlePayment();
// });

   //check for active subscription
//    const subscription = localStorage.getItem('subscription');
//    if (subscription) {
//        subscriptionStatusElement.textContent = `Active Subscription: ${subscription} plan`;
//        subscriptionStatusElement.style.color = "green";
//    } else {
//        subscriptionStatusElement.textContent = "No active subscription. Please select a subscription plan.";
//        subscriptionStatusElement.style.color = "red";
//    }
// ;

//To ensure that when a higher plan is selected, the user is redirected to the paymentsub.html page for payment,
// you can add a redirection step within the existing checks for valid plan upgrades.

document.querySelector('.purchaseBookButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const currentPlan = document.getElementById('current-plan');
    const newPlan = document.getElementById('new-plan').value; // Get the selected new plan
    
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

    if (newPrice > currentPrice) {
        localStorage.setItem('subscription', newPlanValue); // Store the new plan in localStorage
        alert(`You have upgraded your plan to ${newPlanValue}`);

        // Redirect to the payment page
        window.location.href = '../html/paymentsub.html';
    }
});


    // localStorage.setItem('subscription', newPlan); // Store the new plan in localStorage


    // alert(`You have upgraded your plan to ${newPlan}` )
    // Redirect to payment or student homepage (as needed)
//     window.location.href = '../html/studenthome.html'; // Redirect to student homepage for demonstration
// });



const subscriptionStatusElement = document.getElementById('subscription-status');
const subscription = localStorage.getItem('subscription');

if(subscription) {
    subscriptionStatusElement.textContent = `Active Subscription: ${subscription} plan`;
    subscriptionStatusElement.style.color = "green"
} else {
    subscriptionStatusElement.textContent= `No active subscription please select a subscription plan.`;
    subscriptionStatusElement.style.color = "red"
}


// Event listener for renting books
// document.querySelectorAll('.rentBookButton').forEach(button => {
//     button.addEventListener('click', function() {
//         const subscription = localStorage.getItem('subscription');
//         if (subscription) {
//             alert(`You are on the ${subscription} plan. Proceeding with renting.`);
//             // Proceed with the rent logic
//         } else {
//             alert('No active plan found. Please subscribe or upgrade your plan.');
//         }
//     });
// });