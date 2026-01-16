// Simple interactive functionality for the GitHub Pages sample

document.addEventListener('DOMContentLoaded', function() {
    // CTA Button interaction
    const ctaButton = document.getElementById('ctaButton');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Welcome to GitHub Pages! 🎉\n\nThis is a sample project to help you get started with hosting your own static website on GitHub Pages.');
        });
    }

    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Log page load
    console.log('GitHub Pages Sample Project loaded successfully!');
});
