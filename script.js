// Form validation for Contact Form
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;
    let errorMessage = '';

    // Check if Name field is empty
    if (name.trim() === '') {
        valid = false;
        errorMessage += 'Name cannot be empty.\n';
    }

    // Check if Email field is empty or invalid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '' || !emailPattern.test(email)) {
        valid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Check if Message field is empty
    if (message.trim() === '') {
        valid = false;
        errorMessage += 'Message cannot be empty.\n';
    }

    // If validation fails, show error message and prevent form submission
    if (!valid) {
        event.preventDefault();
        alert(errorMessage);
    } else {
        alert('Your message has been sent successfully!');
    }
});

// Smooth Scroll for Internal Links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Display a Thank You Message after submission (if using form handling)
if (window.location.search.includes('success=true')) {
    alert('Thank you for reaching out! We will get back to you soon.');
}
