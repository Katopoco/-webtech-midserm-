// Change background color of event title on hover
const eventTitle = document.getElementById('eventTitle');
if (eventTitle) {
    eventTitle.addEventListener('mouseover', function() {
        this.style.color = '#3498db';
    });

    eventTitle.addEventListener('mouseout', function() {
        this.style.color = '#fff';
    });
}

// Form validation and submission
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const ticketType = document.getElementById('roleType').value;

        if (name && email && phone && ticketType) {
            alert('Registration successful! Thank you for joining the ACITIZEN FAMILY!.');
            registrationForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}