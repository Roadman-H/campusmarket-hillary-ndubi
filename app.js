// ========================================
// CampusMarket JavaScript
// ========================================


// ========================================
// Shared Product Data
// ========================================

const products = [
    {
        name: "Student Laptop",
        category: "electronics",
        price: 45000,
        image: "images/laptop.png",
        alt: "Student laptop suitable for programming, research, and university work"
    },
    {
        name: "Campus Backpack",
        category: "accessories",
        price: 2500,
        image: "images/backpack.png",
        alt: "Campus backpack for carrying books, a laptop, and daily essentials"
    },
    {
        name: "Wireless Headphones",
        category: "electronics",
        price: 3500,
        image: "images/headphones.png",
        alt: "Wireless headphones for studying, online learning, music, and entertainment"
    },
    {
        name: "Academic Notebook",
        category: "stationery",
        price: 350,
        image: "images/notebook.png",
        alt: "Academic notebook for lectures, assignments, revision, and personal notes"
    },
    {
        name: "Programming Textbook",
        category: "books",
        price: 2800,
        image: "images/textbook.png",
        alt: "Programming textbook covering fundamental software development concepts"
    },
    {
        name: "Campus Hoodie",
        category: "fashion",
        price: 2000,
        image: "images/hoodie.png",
        alt: "Comfortable campus hoodie suitable for lectures, studying, and casual wear"
    }
];


// ========================================
// Catalog Elements
// ========================================

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const productCards =
    document.querySelectorAll(".catalog-grid .product-card");

const noResultsMessage =
    document.getElementById("noResultsMessage");


// ========================================
// Gallery Elements
// ========================================

const galleryImage =
    document.getElementById("galleryImage");

const galleryCategory =
    document.getElementById("galleryCategory");

const galleryProductName =
    document.getElementById("galleryProductName");

const galleryPrevious =
    document.getElementById("galleryPrevious");

const galleryNext =
    document.getElementById("galleryNext");


// ========================================
// Gallery State
// ========================================

let filteredProducts = [...products];

let currentGalleryIndex = 0;


// ========================================
// Update Gallery
// ========================================

function updateGallery() {

    if (
        !galleryImage ||
        !galleryCategory ||
        !galleryProductName
    ) {
        return;
    }


    if (filteredProducts.length === 0) {

        galleryImage.src =
            "images/laptop.png";

        galleryImage.alt =
            "No products available";

        galleryCategory.textContent =
            "No products";

        galleryProductName.textContent =
            "No products match your search.";

        return;
    }


    if (
        currentGalleryIndex >=
        filteredProducts.length
    ) {

        currentGalleryIndex = 0;
    }


    if (currentGalleryIndex < 0) {

        currentGalleryIndex =
            filteredProducts.length - 1;
    }


    const product =
        filteredProducts[currentGalleryIndex];


    galleryImage.src =
        product.image;

    galleryImage.alt =
        product.alt;

    galleryCategory.textContent =
        product.category;

    galleryProductName.textContent =
        product.name;
}


// ========================================
// Product Filtering
// ========================================

function filterProducts() {

    const searchTerm =
        searchInput.value.toLowerCase().trim();

    const selectedCategory =
        categoryFilter.value;


    filteredProducts =
        products.filter(function (product) {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );
        });


    productCards.forEach(function (card) {

        const productName =
            card.querySelector("h3").textContent;


        const shouldShow =
            filteredProducts.some(function (product) {

                return product.name === productName;
            });


        if (shouldShow) {

            card.style.display = "";

        } else {

            card.style.display = "none";
        }

    });


    if (filteredProducts.length === 0) {

        noResultsMessage.hidden = false;

    } else {

        noResultsMessage.hidden = true;
    }


    currentGalleryIndex = 0;

    updateGallery();
}


// ========================================
// Search and Category Events
// ========================================

