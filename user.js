document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (event) {
        let valid = true;
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();

        // Email validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        // Password validation (Minimum 6 characters, at least 1 number and 1 special character)
        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters long and include at least one number and one special character.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); 
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        return passwordPattern.test(password);
    }
});
