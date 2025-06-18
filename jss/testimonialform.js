// Testimonial Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const testimonialFormContainer = document.querySelector('.testimonial-form-container');
    const addTestimonialBtn = document.querySelector('.add-testimonial-btn');
    const closeFormBtn = document.querySelector('.close-form');
    const googleLoginBtn = document.querySelector('.google-login');
    const userInfo = document.querySelector('.user-info');
    const userAvatar = userInfo?.querySelector('img');
    const userName = userInfo?.querySelector('.user-name');
    const userEmail = userInfo?.querySelector('.user-email');
    const ratingStars = document.querySelectorAll('.rating-star');
    const testimonialText = document.getElementById('testimonial-text');
    const videoUpload = document.getElementById('video-upload');
    const videoFile = document.getElementById('video-file');
    const videoPreview = document.getElementById('video-preview');
    const videoThumbnail = videoPreview?.querySelector('img');
    const videoName = videoPreview?.querySelector('.file-name');
    const videoSize = videoPreview?.querySelector('.file-size');
    const removeFile = document.querySelector('.remove-file');
    const serviceType = document.getElementById('service-type');
    const otherServiceGroup = document.getElementById('other-service-group');
    const otherService = document.getElementById('other-service');
    const submitBtn = document.getElementById('submit-testimonial');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');
    
    // Variables
    let currentRating = 0;
    let currentUser = null;
    let uploadedVideo = null;
    
    // Initialize event listeners only if elements exist
    if (addTestimonialBtn) addTestimonialBtn.addEventListener('click', openTestimonialForm);
    if (closeFormBtn) closeFormBtn.addEventListener('click', closeTestimonialForm);
    if (googleLoginBtn) googleLoginBtn.addEventListener('click', handleGoogleLogin);
    
    // Rating stars event listeners
    ratingStars.forEach(star => {
        star.addEventListener('click', handleRating);
        star.addEventListener('mouseenter', handleRatingHover);
        star.addEventListener('mouseleave', handleRatingHoverOut);
    });
    
    // Video upload event listeners
    if (videoUpload) videoUpload.addEventListener('click', () => videoFile?.click());
    if (videoFile) videoFile.addEventListener('change', handleVideoUpload);
    if (removeFile) removeFile.addEventListener('click', removeVideo);
    
    // Service type change listener
    if (serviceType) serviceType.addEventListener('change', handleServiceTypeChange);
    
    // Submit button listener
    if (submitBtn) submitBtn.addEventListener('click', submitTestimonial);
    
    // Functions
    function openTestimonialForm() {
        if (!testimonialFormContainer) return;
        
        testimonialFormContainer.classList.add('active');
        resetForm();
    }
    
    function closeTestimonialForm() {
        if (!testimonialFormContainer) return;
        
        testimonialFormContainer.classList.remove('active');
    }
    
    function resetForm() {
        currentUser = null;
        currentRating = 0;
        uploadedVideo = null;
        
        if (testimonialText) testimonialText.value = '';
        if (videoPreview) videoPreview.style.display = 'none';
        if (userInfo) userInfo.style.display = 'none';
        if (googleLoginBtn) googleLoginBtn.style.display = 'flex';
        
        ratingStars.forEach(star => star.classList.remove('active'));
        
        if (serviceType) serviceType.value = '';
        if (otherService) otherService.value = '';
        if (otherServiceGroup) otherServiceGroup.style.display = 'none';
        
        // Hide messages and spinner
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';
        
        // Reset submit button
        if (submitBtn) {
            submitBtn.textContent = 'Submit Testimonial';
            submitBtn.disabled = false;
        }
    }
    
    function handleGoogleLogin() {
        // Simulating Google login
        // In a real application, you would use Google's OAuth API
        setTimeout(() => {
            currentUser = {
                name: 'John Doe',
                email: 'john.doe@example.com',
                avatar: 'https://picsum.photos/seed/user123/60/60.jpg'
            };
            
            if (userAvatar) userAvatar.src = currentUser.avatar;
            if (userName) userName.textContent = currentUser.name;
            if (userEmail) userEmail.textContent = currentUser.email;
            if (userInfo) userInfo.style.display = 'flex';
            if (googleLoginBtn) googleLoginBtn.style.display = 'none';
        }, 1000);
    }
    
    function handleRating(e) {
        const rating = parseInt(e.target.dataset.rating);
        currentRating = rating;
        
        updateRatingDisplay();
    }
    
    function handleRatingHover(e) {
        const rating = parseInt(e.target.dataset.rating);
        
        ratingStars.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    function handleRatingHoverOut() {
        updateRatingDisplay();
    }
    
    function updateRatingDisplay() {
        ratingStars.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= currentRating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    function handleVideoUpload(e) {
        const file = e.target.files[0];
        if (file) {
            uploadedVideo = file;
            const fileSize = formatFileSize(file.size);
            
            // Create a thumbnail from the video
            const thumbnail = URL.createObjectURL(file);
            if (videoThumbnail) videoThumbnail.src = thumbnail;
            if (videoName) videoName.textContent = file.name;
            if (videoSize) videoSize.textContent = fileSize;
            if (videoPreview) videoPreview.style.display = 'flex';
        }
    }
    
    function removeVideo() {
        uploadedVideo = null;
        if (videoFile) videoFile.value = '';
        if (videoPreview) videoPreview.style.display = 'none';
    }
    
    function handleServiceTypeChange() {
        if (!serviceType || !otherServiceGroup) return;
        
        if (serviceType.value === 'other') {
            otherServiceGroup.style.display = 'block';
        } else {
            otherServiceGroup.style.display = 'none';
        }
    }
    
    function formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' bytes';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        else return (bytes / 1048576).toFixed(1) + ' MB';
    }
    
    function validateForm() {
        // Hide previous error messages
        if (errorMessage) errorMessage.style.display = 'none';
        
        if (!currentUser) {
            showError('Please sign in with Google to submit your testimonial.');
            return false;
        }
        
        if (currentRating === 0) {
            showError('Please select a rating.');
            return false;
        }
        
        if (!testimonialText || !testimonialText.value.trim()) {
            showError('Please write your testimonial.');
            return false;
        }
        
        if (serviceType && serviceType.value === 'other' && otherService && !otherService.value.trim()) {
            showError('Please specify the service type.');
            return false;
        }
        
        return true;
    }
    
    function showError(message) {
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
        }
    }
    
    function submitTestimonial() {
        // Validate form
        if (!validateForm()) return;
        
        // Show loading state
        if (loadingSpinner) loadingSpinner.style.display = 'block';
        if (submitBtn) {
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
        }
        
        // Simulate form submission
        setTimeout(() => {
            if (loadingSpinner) loadingSpinner.style.display = 'none';
            if (submitBtn) {
                submitBtn.textContent = 'Submit Testimonial';
                submitBtn.disabled = false;
            }
            
            // Simulate success (in a real app, you would handle the response from your backend)
            const success = Math.random() > 0.1; // 90% chance of success
            
            if (success) {
                if (successMessage) successMessage.style.display = 'block';
                
                // Update statistics
                updateStatistics();
                
                // Close form after 3 seconds
                setTimeout(() => {
                    closeTestimonialForm();
                }, 3000);
            } else {
                showError('Something went wrong. Please try again.');
            }
        }, 2000);
    }
    
    function updateStatistics() {
        // In a real application, you would update the statistics based on the submitted testimonial
        // For this example, we'll just increment the "Happy Clients" count
        const statNumber = document.querySelector('.stat-number');
        if (statNumber) {
            const currentNumber = parseInt(statNumber.textContent.replace(/[^\d]/g, ''));
            const newNumber = currentNumber + 1;
            let displayValue = newNumber;
            
            // Preserve formatting
            if (statNumber.textContent.includes('+')) {
                displayValue += '+';
            }
            if (statNumber.textContent.includes('%')) {
                displayValue += '%';
            }
            
            statNumber.textContent = displayValue;
        }
    }
    
    // Close form when clicking outside
    if (testimonialFormContainer) {
        testimonialFormContainer.addEventListener('click', function(e) {
            if (e.target === testimonialFormContainer) {
                closeTestimonialForm();
            }
        });
    }
    
    // Close form with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && testimonialFormContainer?.classList.contains('active')) {
            closeTestimonialForm();
        }
    });
});