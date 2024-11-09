function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const isSidebarVisible = sidebar.style.left === '0px';
    sidebar.style.left = isSidebarVisible ? '-200px' : '0px';
}

// function toggleSidebar() {
//     const sidebar = document.getElementById('sidebar-toggle');
//     sidebar.classList.toggle('active');
// }

function logout() {
    alert('Logged out');
    window.location.href = "http://localhost:5501/home.html";
}