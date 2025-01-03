// Initialize JustValidate for the form with ID "newsletter-form"
const validator = new JustValidate("#newsletter-form", {
    errorFieldCssClass: 'error',
});

// Select the success message container
const success = document.querySelector(".success");

// Select the newsletter form and the reset button
const newsletterForm = document.querySelector(".newsletter");
const resetButton = document.querySelector(".reset");

// Add validation rules to the email field
validator
    .addField("#email", [
        {
            rule: "required",
            errorMessage: "Email cannot be empty",
        },
        {
            rule: "email",
            errorMessage: "Valid email is required",
        },
    ])

    // Define what happens when the form is successfully validated
    .onSuccess(() => {
        // Get the email value from the form and display it in the success message
        const email = document.querySelector("#email").value;
        document.querySelector(".success_email").textContent = email;
        success.classList.remove("hidden");
        newsletterForm.classList.add("hidden");
    });

// Add an event listener to the reset button to reset the form
resetButton.addEventListener("click", () => {
    success.classList.add("hidden");
    newsletterForm.classList.remove("hidden");
    document.querySelector("#newsletter-form").reset();
});

// Function to reset the form and hide the success message
function resetForm() {
    success.classList.add("hidden");
    newsletterForm.classList.remove("hidden");
}