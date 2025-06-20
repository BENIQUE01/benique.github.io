// Combined Service Section Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Master Portfolio Data for All Services
    const portfolioData = {
        // Service 1 - Brand Identity Design
        'logo-design': {
            title: 'Logo Design Portfolio',
            images: [
                'images/motion/Logo.jpeg'               
            ]
        },
        'brand-guidelines': {
            title: 'Brand Guidelines Portfolio',
            images: [
                'images/motion/Brand.jpeg'
            ]
        },
        'business-cards': {
            title: 'Business Cards Portfolio',
            images: [
                'images/motion/Business-Cards.jpeg'
            ]
        },
        'packaging': {
            title: 'Packaging Design Portfolio',
            images: [
                'images/motion/Packaging.jpeg'
            ]
        },
        'social-media': {
            title: 'Social Media Branding Portfolio',
            images: [
                'images/motion/Social-Media.jpeg'
            ]
        },

        // Service 2 - Motion Graphics & Animations
        'intro-animations': {
            title: 'Intro Animations',
            images: [
                'images/motion/Intro-Ani.jpeg'
            ]
        },
        'logo-animations': {
            title: 'Logo Animations',
            images: [
                'images/motion/Logo-Ani.jpeg'
            ]
        },
        'lower-thirds': {
            title: 'Lower Thirds & Text Effects',
            images: [
                'images/motion/Lower-Thirds.jpeg'
            ]
        },
        'explainer-videos': {
            title: 'Explainer Videos',
            images: [
               'images/motion/Explainer-V.jpeg'
            ]
        },
        'visual-effects': {
            title: 'Visual Effects for Sermons/Events',
            images: [
               'images/motion/Visual-Effects.jpeg'
            ]
        },

        // Service 3 - Event Video Editing
        'church-edits': [
            'images/motion/Church-Service.jpeg'
        ],
        'wedding-edits': [
            'images/motion/Wedding.jpeg'
        ],
        'highlight-reels': [
            'images/motion/Highlight.jpeg'
        ],
        'interviews': [
            'images/motion/Interviews.jpeg'
        ],
        'external-audio': [
            'images/motion/Sync.jpeg'
        ],

        // Service 4 - Live Streaming
        'obs-setup': [
            'images/motion/OBSv-Mix.jpeg'
        ],
        'camera-angles': [
            'images/motion/Camera-Angles.jpeg'
        ],
        'streaming-layouts': [
           'images/motion/Streaming-Layout.jpeg'
        ],
        'worship-captures': [
            'images/motion/Live-Worship.jpeg'
        ],
        'behind-scenes': [
           'images/motion/Behind-the-Scenes.jpeg'
        ],

        // Service 5 - Social Media Video Creation
        'reels': [
            'images/motion/Reels.jpeg'
        ],
        'testimonials': [
            'images/motion/Testimonial-V.jpeg'
        ],
        'announcements': [
            'images/motion/Church-Announcements.jpeg'
        ],
        'quotes': [
            'images/motion/Quote-Motion.jpeg'
        ],
        'sermons': [
           'images/motion/Mini-Sermons.jpeg'
        ],

        // Service 6 - Poster & Banner Design
        'event-posters': [
            'images/motion/Event-Posters.jpeg'
        ],
        'social-banners': [
            'images/motion/Social-Banners.jpeg'
        ],
        'church-campaigns': [
            'images/motion/Church-Campaign.jpeg'
        ],
        'fundraisers': [
            'images/motion/Fundraiser-Posters.jpeg'
        ],
        'billboards': [
            'images/motion/Billboard-Pull.jpeg'
        ],

        // Service 7 - YouTube Channel Editing
        'intros-outros': [
           'images/motion/Intros-Outros.jpeg'
        ],
        'episode-editing': [
            'images/motion/Episode-Editing.jpeg'
        ],
        'thumbnails': [
            'images/motion/Thumbnail-Designs.jpeg'
        ],
        'transitions': [
           'images/motion/transitions.jpeg'
        ],
        'call-to-action': [
            'images/motion/Call-to-Action.jpeg'
        ],

        // Service 8 - Photo Editing & Enhancement
        'portrait-retouching': [
            'images/motion/Portrait-Retouching.jpeg'
        ],
        'background-removal': [
            'images/motion/Background-Removal.jpeg'
        ],
        'event-enhancements': [
           'images/motion/Event-Photography.jpeg'
        ],
        'color-grading': [
           'images/motion/color-Grading.jpeg'
        ],
        'lighting-correction': [
           'images/motion/Lighting-Tone.jpeg'
        ]
    };

    // Global modal state management
    let currentImageIndex = 0;
    let currentPortfolio = [];
    let currentModal = null;

    // Universal Modal Handler
    function initializePortfolioModals() {
        // Service card click handlers for all services
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('click', function() {
                const serviceType = this.getAttribute('data-service');
                const serviceContainer = this.closest('.service-container');
                const serviceId = serviceContainer ? serviceContainer.id : 'service-1';
                
                openPortfolio(serviceType, serviceId);
            });
        });
    }

    // Open portfolio modal (unified function for all services)
    // Replace the openPortfolio function with this fixed version:

