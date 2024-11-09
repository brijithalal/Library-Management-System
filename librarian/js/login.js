document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var correctUsername = 'admin';
    var correctPassword = 'admin123';
    
    if (username === correctUsername && password === correctPassword) {
        window.location.href = '../html/adminhomepage.html';
    } else {
        alert('Invalid username or password');
    }
});
