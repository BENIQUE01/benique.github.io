// Combined Service Section Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Master Portfolio Data for All Services
    const portfolioData = {
        // Service 1 - Brand Identity Design
        'logo-design': {
            title: 'Logo Design Portfolio',
            images: [
                'https://picsum.photos/seed/logodesign1/600/400',
                'https://picsum.photos/seed/logodesign2/600/400',
                'https://picsum.photos/seed/logodesign3/600/400',
                'https://picsum.photos/seed/logodesign4/600/400',
                'https://picsum.photos/seed/logodesign5/600/400'
            ]
        },
        'brand-guidelines': {
            title: 'Brand Guidelines Portfolio',
            images: [
                'https://picsum.photos/seed/brandguidelines1/600/400',
                'https://picsum.photos/seed/brandguidelines2/600/400',
                'https://picsum.photos/seed/brandguidelines3/600/400',
                'https://picsum.photos/seed/brandguidelines4/600/400',
                'https://picsum.photos/seed/brandguidelines5/600/400'
            ]
        },
        'business-cards': {
            title: 'Business Cards Portfolio',
            images: [
                'https://picsum.photos/seed/businesscard1/600/400',
                'https://picsum.photos/seed/businesscard2/600/400',
                'https://picsum.photos/seed/businesscard3/600/400',
                'https://picsum.photos/seed/businesscard4/600/400',
                'https://picsum.photos/seed/businesscard5/600/400'
            ]
        },
        'packaging': {
            title: 'Packaging Design Portfolio',
            images: [
                'https://picsum.photos/seed/packaging1/600/400',
                'https://picsum.photos/seed/packaging2/600/400',
                'https://picsum.photos/seed/packaging3/600/400',
                'https://picsum.photos/seed/packaging4/600/400',
                'https://picsum.photos/seed/packaging5/600/400'
            ]
        },
        'social-media': {
            title: 'Social Media Branding Portfolio',
            images: [
                'https://picsum.photos/seed/socialmedia1/600/400',
                'https://picsum.photos/seed/socialmedia2/600/400',
                'https://picsum.photos/seed/socialmedia3/600/400',
                'https://picsum.photos/seed/socialmedia4/600/400',
                'https://picsum.photos/seed/socialmedia5/600/400'
            ]
        },

        // Service 2 - Motion Graphics & Animations
        'intro-animations': {
            title: 'Intro Animations',
            images: [
                'https://picsum.photos/seed/introanimation1/800/600.jpg',
                'https://picsum.photos/seed/introanimation2/800/600.jpg',
                'https://picsum.photos/seed/introanimation3/800/600.jpg',
                'https://picsum.photos/seed/introanimation4/800/600.jpg',
                'https://picsum.photos/seed/introanimation5/800/600.jpg'
            ]
        },
        'logo-animations': {
            title: 'Logo Animations',
            images: [
                'https://picsum.photos/seed/logoanimation1/800/600.jpg',
                'https://picsum.photos/seed/logoanimation2/800/600.jpg',
                'https://picsum.photos/seed/logoanimation3/800/600.jpg',
                'https://picsum.photos/seed/logoanimation4/800/600.jpg',
                'https://picsum.photos/seed/logoanimation5/800/600.jpg'
            ]
        },
        'lower-thirds': {
            title: 'Lower Thirds & Text Effects',
            images: [
                'https://picsum.photos/seed/lowerthird1/800/600.jpg',
                'https://picsum.photos/seed/lowerthird2/800/600.jpg',
                'https://picsum.photos/seed/lowerthird3/800/600.jpg',
                'https://picsum.photos/seed/lowerthird4/800/600.jpg',
                'https://picsum.photos/seed/lowerthird5/800/600.jpg'
            ]
        },
        'explainer-videos': {
            title: 'Explainer Videos',
            images: [
                'https://picsum.photos/seed/explainer1/800/600.jpg',
                'https://picsum.photos/seed/explainer2/800/600.jpg',
                'https://picsum.photos/seed/explainer3/800/600.jpg',
                'https://picsum.photos/seed/explainer4/800/600.jpg',
                'https://picsum.photos/seed/explainer5/800/600.jpg'
            ]
        },
        'visual-effects': {
            title: 'Visual Effects for Sermons/Events',
            images: [
                'https://picsum.photos/seed/vfx1/800/600.jpg',
                'https://picsum.photos/seed/vfx2/800/600.jpg',
                'https://picsum.photos/seed/vfx3/800/600.jpg',
                'https://picsum.photos/seed/vfx4/800/600.jpg',
                'https://picsum.photos/seed/vfx5/800/600.jpg'
            ]
        },

        // Service 3 - Event Video Editing
        'church-edits': [
            'https://picsum.photos/seed/churchedit1/800/600',
            'https://picsum.photos/seed/churchedit2/800/600',
            'https://picsum.photos/seed/churchedit3/800/600',
            'https://picsum.photos/seed/churchedit4/800/600'
        ],
        'wedding-edits': [
            'https://picsum.photos/seed/weddingedit1/800/600',
            'https://picsum.photos/seed/weddingedit2/800/600',
            'https://picsum.photos/seed/weddingedit3/800/600',
            'https://picsum.photos/seed/weddingedit4/800/600'
        ],
        'highlight-reels': [
            'https://picsum.photos/seed/highlight1/800/600',
            'https://picsum.photos/seed/highlight2/800/600',
            'https://picsum.photos/seed/highlight3/800/600',
            'https://picsum.photos/seed/highlight4/800/600'
        ],
        'interviews': [
            'https://picsum.photos/seed/interview1/800/600',
            'https://picsum.photos/seed/interview2/800/600',
            'https://picsum.photos/seed/interview3/800/600',
            'https://picsum.photos/seed/interview4/800/600'
        ],
        'external-audio': [
            'https://picsum.photos/seed/audioedit1/800/600',
            'https://picsum.photos/seed/audioedit2/800/600',
            'https://picsum.photos/seed/audioedit3/800/600',
            'https://picsum.photos/seed/audioedit4/800/600'
        ],

        // Service 4 - Live Streaming
        'obs-setup': [
            'https://picsum.photos/seed/obssetup1/800/600',
            'https://picsum.photos/seed/obssetup2/800/600',
            'https://picsum.photos/seed/obssetup3/800/600',
            'https://picsum.photos/seed/obssetup4/800/600'
        ],
        'camera-angles': [
            'https://picsum.photos/seed/cameraangle1/800/600',
            'https://picsum.photos/seed/cameraangle2/800/600',
            'https://picsum.photos/seed/cameraangle3/800/600',
            'https://picsum.photos/seed/cameraangle4/800/600'
        ],
        'streaming-layouts': [
            'https://picsum.photos/seed/layout1/800/600',
            'https://picsum.photos/seed/layout2/800/600',
            'https://picsum.photos/seed/layout3/800/600',
            'https://picsum.photos/seed/layout4/800/600'
        ],
        'worship-captures': [
            'https://picsum.photos/seed/worship1/800/600',
            'https://picsum.photos/seed/worship2/800/600',
            'https://picsum.photos/seed/worship3/800/600',
            'https://picsum.photos/seed/worship4/800/600'
        ],
        'behind-scenes': [
            'https://picsum.photos/seed/behind1/800/600',
            'https://picsum.photos/seed/behind2/800/600',
            'https://picsum.photos/seed/behind3/800/600',
            'https://picsum.photos/seed/behind4/800/600'
        ],

        // Service 5 - Social Media Video Creation
        'reels': [
            'https://picsum.photos/seed/reel1/800/600',
            'https://picsum.photos/seed/reel2/800/600',
            'https://picsum.photos/seed/reel3/800/600',
            'https://picsum.photos/seed/reel4/800/600'
        ],
        'testimonials': [
            'https://picsum.photos/seed/testimonial1/800/600',
            'https://picsum.photos/seed/testimonial2/800/600',
            'https://picsum.photos/seed/testimonial3/800/600',
            'https://picsum.photos/seed/testimonial4/800/600'
        ],
        'announcements': [
            'https://picsum.photos/seed/announcement1/800/600',
            'https://picsum.photos/seed/announcement2/800/600',
            'https://picsum.photos/seed/announcement3/800/600',
            'https://picsum.photos/seed/announcement4/800/600'
        ],
        'quotes': [
            'https://picsum.photos/seed/quote1/800/600',
            'https://picsum.photos/seed/quote2/800/600',
            'https://picsum.photos/seed/quote3/800/600',
            'https://picsum.photos/seed/quote4/800/600'
        ],
        'sermons': [
            'https://picsum.photos/seed/sermon1/800/600',
            'https://picsum.photos/seed/sermon2/800/600',
            'https://picsum.photos/seed/sermon3/800/600',
            'https://picsum.photos/seed/sermon4/800/600'
        ],

        // Service 6 - Poster & Banner Design
        'event-posters': [
            'https://picsum.photos/seed/eventposter1/800/600',
            'https://picsum.photos/seed/eventposter2/800/600',
            'https://picsum.photos/seed/eventposter3/800/600',
            'https://picsum.photos/seed/eventposter4/800/600'
        ],
        'social-banners': [
            'https://picsum.photos/seed/socialbanner1/800/600',
            'https://picsum.photos/seed/socialbanner2/800/600',
            'https://picsum.photos/seed/socialbanner3/800/600',
            'https://picsum.photos/seed/socialbanner4/800/600'
        ],
        'church-campaigns': [
            'https://picsum.photos/seed/churchcampaign1/800/600',
            'https://picsum.photos/seed/churchcampaign2/800/600',
            'https://picsum.photos/seed/churchcampaign3/800/600',
            'https://picsum.photos/seed/churchcampaign4/800/600'
        ],
        'fundraisers': [
            'https://picsum.photos/seed/fundraiser1/800/600',
            'https://picsum.photos/seed/fundraiser2/800/600',
            'https://picsum.photos/seed/fundraiser3/800/600',
            'https://picsum.photos/seed/fundraiser4/800/600'
        ],
        'billboards': [
            'https://picsum.photos/seed/billboard1/800/600',
            'https://picsum.photos/seed/billboard2/800/600',
            'https://picsum.photos/seed/billboard3/800/600',
            'https://picsum.photos/seed/billboard4/800/600'
        ],

        // Service 7 - YouTube Channel Editing
        'intros-outros': [
            'https://picsum.photos/seed/youtubeintro1/800/600.jpg',
            'https://picsum.photos/seed/youtubeintro2/800/600.jpg',
            'https://picsum.photos/seed/youtubeintro3/800/600.jpg',
            'https://picsum.photos/seed/youtubeintro4/800/600.jpg'
        ],
        'episode-editing': [
            'https://picsum.photos/seed/episodeedit1/800/600.jpg',
            'https://picsum.photos/seed/episodeedit2/800/600.jpg',
            'https://picsum.photos/seed/episodeedit3/800/600.jpg',
            'https://picsum.photos/seed/episodeedit4/800/600.jpg'
        ],
        'thumbnails': [
            'https://picsum.photos/seed/thumbnail1/800/600.jpg',
            'https://picsum.photos/seed/thumbnail2/800/600.jpg',
            'https://picsum.photos/seed/thumbnail3/800/600.jpg',
            'https://picsum.photos/seed/thumbnail4/800/600.jpg'
        ],
        'transitions': [
            'https://picsum.photos/seed/transition1/800/600.jpg',
            'https://picsum.photos/seed/transition2/800/600.jpg',
            'https://picsum.photos/seed/transition3/800/600.jpg',
            'https://picsum.photos/seed/transition4/800/600.jpg'
        ],
        'call-to-action': [
            'https://picsum.photos/seed/cta1/800/600.jpg',
            'https://picsum.photos/seed/cta2/800/600.jpg',
            'https://picsum.photos/seed/cta3/800/600.jpg',
            'https://picsum.photos/seed/cta4/800/600.jpg'
        ],

        // Service 8 - Photo Editing & Enhancement
        'portrait-retouching': [
            'https://picsum.photos/seed/portrait1/800/600.jpg',
            'https://picsum.photos/seed/portrait2/800/600.jpg',
            'https://picsum.photos/seed/portrait3/800/600.jpg',
            'https://picsum.photos/seed/portrait4/800/600.jpg'
        ],
        'background-removal': [
            'https://picsum.photos/seed/background1/800/600.jpg',
            'https://picsum.photos/seed/background2/800/600.jpg',
            'https://picsum.photos/seed/background3/800/600.jpg',
            'https://picsum.photos/seed/background4/800/600.jpg'
        ],
        'event-enhancements': [
            'https://picsum.photos/seed/eventphoto1/800/600.jpg',
            'https://picsum.photos/seed/eventphoto2/800/600.jpg',
            'https://picsum.photos/seed/eventphoto3/800/600.jpg',
            'https://picsum.photos/seed/eventphoto4/800/600.jpg'
        ],
        'color-grading': [
            'https://picsum.photos/seed/color1/800/600.jpg',
            'https://picsum.photos/seed/color2/800/600.jpg',
            'https://picsum.photos/seed/color3/800/600.jpg',
            'https://picsum.photos/seed/color4/800/600.jpg'
        ],
        'lighting-correction': [
            'https://picsum.photos/seed/lighting1/800/600.jpg',
            'https://picsum.photos/seed/lighting2/800/600.jpg',
            'https://picsum.photos/seed/lighting3/800/600.jpg',
            'https://picsum.photos/seed/lighting4/800/600.jpg'
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