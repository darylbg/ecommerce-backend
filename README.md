# Ecommerce Backend Application

This is a backend application for an eCommerce platform. It is built with Node.js, Express, and Sequelize. The application uses a MySQL database to store and manage product, category, and tag information. The application also includes routes for creating, reading, updating, and deleting product, category, and tag data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

## Installation

To install and run the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the application.
3. Run `npm install` to install the necessary dependencies.
4. Update the `.env` file in the root directory of the application and add the following environment variables:

```env
DB_NAME='ecommerce_db'
DB_USER='<your MySQL username>'
DB_PW='<your MySQL password>'
```

5. Run the `schema.sql` file located in the `db` directory to create the database.
6. Run `npm run seed` to seed the database with test data.
7. Run `npm start` to start the application.

## Usage

To use the application, send HTTP requests to the appropriate endpoints using a tool like Insomnia or Postman. The following endpoints are available:

- `GET /api/products` - get all products
- `GET /api/products/:id` - get a single product by ID
- `POST /api/products` - create a new product
- `PUT /api/products/:id` - update a product by ID
- `DELETE /api/products/:id` - delete a product by ID

- `GET /api/categories` - get all categories
- `GET /api/categories/:id` - get a single category by ID
- `POST /api/categories` - create a new category
- `PUT /api/categories/:id` - update a category by ID
- `DELETE /api/categories/:id` - delete a category by ID

- `GET /api/tags` - get all tags
- `GET /api/tags/:id` - get a single tag by ID
- `POST /api/tags` - create a new tag
- `PUT /api/tags/:id` - update a tag by ID
- `DELETE /api/tags/:id` - delete a tag by ID

## Deployment

* The application is not deployed live, but the source code can be found on Github [here](https://github.com/darylbg/ecommerce-backend)
* A Walk through video demonstrating the use of the application can be found on Youtube [here](https://www.youtube.com/watch?v=PFVIfOYvYBo)

## Credits

This application was built by Daryl, you can find and contact me through my [Github](https://github.com/darylbg)

## License

This application is licensed under the [![License: MIT](https://img.shields.io/badge/License-MIT-pink.svg)](https://opensource.org/licenses/MIT)

