function processOrder() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const landmark = document.getElementById("landmark").value;
    const phone = document.getElementById("phone").value;

    if (name && address && landmark && phone) {
        // Assuming all details are validated and present
        alert("Redirecting to payment page");
        window.location.href = "../html/payment.html"; // Replace with actual payment page URL
    } else {
        alert("Please fill in all the details.");
    }
}