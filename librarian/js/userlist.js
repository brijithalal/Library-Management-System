// const overdueBooks = [
//     {
//         firstName: "Sahaya",
//         lastName: "Misba",
//         email: "s.misba@gmail.com",
//         mobile: "9876543210",
//         startDate: "2024-07-01",
//         endDate: "2024-08-01"
//     },
//     {
//         firstName: "Aldrin",
//         lastName: "Lawrance",
//         email: "aldrin123@gmail.com",
//         mobile: "8754203654",
//         startDate: "2024-08-09",
//         endDate: "2024-09-15"
//     },
//     {
//         firstName: "Anusha",
//         lastName: "Anub",
//         email: "anushaean@gmail.com",
//         mobile: "6789045673",
//         startDate: "2024-06-15",
//         endDate: "2024-07-15"
//     },
//     {
//         firstName: "Sona",
//         lastName: "Saji",
//         email: "ssona@gmail.com",
//         mobile: "8078656798",
//         startDate: "2024-07-20",
//         endDate: "2024-08-10"
//     }
// ];

function getStatus(endDate) {
    const currentDate = new Date();
    const end = new Date(endDate);
    return currentDate <= end ? "Active" : "Expired";
}

function renderTable() {
    const tableBody = document.getElementById('booksTable');
    overdueBooks.forEach(book => {
        const status = getStatus(book.endDate);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.firstName}</td>
            <td>${book.lastName}</td>
            <td>${book.email}</td>
            <td>${book.mobile}</td>
            <td>${book.startDate}</td>
            <td>${book.endDate}</td>
            <td class="${status === 'Active' ? 'status-active' : 'status-expired'}">${status}</td>
        `;
        tableBody.appendChild(row);
    });
}

renderTable();

function adminhome() {
    window.location.href = '../html/adminhomepage.html'
}