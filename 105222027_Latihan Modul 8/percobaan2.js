document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("employeeForm");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        const fields = [
            { id: "first-name", errorId: "first-name-error", errorMessage: "First name is required." },
            { id: "last-name", errorId: "last-name-error", errorMessage: "Last name is required." },
            { id: "password", errorId: "password-error", errorMessage: "Password is required." },
            { id: "email", errorId: "email-error", errorMessage: "Email is required and must include '@' and '.com'." },
            { id: "subject", errorId: "subject-error", errorMessage: "Subject is required." },
            { id: "message" }
        ];

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const errorElement = document.getElementById(field.errorId);

            if (field.id === "email") {
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|COM)$/;
                if (!emailPattern.test(input.value.trim())) {
                    errorElement.textContent = "Please enter a valid email with '@' and ending in '.com'.";
                    input.classList.add("error-input");
                    isValid = false;
                } else {
                    errorElement.textContent = "";
                    input.classList.remove("error-input");
                }
            } else if (input.value.trim() === "") {

                errorElement.textContent = field.errorMessage;
                input.classList.add("error-input");
                isValid = false;
            } else {
                errorElement.textContent = "";
                input.classList.remove("error-input");
            }
        });

        if (!isValid) {
            event.preventDefault();
        }
    });

    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("input", function() {
            const errorElement = document.getElementById(input.id + "-error");
            if (input.value.trim() !== "") {
                errorElement.textContent = "";
                input.classList.remove("error-input");
            }
        });
    });
});
