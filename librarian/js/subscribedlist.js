document.getElementById('subscribedBtn').addEventListener('click', function() {
    filterStatus('Active');
});

document.getElementById('unsubscribedBtn').addEventListener('click', function() {
    filterStatus('Inactive');
});

function filterStatus(status) {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const statusText = row.querySelector('.status').textContent;
        if (statusText === status) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}


function adminhome() {
    window.location.href="adminhomepage.html"
}
