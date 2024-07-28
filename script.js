// Function to check if the input box is empty
function validateInput(inputId, labelId, errorContainerId, errorMessage) {
    const inputElement = document.getElementById(inputId); // The box where you type
    const labelElement = document.getElementById(labelId); // The label above the box
    const errorContainer = document.getElementById(errorContainerId); // The error message container below the box

    // Check if the input box is empty
    if (inputElement.value.trim() === '') {
        labelElement.classList.add('error'); // Make the label red
        inputElement.classList.add('error-border'); // Make the box border red
        errorContainer.style.display = 'flex'; // Show the error message container
        errorContainer.querySelector('.error-message').textContent = errorMessage; // Set the error message text
    } else {
        labelElement.classList.remove('error'); // Remove the red color from the label
        inputElement.classList.remove('error-border'); // Remove the red border from the box
        errorContainer.style.display = 'none'; // Hide the error message container
    }
}

// Function to toggle password visibility
function togglePasswordVisibility(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Show';
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').addEventListener('blur', () => {
        validateInput('username', 'username-label', 'username-error', 'Please tell us your username');
    });

    document.getElementById('password').addEventListener('blur', () => {
        validateInput('password', 'password-label', 'password-error', 'Please tell us your password');
    });

    document.getElementById('toggle-password').addEventListener('click', togglePasswordVisibility);
});