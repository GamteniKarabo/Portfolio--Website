// Progress Bar functionality

// Function to update the progress bar width based on scroll position
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');

    if (progressBar) {
        // Calculate how far down the page the user has scrolled
        const scrollPosition = window.scrollY;

        // Calculate the scroll height (total scrollable area)
        const totalHeight = document.body.scrollHeight - window.innerHeight;

        // Calculate the scroll percentage
        const scrollPercentage = (scrollPosition / totalHeight) * 100;

        // Update the progress bar width
        progressBar.style.width = scrollPercentage + '%';
    }
}

// Add event listener for scroll
window.addEventListener('scroll', updateProgressBar);

// Initialize progress bar on page load
document.addEventListener('DOMContentLoaded', updateProgressBar);

// Update progress bar on window resize (in case the total height changes)
window.addEventListener('resize', updateProgressBar);