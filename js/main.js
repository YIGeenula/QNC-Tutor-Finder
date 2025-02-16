// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--primary-color)';
    }
});

// Form validation for search
document.querySelector('.search-box form').addEventListener('submit', function(e) {
    e.preventDefault();
    const subject = this.querySelector('input[type="text"]').value;
    const grade = this.querySelector('select').value;
    
    if (!subject || grade === 'Select Grade') {
        alert('Please fill in both subject and grade');
        return;
    }
    
    // TODO: Implement search functionality when backend is ready
    console.log('Searching for:', { subject, grade });
});
