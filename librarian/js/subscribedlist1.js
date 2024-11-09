document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userTableBody = document.getElementById('userTableBody');

    users.forEach(user => {
        const row = document.createElement('tr');
        
        // Create table cells for user details
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = user.firstName;
        row.appendChild(firstNameCell);

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = user.lastName;
        row.appendChild(lastNameCell);

        const mobileCell = document.createElement('td');
        mobileCell.textContent = user.mobile;
        row.appendChild(mobileCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        // const subscriptionPlanCell = document.createElement('td');
        // subscriptionPlanCell.textContent = user.subscriptionPlan || '-'; // Display '-' if no subscription
        // row.appendChild(subscriptionPlanCell);

        // const statusCell = document.createElement('td');
        // const statusSpan = document.createElement('span');
        // statusSpan.className = user.isSubscribed ? 'status active' : 'status inactive';
        // statusSpan.textContent = user.isSubscribed ? 'Active' : 'Inactive';
        // statusCell.appendChild(statusSpan);
        // row.appendChild(statusCell);

        // Append the row to the table body
        userTableBody.appendChild(row);
    });
});


function adminhome() {
    window.location.href="adminhomepage.html"
}
