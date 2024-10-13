
document.addEventListener('DOMContentLoaded', function() {
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    }

    // Intersection Observer for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe the skills section
    const skillsSection = document.querySelector('.skills-section');
    observer.observe(skillsSection);
});
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Load More functionality
    const projectsPerPage = 6;
    let currentlyShown = projectsPerPage;
    
    function updateProjectVisibility() {
        projectItems.forEach((item, index) => {
            if (index < currentlyShown) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        if (currentlyShown >= projectItems.length) {
            document.getElementById('loadMoreBtn').style.display = 'none';
        }
    }

    document.getElementById('loadMoreBtn').addEventListener('click', function() {
        currentlyShown += projectsPerPage;
        updateProjectVisibility();
    });

    // Initial setup
    updateProjectVisibility();
});
