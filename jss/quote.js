// Quote Form JavaScript - quote.js
// Add this file to your js folder and link it in the HTML

document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    const serviceCheckboxes = document.querySelectorAll('input[name="services"]');
    const submitBtn = document.querySelector('.submit-btn');

    // Form submission handler
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (validateForm()) {
            // Show loading state
            showLoadingState();
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                showSuccessMessage();
                resetForm();
            }, 2000);
        }
    });

    // Service selection handler
    serviceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const parentItem = this.closest('.checkbox-item');
            if (this.checked) {
                parentItem.style.borderColor = '#667eea';
                parentItem.style.background = 'rgba(102, 126, 234, 0.1)';
            } else {
                parentItem.style.borderColor = '#e1e5e9';
                parentItem.style.background = 'transparent';
            }
        });
    });

    // Form validation
    function validateForm() {
        const requiredFields = [
            'firstName',
            'lastName', 
            'email',
            'projectTitle',
            'projectDescription'
        ];

        let isValid = true;
        const errors = [];

        // Check required fields
        requiredFields.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (!field.value.trim()) {
                isValid = false;
                errors.push(`${getFieldLabel(fieldName)} is required`);
                highlightError(field);
            } else {
                clearError(field);
            }
        });

        // Check if at least one service is selected
        const selectedServices = Array.from(serviceCheckboxes).filter(cb => cb.checked);
        if (selectedServices.length === 0) {
            isValid = false;
            errors.push('Please select at least one service');
            highlightServiceError();
        } else {
            clearServiceError();
        }

        // Validate email format
        const emailField = document.getElementById('email');
        if (emailField.value && !isValidEmail(emailField.value)) {
            isValid = false;
            errors.push('Please enter a valid email address');
            highlightError(emailField);
        }

        // Show errors if any
        if (!isValid) {
            showErrorMessage(errors);
        }

        return isValid;
    }

    // Helper functions
    function getFieldLabel(fieldName) {
        const labels = {
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'email': 'Email Address',
            'projectTitle': 'Project Title',
            'projectDescription': 'Project Description'
        };
        return labels[fieldName] || fieldName;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function highlightError(field) {
        field.style.borderColor = '#e74c3c';
        field.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
    }

    function clearError(field) {
        field.style.borderColor = '#e1e5e9';
        field.style.boxShadow = 'none';
    }

    function highlightServiceError() {
        const serviceSection = document.querySelector('.service-checkboxes');
        serviceSection.style.border = '2px solid #e74c3c';
        serviceSection.style.borderRadius = '8px';
        serviceSection.style.padding = '10px';
    }

    function clearServiceError() {
        const serviceSection = document.querySelector('.service-checkboxes'); 
        serviceSection.style.border = 'none';
        serviceSection.style.padding = '0';
    }

    function showErrorMessage(errors) {
        // Remove existing error message
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            background: #ffe6e6;
            border: 1px solid #e74c3c;
            color: #c0392b;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 0.9rem;
        `;
        
        errorDiv.innerHTML = `
            <strong>Please fix the following errors:</strong>
            <ul style="margin: 10px 0 0 20px;">
                ${errors.map(error => `<li>${