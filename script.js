// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    const servicesSlider = document.querySelector('.services-slider');
    const slides = document.querySelectorAll('.services-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.slide-indicator');
    let currentSlide = 0;

    function showSlide(index) {
        // Fixed: Changed to 100% for proper slide transitions since each slide is 100% width
        if (servicesSlider) {
            servicesSlider.style.transform = `translateX(${-index * 100}%)`;
        }
        
        // Update indicators if they exist
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    // Set initial active state
    if (slides.length > 0) {
        showSlide(currentSlide);
    }

    // Previous and next buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    }

    // Slide indicators
    indicators.forEach((indicator, index) => {
        indicator.dataset.index = index;
        indicator.addEventListener('click', function() {
            currentSlide = parseInt(this.dataset.index);
            showSlide(currentSlide);
        });
    });

    // Auto advance slides (only if there are multiple slides)
    if (slides.length > 1) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values with error checking
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');
            
            if (!nameField || !emailField || !messageField) {
                console.error('Form fields not found');
                return;
            }
            
            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const message = messageField.value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show success notification
            showNotification(`Thank you, ${name}! Your message has been sent.`, 'success');
            
            // Clear the form
            contactForm.reset();
        });
    }
    
    // Enhanced notification function
    function showNotification(message, type = 'success') {
        // Remove any existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            document.body.removeChild(existingNotification);
        }
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.left = '20px';
        notification.style.right = '20px';
        notification.style.maxWidth = '500px';
        notification.style.margin = '0 auto';
        notification.style.backgroundColor = type === 'success' ? '#d4af37' : '#dc3545';
        notification.style.color = type === 'success' ? '#000' : '#fff';
        notification.style.padding = '15px 25px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        notification.style.zIndex = '1000';
        notification.style.fontWeight = 'bold'; // Fixed: was 'penWeight' in original
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        notification.style.transform = 'translateY(-20px)';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        // Remove the notification after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 500);
        }, 5000);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav ul');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = nav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Add keyboard navigation for slider
    document.addEventListener('keydown', function(e) {
        if (slides.length > 1) {
            if (e.key === 'ArrowLeft') {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            } else if (e.key === 'ArrowRight') {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }
        }
    });
});