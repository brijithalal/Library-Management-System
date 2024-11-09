document.addEventListener('DOMContentLoaded', function() {
    const booksTable = document.getElementById('booksTable');
    const books = JSON.parse(localStorage.getItem('books')) || [];

    books.forEach(function(book) {
        const row = document.createElement('tr');
        
        const statusClass = book.status.toLowerCase() === 'available' ? 'status-available' : 'status-unavailable';
        
        row.innerHTML = `
            <td>${book.bookId}</td>
            <td>${book.bookName}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.rent}</td>
            <td class="${statusClass}">${book.status}</td>
            <td>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </td>
        `;

        booksTable.appendChild(row);
    });

    document.querySelectorAll('.edit-button').forEach(function(button) {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const cells = row.querySelectorAll('td');
            const bookId = cells[0].textContent;
            const name = cells[1].textContent;
            const author = cells[2].textContent;
            const genre = cells[3].textContent;
            const rentRate = cells[4].textContent;
            const status = cells[5].textContent;

            alert(`Edit the fields for Book ID: ${bookId}`);

            const newName = prompt("Edit book name:", name);
            if (newName !== null) cells[1].textContent = newName;

            const newAuthor = prompt("Edit author:", author);
            if (newAuthor !== null) cells[2].textContent = newAuthor;

            const newGenre = prompt("Edit genre:", genre);
            if (newGenre !== null) cells[3].textContent = newGenre;

            const newRentRate = prompt("Edit rent rate:", rentRate);
            if (newRentRate !== null) cells[4].textContent = newRentRate;

            const newStatus = prompt("Edit status:", status);
            if (newStatus !== null) cells[5].textContent = newStatus;

            const bookIndex = books.findIndex(b => b.bookId === bookId);
            books[bookIndex] = {
                bookId,
                bookName: newName || name,
                author: newAuthor || author,
                genre: newGenre || genre,
                rent: newRentRate || rentRate,
                status: newStatus || status
            };
            localStorage.setItem('books', JSON.stringify(books));
        });
    });

    document.querySelectorAll('.delete-button').forEach(function(button) {
        button.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this book?')) {
                const row = this.closest('tr');
                const bookId = row.querySelector('td').textContent;

                const updatedBooks = books.filter(book => book.bookId !== bookId);
                localStorage.setItem('books', JSON.stringify(updatedBooks));

                row.remove();
            }
        });
    });
});


function adminhome() {
    window.location.href="adminhomepage.html"
}