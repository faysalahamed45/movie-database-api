# **Movie Database API**

This project is a RESTful API that allows users to manage and explore a database of movies. The API includes functionalities for creating, reading, updating, and deleting movie records. The API also supports user authentication with JWT (JSON Web Token) and integrates with MongoDB for storing movie and user data.

## **Project Description**

This project allows you to:
- **Manage Movies**: CRUD operations (Create, Read, Update, Delete) on movie data such as title, genre, director, cast, and ratings.
- **User Authentication**: Secure authentication using JWT (JSON Web Token).
- **Database**: The project uses **MongoDB** to store user and movie data.

This API will allow users to:
- Register and log in to obtain a JWT token for secure access to the API.
- Manage a movie collection, with the ability to add, retrieve, update, and delete movies from the database.

## **Technologies Used**
- **Node.js**: JavaScript runtime to build the server.
- **Express.js**: Framework to handle HTTP requests and routing.
- **MongoDB**: NoSQL database to store movie and user data.
- **Mongoose**: ODM for MongoDB that simplifies data interaction.
- **JWT (JSON Web Tokens)**: Used for secure user authentication.
- **dotenv**: For managing environment variables.


### 1. Clone the repository:
```bash
git clone https://github.com/your-username/movie-database-api.git

## **Install Dependencies:**
Install the required npm packages:
```bash
npm install

## **Create a .env File:**
In the root directory of your project, create a .env file to store your environment variables. This file will contain:
MONGODB_URI: Replace mongodb://localhost:27017/moviedb with your MongoDB URI if you're using a different MongoDB setup (e.g., MongoDB Atlas).
JWT_SECRET: Replace mysecretkey with your own secret key for signing JWT tokens

## **Running the Project**
To run the project locally, use the following command:

```bash
npm start

This will start the server on http://localhost:5000. You can now interact with the API through Postman or any HTTP client of your choice.

Running the Project in Development Mode:
To run the project with automatic server reloading (using nodemon), use the following command:

```bash
npm run dev

This will automatically reload the server whenever there are code changes.

