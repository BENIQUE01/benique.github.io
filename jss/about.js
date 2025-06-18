// About Page JavaScript - about.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all about page functionality
    initProgressBars();
    initImageOverlay();
    initScrollAnimations();
    initSkillHovers();
});

// Progress Bars Animation
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            const rect = bar.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView && !bar.classList.contains('animated')) {
                bar.style.width = progress + '%';
                bar.classList.add('animated');
                
                // Add a number counter animation
                const skillItem = bar.closest('.skill-item');
                const counter = document.createElement('span');
                counter.className = 'progress-counter';
                counter.textContent = '0%';
                skillItem.appendChild(counter);
                
                animateCounter(counter, 0, parseInt(progress), 1500);
            }
        });
    };
    
    // Initial check
    animateProgressBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateProgressBars);
}

// Counter Animation Helper
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const startTime = Date.now();
    
    const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3); // Ease out animation
        const current = Math.round(start + (range * easeOut));
        
        element.textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    };
    
    requestAnimationFrame(updateCounter);
}

// Image Overlay Effect
function initImageOverlay() {
    const imageWrapper = document.querySelector('.about-image-wrapper');
    const overlay = document.querySelector('.image-overlay');
    
    if (imageWrapper && overlay) {
        imageWrapper.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
        });
        
        imageWrapper.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
        });
        
        // Optional: Add click functionality for video modal
        overlay.addEventListener('click', () => {
            // You can add video modal functionality here
            console.log('Video modal would open here');
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.skill-item, .value-card, .client-type, .about-content-section'
    );
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Skill Items Hover Effects
function initSkillHovers() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hovered');
            
            // Add subtle animation to the icon
            const icon = item.querySelector('.skill-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hovered');
            
            // Reset icon animation
            const icon = item.querySelector('.skill-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Value Cards Interactive Effect
function initValueCards() {
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            valueCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            card.classList.add('active');
            
            // Optional: Add more detailed content or modal
        });
    });
}

// Smooth Scrolling for CTA Buttons
function initSmoothScrolling() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = button.getAttribute('href');
            
            // If it's an anchor link, smooth scroll
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Parallax Effect for Hero Section
function initParallaxEffect() {
    const hero = document.querySelector('.about-hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initValueCards();
    initSmoothScrolling();
    initParallaxEffect();
});

// Utility function for adding staggered animations
function staggerAnimation(elements, delay = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate-in');
        }, index * delay);
    });
}

// Export functions if needed for other scripts
window.aboutPageUtils = {
    animateCounter,
    staggerAnimation
};