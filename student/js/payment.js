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


// function redirectToHome(){
//     if(actionType === 'purchase'){
//         window.location.href = '../html/studenthome.html';

//     }else{
//         window.location.href = '../html/readinterface.html';

//     }
// }



function redirectToHome() {
    // Retrieve actionType from localStorage
    const actionType = localStorage.getItem('actionType');

    // Check if actionType is correctly retrieved
    if (!actionType) {
        console.error("actionType is not defined or not found in localStorage.");
        return; // Stop the function if actionType is undefined
    }

    if (actionType === 'purchase') {
        window.location.href = '../html/studenthome.html';
    } else {
        window.location.href = '../html/readinterface.html';
    }
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
        
        const paymentMethod = document.getElementById("payment-method").innerText;
        
         // Store the rented or purchased book
        let rentedBooks = JSON.parse(localStorage.getItem('rentedBooks')) || [];
        [];
        let purchasedBooks = JSON.parse(localStorage.getItem('purchasedBooks')) || [];
        if (actionType === 'rent' || actionType === 'purchase') {
            // Store book details as an object
            rentedBooks.push({ id: bookId, name: bookName });
            localStorage.setItem('rentedBooks', JSON.stringify(rentedBooks));
        } else if (actionType === 'purchase') {
            purchasedBooks.push({ id: bookId, name: bookName });
            localStorage.setItem('purchasedBooks', JSON.stringify(purchasedBooks));
        


            // rentedBooks.push({ id: bookId, name: bookName }); 
            // localStorage.setItem('rentedBooks', JSON.stringify(rentedBooks));
        }

        let billDetails;
        if (actionType === 'rent') {
            billDetails = `Welcome To Library\n\n\nRent Bill\n--------------------------------------\n\nPayment Method : ${paymentMethod}\n\nBook ID: ${bookId}\n\nBook Name: ${bookName}\n\nRent Rate: Rs ${rentRate}`;
        } else if (actionType === 'purchase') {
            billDetails = `Your Ordering Details\n\n\nPurchase Bill\n--------------------------------------\n\nPayment Method : ${paymentMethod}\n\nBook ID: ${bookId}\n\nBook Name: ${bookName}\n\nOriginal Price: Rs ${originalPrice}`;
        }

        
        // Generate the PDF using jsPDF
        // const { jsPDF } = window.jspdf;
        // const doc = new jsPDF();

        // // Add the bill details to the PDF
        // doc.text(billDetails, 10, 10);

        //  // Save the generated PDF with a filename
        //  doc.save('bill-details.pdf');

        //  window.location.href = '../html/readinterface.html';



        showAlert(billDetails)
        // alert('Your Payment is Successful.\n\n' + billDetails);
        // window.location.href = '../html/studenthome.html'; 
    } else {
        form.reportValidity(); 
    }
    
}