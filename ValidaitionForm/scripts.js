window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validateName() && validateEmail() && validatePassword()) {
            // If all fields are valid, you can proceed with form submission
            form.submit();
        }
    });

    function validateName() {
        const nameValue = nameInput.value.trim();

        if (nameValue === '') {
            showError(nameInput, 'Username is required');
            return false;
        }

        return true;
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            showError(emailInput, 'Email is required');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, 'Invalid email format');
            return false;
        }

        return true;
    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim();

        if (passwordValue === '') {
            showError(passwordInput, 'Password is required');
            return false;
        } else if (passwordValue.length < 8) {
            showError(passwordInput, 'Password should be at least 8 characters');
            return false;
        }

        return true;
    }

    function showError(input, message) {
        const container = input.parentElement;
        const error = container.querySelector('.error-message');
        error.innerText = message;
        container.classList.add('error');
    }
});