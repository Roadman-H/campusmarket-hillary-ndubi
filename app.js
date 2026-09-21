// ========================================
// CampusMarket 
// ========================================


// ========================================
// Product Catalog Elements
// ========================================

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productCards = document.querySelectorAll(".product-card");
const noResultsMessage = document.getElementById("noResultsMessage");


// ========================================
// Product Filtering
// ========================================

function filterProducts() {

    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    let visibleProducts = 0;


    productCards.forEach(function (product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        const productCategory =
            product.dataset.category;


        const matchesSearch =
            productName.includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        if (matchesSearch && matchesCategory) {

            product.style.display = "";

            visibleProducts++;

        } else {

            product.style.display = "none";
        }

    });


    if (visibleProducts === 0) {

        noResultsMessage.hidden = false;

    } else {

        noResultsMessage.hidden = true;
    }
}


// ========================================
// Search and Category Events
// ========================================

if (searchInput && categoryFilter) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );
}


// ========================================
// Quantity Calculator
// ========================================

function setupQuantityCalculator(product) {

    const quantityInput =
        product.querySelector(".quantity-input");

    const totalDisplay =
        product.querySelector(".quantity-total strong");

    const price =
        Number(product.dataset.price);


    function calculateTotal() {

        let quantity =
            Number(quantityInput.value);


        if (quantity < 1 || Number.isNaN(quantity)) {

            quantity = 1;

            quantityInput.value = 1;
        }


        const total =
            price * quantity;


        totalDisplay.textContent =
            "KSh " + total.toLocaleString("en-KE");
    }


    quantityInput.addEventListener(
        "input",
        calculateTotal
    );


    calculateTotal();
}


// ========================================
// Activate Quantity Calculators
// ========================================

productCards.forEach(function (product) {

    const quantityInput =
        product.querySelector(".quantity-input");


    if (quantityInput) {

        setupQuantityCalculator(product);

    }

});


// ========================================
// Registration Form
// ========================================

const registrationForm =
    document.getElementById("registrationForm");


if (registrationForm) {

    const fullNameInput =
        document.getElementById("fullName");

    const emailInput =
        document.getElementById("email");

    const passwordInput =
        document.getElementById("password");

    const confirmPasswordInput =
        document.getElementById("confirmPassword");

    const showPassword =
        document.getElementById("showPassword");

    const formSuccess =
        document.getElementById("formSuccess");


    // ========================================
    // Registration Form Submission
    // ========================================

    registrationForm.addEventListener(
        "submit",
        function (event) {

            // Prevent the form from submitting/reloading
            event.preventDefault();


            // Clear previous messages
            document.querySelectorAll(".form-error").forEach(
                function (error) {

                    error.textContent = "";

                }
            );

            formSuccess.textContent = "";


            let isValid = true;


            // ========================================
            // Full Name Validation
            // ========================================

            if (fullNameInput.value.trim() === "") {

                document.getElementById("fullNameError").textContent =
                    "Please enter your full name.";

                isValid = false;
            }


            // ========================================
            // Email Validation
            // ========================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (emailInput.value.trim() === "") {

                document.getElementById("emailError").textContent =
                    "Please enter your email address.";

                isValid = false;

            } else if (!emailPattern.test(emailInput.value.trim())) {

                document.getElementById("emailError").textContent =
                    "Please enter a valid email address.";

                isValid = false;
            }


            // ========================================
            // Password Validation
            // ========================================

            if (passwordInput.value === "") {

                document.getElementById("passwordError").textContent =
                    "Please enter a password.";

                isValid = false;

            } else if (passwordInput.value.length < 8) {

                document.getElementById("passwordError").textContent =
                    "Password must be at least 8 characters long.";

                isValid = false;
            }


            // ========================================
            // Confirm Password Validation
            // ========================================

            if (confirmPasswordInput.value === "") {

                document.getElementById("confirmPasswordError").textContent =
                    "Please confirm your password.";

                isValid = false;

            } else if (
                confirmPasswordInput.value !== passwordInput.value
            ) {

                document.getElementById("confirmPasswordError").textContent =
                    "Passwords do not match.";

                isValid = false;
            }


            // ========================================
            // Display Result
            // ========================================

            if (isValid) {

                formSuccess.textContent =
                    "Registration successful! Your CampusMarket account has been created.";

                registrationForm.reset();

            } else {

                formSuccess.textContent =
                    "Please correct the errors above and try again.";
            }

        }
    );


    // ========================================
    // Show/Hide Passwords
    // ========================================

    showPassword.addEventListener(
        "change",
        function () {

            if (showPassword.checked) {

                passwordInput.type = "text";
                confirmPasswordInput.type = "text";

            } else {

                passwordInput.type = "password";
                confirmPasswordInput.type = "password";
            }

        }
    );

}