if (
    searchInput &&
    categoryFilter
) {

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
// Gallery Previous Button
// ========================================

if (galleryPrevious) {

    galleryPrevious.addEventListener(
        "click",
        function () {

            currentGalleryIndex--;


            if (
                filteredProducts.length > 0 &&
                currentGalleryIndex < 0
            ) {

                currentGalleryIndex =
                    filteredProducts.length - 1;
            }


            updateGallery();
        }
    );
}


// ========================================
// Gallery Next Button
// ========================================

if (galleryNext) {

    galleryNext.addEventListener(
        "click",
        function () {

            currentGalleryIndex++;


            if (
                filteredProducts.length > 0 &&
                currentGalleryIndex >=
                filteredProducts.length
            ) {

                currentGalleryIndex = 0;
            }


            updateGallery();
        }
    );
}


// ========================================
// Initial Gallery
// ========================================

updateGallery();


// ========================================
// Quantity Calculator
// ========================================

function setupQuantityCalculator(product) {

    const quantityInput =
        product.querySelector(".quantity-input");


    const quantityError =
        product.querySelector(".quantity-error");


    const totalDisplay =
        product.querySelector(".quantity-total strong");


    const price =
        Number(product.dataset.price);


    function calculateTotal() {

        const rawQuantity =
            quantityInput.value.trim();


        // ========================================
        // Empty Quantity
        // ========================================

        if (rawQuantity === "") {

            quantityError.textContent =
                "Quantity cannot be empty.";

            totalDisplay.textContent =
                "Enter a valid quantity.";

            return;
        }


        const quantity =
            Number(rawQuantity);


        // ========================================
        // Non-Numeric Quantity
        // ========================================

        if (Number.isNaN(quantity)) {

            quantityError.textContent =
                "Please enter a valid number for the quantity.";

            totalDisplay.textContent =
                "Enter a valid quantity.";

            return;
        }


        // ========================================
        // Negative Quantity
        // ========================================

        if (quantity < 0) {

            quantityError.textContent =
                "Quantity cannot be negative.";

            totalDisplay.textContent =
                "Enter a valid quantity.";

            return;
        }


        // ========================================
        // Zero Quantity
        // ========================================

        if (quantity === 0) {

            quantityError.textContent =
                "Quantity must be greater than zero.";

            totalDisplay.textContent =
                "Enter a valid quantity.";

            return;
        }


        // ========================================
        // Decimal Quantity
        // ========================================

        if (!Number.isInteger(quantity)) {

            quantityError.textContent =
                "Quantity must be a whole number.";

            totalDisplay.textContent =
                "Enter a valid quantity.";

            return;
        }


        // ========================================
        // Valid Quantity
        // ========================================

        quantityError.textContent = "";


        const total =
            price * quantity;


        totalDisplay.textContent =
            "KSh " +
            total.toLocaleString("en-KE");
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

            event.preventDefault();


            document
                .querySelectorAll(".form-error")
                .forEach(function (error) {

                    error.textContent = "";

                });


            formSuccess.textContent = "";


            formSuccess.classList.remove(
                "success-visible"
            );


            let isValid = true;


            // ========================================
            // Full Name Validation
            // ========================================

            if (
                fullNameInput.value.trim() === ""
            ) {

                document
                    .getElementById("fullNameError")
                    .textContent =
                    "Please enter your full name.";

                isValid = false;
            }


            // ========================================
            // Email Validation
            // ========================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                emailInput.value.trim() === ""
            ) {

                document
                    .getElementById("emailError")
                    .textContent =
                    "Please enter your email address.";

                isValid = false;

            } else if (
                !emailPattern.test(
                    emailInput.value.trim()
                )
            ) {

                document
                    .getElementById("emailError")
                    .textContent =
                    "Please enter a valid email address.";

                isValid = false;
            }


            // ========================================
            // Password Validation
            // ========================================

            if (
                passwordInput.value === ""
            ) {

                document
                    .getElementById("passwordError")
                    .textContent =
                    "Please enter a password.";

                isValid = false;

            } else if (
                passwordInput.value.length < 8
            ) {

                document
                    .getElementById("passwordError")
                    .textContent =
                    "Password must be at least 8 characters long.";

                isValid = false;
            }


            // ========================================
            // Confirm Password Validation
            // ========================================

            if (
                confirmPasswordInput.value === ""
            ) {

                document
                    .getElementById("confirmPasswordError")
                    .textContent =
                    "Please confirm your password.";

                isValid = false;

            } else if (
                confirmPasswordInput.value !==
                passwordInput.value
            ) {

                document
                    .getElementById("confirmPasswordError")
                    .textContent =
                    "Passwords do not match.";

                isValid = false;
            }


            // ========================================
            // Display Result
            // ========================================

            if (isValid) {

                formSuccess.textContent =
                    "Registration successful! Your CampusMarket account has been created.";


                void formSuccess.offsetWidth;


                formSuccess.classList.add(
                    "success-visible"
                );


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

                confirmPasswordInput.type =
                    "text";

            } else {

                passwordInput.type =
                    "password";

                confirmPasswordInput.type =
                    "password";
            }

        }
    );

}


