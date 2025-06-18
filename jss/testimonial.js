// Testimonials Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeSlider();
    initializeAnimations();
    initializeCounters();
    initializeVideoModal();
    initializeMobileMenu();
});

// Testimonials Slider Functionality
function initializeSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and activate dot
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-play slider
    setInterval(nextSlide, 5000);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}

// Scroll Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect for grid items
                if (entry.target.classList.contains('testimonial-card')) {
                    const cards = document.querySelectorAll('.testimonial-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.testimonial-card, .video-testimonial, .trust-item, .section-title'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Animated Counters
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
                const duration = 2000;
                const steps = 60;
                const increment = target / steps;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    // Format the number
                    let displayValue = Math.floor(current);
                    if (counter.textContent.includes('+')) {
                        displayValue += '+';
                    }
                    if (counter.textContent.includes('%')) {
                        displayValue += '%';
                    }
                    
                    counter.textContent = displayValue;
                }, duration / steps);
                
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Video Modal Functionality
function initializeVideoModal() {
    const videoThumbnails = document.querySelectorAll('.video-testimonial, .play-button');
    
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Get video info
            const videoContainer = this.closest('.video-testimonial') || this.closest('.video-container');
            const videoTitle = videoContainer ? 
                videoContainer.querySelector('h4')?.textContent || 'Video Testimonial' : 'Video Testimonial';
            
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'video-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="modal-video">
                        <h3>${videoTitle}</h3>
                        <p>Video testimonial would play here</p>
                        <p>Integration with video player (YouTube, Vimeo, etc.) would go here</p>
                    </div>
                </div>
            `;
            
            // Add modal styles
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            const modalContent = modal.querySelector('.modal-content');
            modalContent.style.cssText = `
                background: white;
                padding: 2rem;
                border-radius: 10px;
                max-width: 800px;
                width: 90%;
                text-align: center;
                position: relative;
                transform: scale(0.8);
                transition: transform 0.3s ease;
            `;
            
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 20px;
                font-size: 2rem;
                cursor: pointer;
                color: #666;
            `;
            
            document.body.appendChild(modal);
            
            // Animate in
            setTimeout(() => {
                modal.style.opacity = '1';
                modalContent.style.transform = 'scale(1)';
            }, 10);
            
            // Close modal
            function closeModal() {
                modal.style.opacity = '0';
                modalContent.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 300);
            }
            
            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
            
            // ESC key to close
            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escHandler);
                }
            });
        });
    });
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav ul');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Animate hamburger icon
            const icon = menuToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Smooth Scrolling for Anchor Links
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

// Testimonial Cards Hover Effects
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.testimonial-card')) {
        const card = e.target.closest('.testimonial-card');
        card.style.transform = 'translateY(-10px) scale(1.02)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.testimonial-card')) {
        const card = e.target.closest('.testimonial-card');
        card.style.transform = 'translateY(0) scale(1)';
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.testimonials-hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Fade in hero elements
    const heroElements = document.querySelectorAll('.testimonials-hero h1, .testimonials-hero p, .hero-stats, .floating-testimonial');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Service Tag Animations
document.querySelectorAll('.service-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Intersection Observer for Trust Indicators
const trustObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.2}s`;
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.trust-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    trustObserver.observe(item);
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .testimonial-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .service-tag {
        transition: all 0.3s ease;
    }
    
    .loaded .testimonials-hero h1,
    .loaded .testimonials-hero p,
    .loaded .hero-stats,
    .loaded .floating-testimonial {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
`;
document.head.appendChild(style);