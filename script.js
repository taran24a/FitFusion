document.addEventListener('DOMContentLoaded', function() {
    // Debugging - verify script is loading
    console.log('FitFusion login system initialized');

    // Get all form elements
    const loginForm = document.querySelector('.form-box.login form');
    const registerForm = document.querySelector('.form-box.register form');
    const logregBox = document.querySelector('.logreg-box');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const forgotPasswordLink = document.querySelector('.remember-forgot a');

    // Password validation
    const passwordValidation = /^(?=.*\d).{8,}$/; // 8+ chars with 1 number

    // Form toggle functionality
    registerLink?.addEventListener('click', (e) => {
        e.preventDefault();
        logregBox?.classList.add('active');
    });
    
    loginLink?.addEventListener('click', (e) => {
        e.preventDefault();
        logregBox?.classList.remove('active');
    });

    // Simplified forgot password flow - just show alert
    forgotPasswordLink?.addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Please enter your email address to reset your password:');
        if (email) {
            alert(`Password reset instructions have been sent to ${email}\n(Note: This is a demo. In a real app, we would send a reset link.)`);
        }
    });

    // Login form submission
    loginForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        
        const storedUser = JSON.parse(localStorage.getItem('user'));
        
        if (storedUser?.email === email && storedUser?.password === password) {
            // Successful login - redirect immediately
            window.location.href = 'newland.html';
        } else {
            alert('Invalid email or password');
        }
    });

    // Registration form submission
    registerForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        const termsChecked = this.querySelector('input[type="checkbox"]')?.checked;
        
        // Validation
        if (!name || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!termsChecked) {
            alert('You must agree to the terms');
            return;
        }
        
        if (!passwordValidation.test(password)) {
            alert('Password must be at least 8 characters with 1 number');
            return;
        }
        
        // Save user data
        localStorage.setItem('user', JSON.stringify({ 
            name, 
            email, 
            password 
        }));
        
        // Immediate redirect after successful registration
        window.location.href = 'newland.html';
    });

    // Mobile menu toggle (if exists in your HTML)
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    menuToggle?.addEventListener('click', () => {
        navbar?.classList.toggle('active');
        menuToggle?.classList.toggle('active');
    });
});