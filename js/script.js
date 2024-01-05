document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const clientForm = document.getElementById('client-form');

    // Show popup when the page is loaded
    popup.style.display = 'block';

    // Close popup when the close button is clicked
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Handle form submission
    clientForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user input
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // You can handle this data as needed (e.g., send it to a backend server)

        // Close the popup
        popup.style.display = 'none';
    });
});
