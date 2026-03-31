E-Kart Shopping Cart Application
A modern, responsive React.js e-commerce interface that integrates with the DummyJSON Cart API. This application provides a real-time shopping experience with dynamic pricing logic and detailed product breakdowns.

🚀 Key Functionality
Real-Time Quantity Management: Users can increase or decrease item quantities directly within the cart, with subtotals and grand totals updating instantly.

Dynamic Discount Display: For every item, the application calculates and displays:

The Original Price (struck through).

The Discounted Price based on API percentage data.

A Savings Badge showing the specific discount percentage applied.

Accordion Product Views: Uses a clean accordion layout to manage space while providing clear product titles and thumbnails.

Global Cart Summary: A header section provides a high-level view of the total number of products, total quantity, and the final Grand Total after all discounts.

One-Click Reset: Features a "Reset Cart" button that reverts all modifications back to the initial API state.

🛠️ Tech Stack
Framework: React.js

Styling: Custom CSS with Flexbox for a responsive, mobile-first design

Data Source: DummyJSON Cart API

📦 Setup & Installation
1. Prerequisites
Ensure you have Node.js (v16+) and npm installed on your machine.

2. Environment Configuration
Create a .env file in the root directory and add the following variable to connect to the API:

Code snippet
REACT_APP_CART_API_URL=https://dummyjson.com
3. Install Dependencies
Bash
npm install
4. Run the Application
Bash
npm start
The app will launch at http://localhost:3000.

📂 Project Structure
CartData.js: The central data hub that fetches API data and manages the global cart state.

Cart.js: Displays the summary header, including total products and the final Grand Total.

CartItems.js: Renders the list of products and handles individual item logic (quantity/remove).

Footer.js: A sticky, grey-shaded footer providing copyright information and API links.

/css: Modular stylesheets for consistent UI components.