// ========================================
// Product Ratings and Reviews
// ========================================

const reviewButtons =
    document.querySelectorAll(".review-button");


reviewButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const reviewSection =
                button.closest(".review-section");


            const productName =
                button.dataset.product;


            const reviewInput =
                reviewSection.querySelector(".review-input");


            const reviewError =
                reviewSection.querySelector(".review-error");


            const submittedReview =
                reviewSection.querySelector(
                    ".submitted-review"
                );


            const selectedRating =
                reviewSection.querySelector(
                    'input[type="radio"]:checked'
                );


            // ========================================
            // Clear Previous Error
            // ========================================

            reviewError.textContent = "";


            // ========================================
            // Validate Rating
            // ========================================

            if (!selectedRating) {

                reviewError.textContent =
                    "Please select a star rating.";

                return;
            }


            // ========================================
            // Validate Review
            // ========================================

            const reviewText =
                reviewInput.value.trim();


            if (reviewText === "") {

                reviewError.textContent =
                    "Please write a review before submitting.";

                return;
            }


            // ========================================
            // Validate Review Length
            // ========================================

            if (reviewText.length < 5) {

                reviewError.textContent =
                    "Your review must contain at least 5 characters.";

                return;
            }


            // ========================================
            // Get Selected Rating
            // ========================================

            const rating =
                Number(selectedRating.value);


            const stars =
                "★".repeat(rating) +
                "☆".repeat(5 - rating);


            // ========================================
            // Clear Previous Submitted Review
            // ========================================

            while (
                submittedReview.firstChild
            ) {

                submittedReview.removeChild(
                    submittedReview.firstChild
                );
            }


            // ========================================
            // Create Review Elements
            // ========================================

            const productDisplay =
                document.createElement("p");


            productDisplay.className =
                "submitted-review-text";


            productDisplay.textContent =
                "Review for " + productName;


            const ratingDisplay =
                document.createElement("p");


            ratingDisplay.className =
                "submitted-review-rating";


            ratingDisplay.textContent =
                stars;


            const reviewDisplay =
                document.createElement("p");


            reviewDisplay.className =
                "submitted-review-text";


            reviewDisplay.textContent =
                reviewText;


            // ========================================
            // Add Elements to Submitted Review
            // ========================================

            submittedReview.appendChild(
                productDisplay
            );


            submittedReview.appendChild(
                ratingDisplay
            );


            submittedReview.appendChild(
                reviewDisplay
            );


            submittedReview.classList.add(
                "visible"
            );


            // ========================================
            // Clear Input After Successful Submission
            // ========================================

            reviewInput.value = "";


            const selectedRadio =
                reviewSection.querySelector(
                    'input[type="radio"]:checked'
                );


            if (selectedRadio) {

                selectedRadio.checked = false;
            }

        }
    );

});