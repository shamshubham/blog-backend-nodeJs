# Node.js and Express.js Authentication API

This is a simple Node.js and Express.js application that provides authentication APIs, CRUD operations for posts, users and categories for blog app. It uses MongoDB for data storage.

## Features

- User signup API
- User login API
- MongoDB connection and operations
- User CRUD operations
- Posts CRUD operations
- Categories CRUD operations

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (v12 or higher)
- MongoDB

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/your_username/your_repository.git
   ```

2. Navigate to project directory

   ```bash
   cd your_repository
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Create a `.env` file in root directory and add the following environment variables

   ```plaintext
   PORT=8000
   MONGODB_URI=mongodb://localhost:27017/auth
   ```

5. Start the server

   ```bash
   npm start
   ```

6. Access the APIs at `http://localhost:8000//api/v1/auth/login` and `http://localhost:8000//api/v1/auth/register` for user registration and login.

## API Endpoints

- `POST /api/v1/auth/register`: Create a new user account.
- `POST /api/v1/auth/login`: Log in with an existing user account.

## Folder Structure

```
- src
  - images
  - models
    - category.js
    - post.js
    - user.js
  - routes
    - auth.js
    - categories.js
    - posts.js
    - users.js
  - index.js
```

## Dependencies

- express: Web framework for Node.js
- mongoose: MongoDB object modeling tool
- bcryptjs: Password hashing library
- dotenv: Load environment variables from a .env file

## Contributing

Contributions are welcome! If you find any issues or want to contribute enhancements, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
