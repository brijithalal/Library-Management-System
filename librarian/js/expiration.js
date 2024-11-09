const overdueBooks = [
    {
        firstName: "Sarayu",
        lastName: "Sam",
        email: "sarayu@example.com",
        mobile: "8832456187",
        startDate: "2024-07-01",
        endDate: "2024-08-01"
    },
    {
        firstName: "John",
        lastName: "Wick",
        email: "wick.john@gmail.com",
        mobile: "9966435367",
        startDate: "2024-10-20",
        endDate: "2024-11-21"
    },
    {
        firstName: "Adlin",
        lastName: "George",
        email: "adlin@gmail.com",
        mobile: "8754203654",
        startDate: "2024-09-01",
        endDate: "2024-10-16"
    },
    {
        firstName: "Paul",
        lastName: "Walker",
        email: "paul.walker@gmail.com",
        mobile: "7712353567",
        startDate: "2024-10-15",
        endDate: "2024-12-15"
    },
    {
        firstName: "Ryan ",
        lastName: "Renolds",
        email: "ryan@gmail.com",
        mobile: "9912435667",
        startDate: "2024-07-20",
        endDate: "2024-11-20"
    },
    {
        firstName: "Tom",
        lastName: "Cruise",
        email: "tom.cruise@gmail.com",
        mobile: "8822312567",
        startDate: "2024-07-20",
        endDate: "2024-08-20"
    }
   
];

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
    window.location.href="adminhomepage.html"
}
