// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = new FormData(contactForm);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
            
            // Reset form
            contactForm.reset();
        }, 2000);
    });
    
    // Show message function
    function showMessage(message, type) {
        formMessage.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
        formMessage.style.display = 'block';
        
        // Auto-hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
    
    // Form validation
    const requiredFields = contactForm.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        field.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldGroup = field.closest('.form-group');
        
        // Remove existing error states
        field.classList.remove('error');
        const existingError = fieldGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Validate based on field type
        let isValid = true;
        let errorMessage = '';
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required.';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number.';
            }
        }
        
        if (!isValid) {
            field.classList.add('error');
            const errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.textContent = errorMessage;
            fieldGroup.appendChild(errorElement);
        }
        
        return isValid;
    }
    
    // Character counter for message field
    const messageField = document.getElementById('message');
    const maxLength = 1000;
    
    // Create character counter
    const counterElement = document.createElement('div');
    counterElement.className = 'character-counter';
    counterElement.textContent = `0 / ${maxLength}`;
    messageField.parentNode.appendChild(counterElement);
    
    messageField.addEventListener('input', function() {
        const currentLength = this.value.length;
        counterElement.textContent = `${currentLength} / ${maxLength}`;
        
        if (currentLength > maxLength * 0.9) {
            counterElement.classList.add('warning');
        } else {
            counterElement.classList.remove('warning');
        }
        
        if (currentLength > maxLength) {
            this.value = this.value.substring(0, maxLength);
            counterElement.textContent = `${maxLength} / ${maxLength}`;
        }
    });
    
    // Smooth scroll for quick contact buttons
    const quickContactButtons = document.querySelectorAll('.cta-btn');
    
    quickContactButtons.forEach(button => {
        if (button.getAttribute('href').startsWith('#')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });
    
    // Form field focus effects
    const formFields = contactForm.querySelectorAll('input, select, textarea');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.closest('.form-group').classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.closest('.form-group').classList.remove('focused');
            }
        });
        
        // Check if field has value on load
        if (field.value) {
            field.closest('.form-group').classList.add('focused');
        }
    });
    
    // Auto-resize textarea
    const textareas = contactForm.querySelectorAll('textarea');
    
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    });
});

// Mobile menu toggle (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav ul');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
});

// Contact info animations
document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-info-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Array.from(contactItems).indexOf(entry.target) * 0.2}s`;
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    contactItems.forEach(item => {
        observer.observe(item);
    });
});