// Projects page functionality

document.addEventListener('DOMContentLoaded', function () {
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the filter value from the data attribute
            const filterValue = this.getAttribute('data-filter');

            // Remove active class from all buttons and add to clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter the project cards based on the selected category
            projectCards.forEach(card => {
                // Get the category from the data attribute
                const cardCategory = card.getAttribute('data-category');

                // Show or hide the card based on the filter value
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Function to animate project cards when they come into view
    function animateProjectCards() {
        projectCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardPosition < windowHeight - 50) {
                // Add a slight delay for each card to create a staggered effect
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 100);
            }
        });
    }

    // Initial animation on page load
    animateProjectCards();

    // Add scroll event listener to animate as user scrolls
    window.addEventListener('scroll', animateProjectCards);

    // Add hover effect to project cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('hovered');
        });
    });

    // Project image placeholders - set random background colors
    const projectImages = document.querySelectorAll('.project-img');
    const colors = [
        'linear-gradient(135deg, #8A7F8D, #5E4974)',
        'linear-gradient(135deg, #5E4974, #3D2952)',
        'linear-gradient(135deg, #7F7FD5, #86A8E7)',
        'linear-gradient(135deg, #4B6CB7, #182848)',
        'linear-gradient(135deg, #AA076B, #61045F)'
    ];

    projectImages.forEach(image => {
        // Only set background if it doesn't already have one
        if (!image.style.background || image.style.background === '') {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            image.style.background = randomColor;
        }
    });

    // Progress indicators for upcoming projects
    const progressCircles = document.querySelectorAll('.progress-circle');

    // Add pulse animation to active progress circles
    progressCircles.forEach(circle => {
        if (circle.classList.contains('active')) {
            circle.style.animation = 'pulse 2s infinite';
        }
    });
});