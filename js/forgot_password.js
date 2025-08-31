    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const forgotPasswordForm = document.getElementById('forgotPasswordForm');
            const resetButton = document.getElementById('resetPassword');
            const statusMessage = document.getElementById('statusMessage');
            
            // Form submission
            forgotPasswordForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('resetEmail').value;
                
                // Simple validation
                if (!email) {
                    statusMessage.textContent = "Please enter your email address";
                    statusMessage.className = "status-message error";
                    return;
                }
                
                // Email validation regex
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    statusMessage.textContent = "Please enter a valid email address";
                    statusMessage.className = "status-message error";
                    return;
                }
                
                // Simulate password reset process
                statusMessage.textContent = "Sending reset instructions...";
                statusMessage.className = "status-message";
                
                setTimeout(function() {
                    statusMessage.textContent = "Password reset instructions sent to your email!";
                    statusMessage.className = "status-message success";
                    
                    // Clear the form
                    document.getElementById('resetEmail').value = "";
                }, 1500);
            });
        });
    </script>