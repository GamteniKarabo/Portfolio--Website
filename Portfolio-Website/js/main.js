// Main JavaScript file

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');

            // Transform hamburger to X
            const bars = menuToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (navLinks && navLinks.classList.contains('active') &&
            !event.target.closest('#navLinks') &&
            !event.target.closest('#menuToggle')) {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');

            // Transform X back to hamburger
            const bars = menuToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('active'));
        }
    });

    // Activate current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });

    // Animate elements when they come into view
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0, 0)';
            }
        });

        // Specifically for timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');

        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 50) {
                item.classList.add('visible');
            }
        });
    };

    // Run once on page load
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Add class to hamburger menu on click
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            this.classList.toggle('active');

            const bars = this.querySelectorAll('.bar');
            if (this.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
});

// Preload images for smoother transitions
function preloadImages() {
    const imageSources = [
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
        'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg',
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'
    ];

    imageSources.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload function
preloadImages();