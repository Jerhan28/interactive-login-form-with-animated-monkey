        document.addEventListener('DOMContentLoaded', function() {
            const signupForm = document.getElementById('signupForm');
            const signupButton = document.getElementById('signup');
            const statusMessage = document.getElementById('statusMessage');
            const showPasswordCheck = document.getElementById('showPasswordCheck');
            const passwordInput = document.getElementById('signupPassword');
            const confirmPasswordInput = document.getElementById('confirmPassword');
            const strengthMeter = document.querySelector('.strength-meter');
            
            // Password visibility toggle
            showPasswordCheck.addEventListener('change', function() {
                if (this.checked) {
                    passwordInput.type = "text";
                    confirmPasswordInput.type = "text";
                } else {
                    passwordInput.type = "password";
                    confirmPasswordInput.type = "password";
                }
            });
            
            // Password strength calculation
            passwordInput.addEventListener('input', function() {
                const strength = calculatePasswordStrength(this.value);
                updateStrengthMeter(strength);
                
                // Check if passwords match
                if (confirmPasswordInput.value && this.value !== confirmPasswordInput.value) {
                    confirmPasswordInput.style.borderColor = 'var(--errorColor)';
                } else {
                    confirmPasswordInput.style.borderColor = 'rgba(78, 184, 221, 0.3)';
                }
            });
            
            // Confirm password validation
            confirmPasswordInput.addEventListener('input', function() {
                if (passwordInput.value !== this.value) {
                    this.style.borderColor = 'var(--errorColor)';
                } else {
                    this.style.borderColor = 'rgba(78, 184, 221, 0.3)';
                }
            });
            
            function calculatePasswordStrength(pwd) {
                if (!pwd) return 0;
                
                let strength = 0;
                
                // Length contributes up to 50%
                if (pwd.length > 10) strength += 50;
                else strength += (pwd.length * 5);
                
                // Variety of character types
                if (pwd.match(/[a-z]/)) strength += 10;
                if (pwd.match(/[A-Z]/)) strength += 10;
                if (pwd.match(/[0-9]/)) strength += 10;
                if (pwd.match(/[^a-zA-Z0-9]/)) strength += 20;
                
                return Math.min(strength, 100);
            }
            
            function updateStrengthMeter(strength) {
                let color;
                
                if (strength < 30) {
                    color = 'var(--errorColor)';
                } else if (strength < 70) {
                    color = 'orange';
                } else {
                    color = 'var(--successColor)';
                }
                
                gsap.to(strengthMeter, 0.5, {
                    width: strength + '%',
                    backgroundColor: color
                });
            }
            
            // Form submission
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('signupName').value;
                const email = document.getElementById('signupEmail').value;
                const password = document.getElementById('signupPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                // Simple validation
                if (!name || !email || !password || !confirmPassword) {
                    statusMessage.textContent = "Please fill in all fields";
                    statusMessage.className = "status-message error";
                    return;
                }
                
                if (password !== confirmPassword) {
                    statusMessage.textContent = "Passwords do not match";
                    statusMessage.className = "status-message error";
                    return;
                }
                
                if (password.length < 8) {
                    statusMessage.textContent = "Password must be at least 8 characters";
                    statusMessage.className = "status-message error";
                    return;
                }
                
                // Simulate signup process
                statusMessage.textContent = "Creating your account...";
                statusMessage.className = "status-message";
                
                setTimeout(function() {
                    statusMessage.textContent = "Account created successfully!";
                    statusMessage.className = "status-message success";
                    
                    // Redirect after success (simulated)
                    setTimeout(function() {
                        window.location.href = "login.html";
                    }, 2000);
                }, 1500);
            });
        });