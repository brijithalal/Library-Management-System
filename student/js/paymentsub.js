function openPopup(method) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("payment-method").innerText = method;
    
    const paymentDetails = document.getElementById("payment-details");
    paymentDetails.innerHTML = '';

    if (method === 'Google Pay') {
        paymentDetails.innerHTML = '<label for="googlepay-id">Google Pay ID:</label><input type="text" id="googlepay-id" placeholder="example@axisbank" name="googlepay-id" required>';
    } else if (method === 'Credit Card') {
        paymentDetails.innerHTML = `
            <label for="cc-number">Card Number:</label><input type="text" id="cc-number" pattern="^[0-9]{12}$" placeholder="12 digits" name="cc-number" required>
            <label for="cc-expiry">Expiry Date:</label><input type="text" id="cc-expiry" pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$" placeholder="MM/YY" name="cc-expiry" required>
            <label for="cc-cvc">CVC:</label><input type="text" id="cc-cvv" placeholder="only 3 digits" name="cc-cvv" required>
        `;
    } else if (method === 'Bank Transfer') {
        paymentDetails.innerHTML = `
            <label for="bank-account">Bank Account Number:</label><input type="text" id="bank-account" pattern="^[0-9]{10}+$" placeholder="10 digits" name="bank-account" required>
            <label for="bank-routing">Routing Number:</label><input type="text" id="bank-routing" pattern="^[A-Za-z]{4}[0-9]{4}+$" placeholder="abcd1234" name="bank-routing" required>
        `;
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// function closeAlert() {
//     document.getElementById('customAlert').style.display = 'none';
// }

function redirectToHome(){
    window.location.href = '../html/studenthome.html';
}

function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').style.display = 'block';
}


document.getElementById('payment-form').onsubmit = function(event) {
    event.preventDefault(); 
    const form = event.target;
    if (form.checkValidity()) {
        // Get stored information for billing
    
        const actionType = localStorage.getItem('actionType');
        const bookId = localStorage.getItem('bookId');
        const bookName = localStorage.getItem('bookName');
        const rentRate = 100; // Rent rate can be stored in localStorage or hard-coded
        const originalPrice = 350; // Original price can also be stored
        
        // const message = `Welcome to Library\n\nYour Payment for  is Successful.\n\nBook ID: ${bookId}\nBook Name: ${bookName}\nRent Rate: Rs ${rentRate}\nOriginal Price : Rs ${originalPrice}`;

        let billDetails;
        if (actionType === 'rent') {
            billDetails = `Rent Bill\nBook ID: ${bookId}\nBook Name: ${bookName}\nRent Rate: Rs ${rentRate}`;
            showAlert(billDetails)
            // message = `Rent Bill\nBook ID: ${bookId}\nBook Name: ${bookName}\nRent Rate: Rs ${rentRate}`;
        } else if (actionType === 'purchase') {
            billDetails = `Purchase Bill\nBook ID: ${bookId}\nBook Name: ${bookName}\nOriginal Price: Rs ${originalPrice}`;
            showAlert(billDetails)
            // message = `Purchase Bill\nBook ID: ${bookId}\nBook Name: ${bookName}\nOriginal Price: Rs ${originalPrice}`;
        }

        alert('Your Payment is Successful for subscription.\n\n');
        // showAlert(`Payment Successful!\n\n${billDetails}`);
        
         window.location.href = '../html/studenthome.html'; 

        // form.reset();
       
    } else {
        form.reportValidity(); 
    }
    
}

function resetForm() {
    document.getElementById('payment-form').reset(); // Reset the form fields
}


// function showAlert(message) {
//     // document.getElementById('alertMessage').innerText = message;
//     document.getElementById('alertMessage').style.display = 'block';
//     document.getElementById('customAlert').style.display = 'none';
// }