// Skills Animation

document.addEventListener('DOMContentLoaded', function () {
    // Get all skill progress bars
    const skillBars = document.querySelectorAll('.skill-progress');

    // Function to animate skill bars when they come into view
    function animateSkillBars() {
        skillBars.forEach(bar => {
            // Get the parent skill item
            const skillItem = bar.closest('.skill-item');

            // Get the percentage value from the skill info
            const percentText = skillItem.querySelector('.skill-info span:nth-child(2)').textContent;
            const percent = parseFloat(percentText);

            // Calculate if the skill bar is in the viewport
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (barPosition < windowHeight - 50) {
                // Set the width based on the percentage
                bar.style.setProperty('--percent', percent + '%');
                bar.style.width = percent + '%';
            }
        });
    }

    // Run once on page load
    animateSkillBars();

    // Add scroll event listener to animate as user scrolls
    window.addEventListener('scroll', animateSkillBars);

    // Animation classes for HTML, CSS, etc.
    const skillClasses = {
        html: { color: '#E44D26', width: '95%' },
        css: { color: '#264DE4', width: '90%' },
        js: { color: '#F0DB4F', width: '85%' },
        responsive: { color: '#6A4C93', width: '88%' },
        node: { color: '#539E43', width: '75%' },
        express: { color: '#828282', width: '70%' },
        rest: { color: '#FF5722', width: '80%' },
        sql: { color: '#00758F', width: '65%' },
        mongo: { color: '#13AA52', width: '60%' },
        git: { color: '#F05032', width: '85%' },
        vscode: { color: '#0078D7', width: '90%' },
        problem: { color: '#FC8621', width: '88%' }
    };

    // Apply the specific skill colors and widths
    Object.entries(skillClasses).forEach(([className, values]) => {
        const elements = document.querySelectorAll(`.skill-progress.${className}`);
        elements.forEach(el => {
            el.style.background = `linear-gradient(to right, ${values.color}, ${lightenColor(values.color, 20)})`;
            setTimeout(() => {
                el.style.width = values.width;
            }, 500);
        });
    });

    // Helper function to lighten a color
    function lightenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            G = (num >> 8 & 0x00FF) + amt,
            B = (num & 0x0000FF) + amt;

        return '#' + (
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        ).toString(16).slice(1);
    }
});