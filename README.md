Full Name: Hillary Ndubi
Admission Number: CIT-227-115/2024
Live Site: https://roadman-h.github.io/campusmarket-hillary-ndubi/

# CampusMarket

CampusMarket is a database-driven e-commerce web application developed for my CCS 2314 Web Based Programming II semester project.

The main idea behind the project is to create a simple online marketplace where university students and the campus community can browse products, search for items, filter products by category, calculate quantities, rate products, submit reviews, and register for an account.

## Features

The current version of CampusMarket includes:

- Home page
- Product catalog
- Product search
- Category filtering
- Product quantity controls
- Quantity validation
- Automatic product total calculations
- Product image gallery
- Gallery navigation with previous and next controls
- Gallery updates based on filtered products
- Five-star product ratings
- Product review submission
- Review validation
- Registration form
- Registration validation
- Email format validation
- Password validation
- Password confirmation
- Password show/hide functionality
- Specific validation feedback
- Animated successful registration confirmation
- Responsive design
- Meaningful alternative text for product images
- Consistent navigation and footer across the website

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

## Pages

The project currently has three main pages:

- Home — `index.html`
- Catalog — `catalog.html`
- Register — `register.html`

## Product Categories

The catalog contains products from different categories, including:

- Electronics
- Accessories
- Stationery
- Books
- Fashion

## JavaScript Functionality

JavaScript is used throughout the website to provide interactive functionality.

The catalog uses a shared product data structure for filtering and the product gallery. When a user searches for a product or selects a category, the visible products and gallery are updated using the same product data.

Quantity calculations only use valid quantities. Empty, zero, negative, decimal, and non-numeric values are rejected with specific feedback.

The registration form uses JavaScript validation for required fields, email format, password length, and password confirmation. Successful registration displays an animated confirmation without reloading the page.

The product review system allows users to select a five-star rating and submit a written review. Reviews are validated before being displayed on the page.

## Accessibility

The website includes meaningful `alt` text for product images, labels for form controls, accessible feedback areas, and keyboard-focus styling for interactive elements.

## Responsive Design

The website is designed to adapt to different screen sizes. Product grids, navigation, forms, and the image gallery adjust on smaller screens to prevent content from overflowing.

## Running the Project Locally

The project uses plain HTML, CSS, and JavaScript, so no build command is required.

The website can be opened directly in a browser or run using a local development server such as VS Code Live Server.

## Live Website

The deployed website is available at:

https://roadman-h.github.io/campusmarket-hillary-ndubi/

## GitHub Repository

The project is stored in my private GitHub repository and is submitted through Google Classroom as required.