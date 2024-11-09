document.getElementById('genre').addEventListener('change', function() {
    const rentDropdown = document.getElementById('rent');
    const genre = this.value;

    rentDropdown.innerHTML = '<option value="" disabled selected>Rent of the book</option>';

    const rentPrices = {
        fiction: ["Rs.100", "Rs.150", "Rs.200"],
        nonfiction: ["Rs.150", "Rs.300", "Rs.700"],
        biography: ["Rs.400", "Rs.550", "Rs.250"],
        studyrelated: ["Rs.700", "Rs.90", "Rs.100"],
        researchpapers: ["Rs.480", "Rs.900", "Rs.1000"]
    };

    if (rentPrices[genre]) {
        rentPrices[genre].forEach(price => {
            const option = document.createElement('option');
            option.value = price;
            option.textContent = price;
            rentDropdown.appendChild(option);
        });
    }
});

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookId = document.getElementById('bookId').value;
    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const rent = document.getElementById('rent').value;
    const status = document.getElementById('status').value;

    const book = {
        bookId,
        bookName,
        author,
        genre,
        rent,
        status
    };

    let books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    window.location.href = 'booklist.html';
});

function adminhome() {
    window.location.href="adminhomepage.html"
}