       // Sample data for books with image sources and captions
       let books = {
        avatar: [
            {
                image: "/read/images/1.png",
                caption: "Avatar : The Last Air Bender"
            },
            {
                image: "/read/images/2.png",
                caption: "Avatar : The Last Air Bender"
            },
            {
                image: "/read/images/3.png",
                caption: "Avatar : The Last Air Bender"
            },
            {
                image: "/read/images/4.png",
                caption: "Avatar : The Last Air Bender"
            },
            {
                image: "/read/images/5.png",
                caption: "Avatar : The Last Air Bender"
            },
            {
                image: "/read/images/6.png",
                caption: "Avatar : The Last Air Bender"
            },
            {
                image: "/read/images/7.png",
                caption: "Avatar : The Last Air Bender"
            },
            {
                image: "/read/images/8.png",
                caption: "Avatar : The Last Air Bender"
            },
            {
                image: "/read/images/9.png",
                caption: "Avatar : The Last Air Bender"
            },
            {
                image: "/read/images/10.png",
                caption: "Avatar : The Last Air Bender"
            }
        ],
        AtomicHabits: [
            {
                image: "/read/images/A1.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A2.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A3.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A4.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A5.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A6.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A7.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A8.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A9.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A10.png",
                caption: "Atomic Habits"
            },
            {
                image: "/read/images/A11.png",
                caption: "Atomic Habits"
            },
        ],
        theSilentPatient: [
            {
                image: "/read/silent/1.png",
                caption: "The Silent Patient"
            },
            {
                image: "/read/silent/2.png",
                caption: "The Silent Patient"
            },
            {
                image: "/read/silent/3.png",
                 caption: "The Silent Patient"
            },
            {
                image: "/read/silent/4.png",
                 caption: "The Silent Patient"
            },
            {
                image: "/read/silent/5.png",
                 caption: "The Silent Patient"
            },
            {
                image: "/read/silent/6.png",
                 caption: "The Silent Patient"
            },
            {
                image: "/read/silent/7.png",
                 caption: "The Silent Patient"
            },
            {
                image: "/read/silent/8.png",
                 caption: "The Silent Patient"
            },
            {
                image: "/read/silent/9.png",
                 caption: "The Silent Patient"
            },
            {
                image: "/read/silent/10.png",
                 caption: "The Silent Patient"
            },
            {
                image: "/read/silent/11.png",
                 caption: "The Silent Patient"
            },
        ],
        // fourthBook: [
        //     {
        //         image: "images/educated_page1.jpg",
        //         caption: "Educated - Page 1: A memoir about a woman's quest for knowledge."
        //     },
        //     {
        //         image: "images/educated_page2.jpg",
        //         caption: "Educated - Page 2: The importance of education in overcoming adversity."
        //     },
        //     {
        //         image: "images/educated_page3.jpg",
        //         caption: "Educated - Page 3: The power of self-discovery through learning."
        //     }
        // ]
    };
    
    let currentBook = null; // The currently selected book
    let currentPageIndex = 0; // Index of the current page
    
    // Load the selected book
    function loadBook() {
        const bookSelect = document.getElementById('bookSelect');
        currentBook = bookSelect.value; // Get the selected book
        currentPageIndex = 0; // Reset to the first page
        displayPage(currentPageIndex); // Display the first page of the selected book
    }
    
    // Display the page based on the current page index
    function displayPage(pageIndex) {
        if (currentBook && pageIndex >= 0 && pageIndex < books[currentBook].length) {
            // Set the image source
            document.getElementById('bookImage').src = books[currentBook][pageIndex].image;
    
            // Handle loading errors with a placeholder
            document.getElementById('bookImage').onerror = function() {
                this.src = 'images/placeholder.jpg'; // Path to your placeholder image
            };
    
            // Set the caption for the current page
            document.getElementById('bookPageDisplay').textContent = books[currentBook][pageIndex].caption;
    
            // Update the book title
            document.getElementById('bookTitleDisplay').textContent = currentBook.charAt(0).toUpperCase() + currentBook.slice(1).replace(/([A-Z])/g, ' $1');
        }
    }
    
    // Function for the Previous Page button
    function prevPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            displayPage(currentPageIndex);
        } else {
            alert("You are on the first page.");
        }
    }
    
    // Function for the Next Page button
    function nextPage() {
        if (currentPageIndex < books[currentBook].length - 1) {
            currentPageIndex++;
            displayPage(currentPageIndex);
        } else {
            alert("You are on the last page. Sign Up for further reading");
            window.location.href="../home.html"
        }
    }
    
    // Display the first page on load
    window.onload = () => {
        const bookSelect = document.getElementById('bookSelect');
        if (bookSelect.value) {
            loadBook();
        }
    };

    function home() {
        window.location.href="../home.html"
    }