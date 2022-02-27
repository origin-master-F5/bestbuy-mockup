# Product Display Microservice

## Project Description

One of three microservices that is integrated to the main application. This is a product display component that presents the details of the product in view. It displays the images, videos, colors, prices, and any other relevant information customers may want to know before making the purchase.

To simplify the mockup, products were limited to Playstation games.

Additional elements such as the buy button, breadcrumb, cart button, add to wishlist, rating linking to reviews, and other services were added to the component.

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose

## Backend Setup

To run this project, have a local MongoDB ready.
Install specified packages

    npm i


Populate the database with the product data.

    npm run seed

Run the server

    npm run start

## Frontend Setup

Create the development build and run webpack

    npm run build