function openPortfolio(serviceType, serviceId = 'service-1') {
    const portfolio = portfolioData[serviceType];
    if (!portfolio) return;

    // Fixed modal ID mapping logic
    let modalId = 'portfolioModal';
    let titleId = 'modalTitle';
    
    // Extract service number from serviceId
    const serviceNumber = serviceId.split('-')[1];
    
    if (serviceNumber === '2') {
        modalId = 'portfolioModal2';
        titleId = 'modalTitle2';
    } else if (serviceNumber === '7') {
        modalId = 'portfolioModal-7';  // Check if this matches your HTML
        titleId = 'modalTitle-7';
    } else if (serviceNumber === '8') {
        modalId = 'portfolioModal-8';  // Check if this matches your HTML
        titleId = 'modalTitle-8';
    } else if (parseInt(serviceNumber) >= 3) {
        modalId = `portfolioModal${serviceNumber}`;
        titleId = `modalTitle${serviceNumber}`;
    }

    console.log('Looking for modal:', modalId); // Debug line - remove after testing
    
    currentModal = document.getElementById(modalId);
    const modalTitle = document.getElementById(titleId);
    const galleryContainer = currentModal ? currentModal.querySelector('.gallery-container') : null;

    if (!currentModal || !galleryContainer) {
        console.error('Modal not found:', modalId); // Debug line - remove after testing
        return;
    }

    // Handle different data structures
    if (Array.isArray(portfolio)) {
        currentPortfolio = portfolio;
        modalTitle.textContent = serviceType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' Portfolio';
    } else if (portfolio.images) {
        currentPortfolio = portfolio.images;
        modalTitle.textContent = portfolio.title;
    } else {
        return;
    }

    currentImageIndex = 0;
    displayCurrentImage(galleryContainer);
    
    // Show modal
    if (currentModal.classList) {
        currentModal.classList.add('active');
    } else {
        currentModal.style.display = 'flex';
    }
    document.body.style.overflow = 'hidden';
}

    // Display current image (unified function)
    function displayCurrentImage(container = null) {
        if (currentPortfolio.length === 0 || !currentModal) return;
        
        const galleryContainer = container || currentModal.querySelector('.gallery-container');
        if (!galleryContainer) return;
        
        galleryContainer.innerHTML = `
            <img src="${currentPortfolio[currentImageIndex]}" alt="Portfolio Image" style="width: 100%; height: auto; border-radius: 8px;">
        `;
    }

    // Navigate to previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + currentPortfolio.length) % currentPortfolio.length;
        displayCurrentImage();
    }

    // Navigate to next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % currentPortfolio.length;
        displayCurrentImage();
    }

    // Close modal (unified function)
    function closePortfolio() {
        if (!currentModal) return;
        
        if (currentModal.classList.contains('active')) {
            currentModal.classList.remove('active');
        } else {
            currentModal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
        currentModal = null;
    }

    // Universal Event Listeners
    function initializeEventListeners() {
        // Close modal buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('close-modal')) {
                closePortfolio();
            }
            
            // Navigation buttons
            if (e.target.classList.contains('prev-btn')) {
                prevImage();
            }
            if (e.target.classList.contains('next-btn')) {
                nextImage();
            }
            
            // Modal backdrop clicks
            if (e.target.classList.contains('portfolio-modal') || e.target.id.includes('portfolioModal')) {
                closePortfolio();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!currentModal) return;
            
            const isModalOpen = currentModal.classList.contains('active') || 
                               currentModal.style.display === 'flex' || 
                               currentModal.style.display === 'block';
            
            if (!isModalOpen) return;
            
            switch(e.key) {
                case 'Escape':
                    closePortfolio();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        });
    }

    // Service Card Animations
    function initializeCardAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Apply animation to all service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);

            // Hover animations
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            });
        });
    }

    // CTA Button Functionality
    function initializeCTAButtons() {
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Prevent default behavior for quote buttons
                if (this.textContent.toLowerCase().includes('quote')) {
                    this.innerHTML = '<span>Request Sent!</span>';
                    this.style.background = 'linear-gradient(45deg, #4caf50, #45a049)';
                    
                    setTimeout(() => {
                        this.innerHTML = 'Get a Quote';
                        this.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a52)';
                    }, 2000);
                }
            });
        });
    }

    // Form Handling (from second script)
    function initializeFormHandling() {
        const contactForms = document.querySelectorAll('.contact-form');
        contactForms.forEach(contactForm => {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(contactForm);
                const formValues = Object.fromEntries(formData.entries());
                
                let isValid = true;
                for (const [key, value] of Object.entries(formValues)) {
                    if (!value.trim()) {
                        isValid = false;
                        const input = contactForm.querySelector(`[name="${key}"]`);
                        if (input) {
                            input.style.borderColor = 'red';
                            input.addEventListener('input', function() {
                                this.style.borderColor = '';
                            }, { once: true });
                        }
                    }
                }
                
                if (isValid) {
                    const formHTML = contactForm.innerHTML;
                    contactForm.innerHTML = `
                        <div class="form-success">
                            <div style="font-size: 48px; color: #4a90e2; margin-bottom: 20px;">✓</div>
                            <h3>Message Sent Successfully!</h3>
                            <p>Thank you for contacting us. We'll get back to you soon.</p>
                            <button class="cta-button" style="margin-top: 20px;" onclick="this.closest('.contact-form').innerHTML = \`${formHTML.replace(/`/g, '\\`')}\`">Send Another Message</button>
                        </div>
                    `;
                }
            });
        });
    }

    // Smooth Scrolling
    function initializeSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Mobile Menu Toggle
    function initializeMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', function() {
                const navLinks = document.querySelector('.nav-links');
                if (navLinks) {
                    navLinks.classList.toggle('active');
                }
            });
        }
    }

    // Legacy Support Functions
    function initializeLegacySupport() {
        // Legacy slideshow support
        const legacySlideshows = document.querySelectorAll('.slideshow');
        legacySlideshows.forEach(slideshow => {
            if (!slideshow.closest('.portfolio-modal')) {
                const slides = slideshow.querySelectorAll('.slide');
                if (slides.length > 0) {
                    let currentIndex = 0;
                    
                    setInterval(() => {
                        slides[currentIndex].style.opacity = '0';
                        currentIndex = (currentIndex + 1) % slides.length;
                        slides[currentIndex].style.opacity = '1';
                    }, 4000);
                    
                    slides.forEach((slide, index) => {
                        slide.style.opacity = index === 0 ? '1' : '0';
                        slide.style.transition = 'opacity 0.5s ease';
                    });
                }
            }
        });

        // Subsection buttons functionality
        const subsectionButtons = document.querySelectorAll('.subsection-btn');
        subsectionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const container = this.closest('.service-content');
                if (container) {
                    container.querySelectorAll('.subsection-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    this.classList.add('active');
                    
                    container.querySelectorAll('.slideshow').forEach(slideshow => {
                        slideshow.style.display = 'none';
                    });
                    
                    const targetId = this.getAttribute('data-target');
                    const targetSlideshow = container.querySelector(`#${targetId}`);
                    if (targetSlideshow) {
                        targetSlideshow.style.display = 'flex';
                    }
                }
            });
        });
    }

    // Initialize All Functionality
    function initializeAll() {
        initializePortfolioModals();
        initializeEventListeners();
        initializeCardAnimations();
        initializeCTAButtons();
        initializeFormHandling();
        initializeSmoothScrolling();
        initializeMobileMenu();
        initializeLegacySupport();
    }

    // Start initialization
    initializeAll();

    // Make portfolio data globally available for legacy compatibility
    window.portfolioData = portfolioData;
});