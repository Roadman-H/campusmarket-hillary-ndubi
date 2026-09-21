// ========================================
// CampusMarket - Part 2 JavaScript
// ========================================


// ========================================
// Get Catalog Elements
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


    // Loop through every product
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


        // Use if/else to determine visibility
        if (matchesSearch && matchesCategory) {

            product.style.display = "";

            visibleProducts++;

        } else {

            product.style.display = "none";
        }

    });


    // Show a message if no products match
    if (visibleProducts === 0) {

        noResultsMessage.hidden = false;

    } else {

        noResultsMessage.hidden = true;
    }
}


// ========================================
// Search and Category Events
// ========================================

searchInput.addEventListener(
    "input",
    filterProducts
);

categoryFilter.addEventListener(
    "change",
    filterProducts
);


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


        // Prevent invalid or zero quantities
        if (quantity < 1 || Number.isNaN(quantity)) {

            quantity = 1;

            quantityInput.value = 1;
        }


        const total =
            price * quantity;


        totalDisplay.textContent =
            "KSh " + total.toLocaleString("en-KE");
    }


    // Update total whenever quantity changes
    quantityInput.addEventListener(
        "input",
        calculateTotal
    );


    // Calculate the initial total
    calculateTotal();
}


// ========================================
// Activate Quantity Calculators
// ========================================

// Loop through all product cards
productCards.forEach(function (product) {

    const quantityInput =
        product.querySelector(".quantity-input");


    if (quantityInput) {

        setupQuantityCalculator(product);

    }

});