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

## **Setup and Installation**
Follow the steps below to set up the project on your local machine:

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/movie-database-api.git
```
### 2. Navigate to the project directory:
```bash
cd movie-database-api
```

### 3. Install dependencies:
Install the required npm packages by running:
```bash
npm install
```

### 4. Create a .env file:
In the root directory, create a .env file to store your environment variables:
```bash
MONGODB_URI="mongodb+srv://movie-database-api:<db_password>@cluster0.9lcnj.mongodb.net/?appName=Cluster0"
JWT_SECRET=mysecretkey
```
Replace mongodb://localhost:27017/moviedb with your MongoDB URI if you're using a different MongoDB setup (e.g., MongoDB Atlas).
Replace mysecretkey with your own secret key for signing JWT tokens.

### 5. Set up MongoDB:

Make sure MongoDB is installed and running on your local machine. If you're using MongoDB Atlas, configure the MONGODB_URI to point to your Atlas instance.

### Running the Project
To run the project locally, use the following command:

```bash
npm start
```
This will start the server on http://localhost:5000. You can now interact with the API through Postman or any HTTP client of your choice.

To run the project in development mode:
```bash
npm run dev
```
This will automatically reload the server on code changes (if you have nodemon installed).

## **API Endpoints**

Here is an overview of the main API endpoints:

### **Authentication Endpoints**

- **POST** `/api/auth/register`
  - Registers a new user.
  - **Request Body**:
    ```json
    { "username": "user_name", "password": "password" }
    ```

- **POST** `/api/auth/login`
  - Logs in a user and returns a JWT token.
  - **Request Body**:
    ```json
    { "username": "user_name", "password": "password" }
    ```
  - **Response**:
    ```json
    { "token": "jwt_token" }
    ```

### **Movie Endpoints (CRUD)**

- **POST** `/api/movies/create`
  - Creates a new movie.
  - **Request Body**:
    ```json
    { 
      "title": "Inception", 
      "genre": "Sci-Fi", 
      "releaseYear": 2010, 
      "director": "Christopher Nolan", 
      "rating": 8.8, 
      "description": "A mind-bending thriller"
    }
    ```

- **GET** `/api/movies/allmovie`
  - Retrieves a list of all movies.

- **GET** `/api/movies/search/:id`
  - Retrieves a movie by its ID.

- **PUT** `/api/movies/update/:id`
  - Updates a movie by its ID.
  - **Request Body**:
    ```json
    { "rating": 9.0 }
    ```

- **DELETE** `/api/movies/delete/:id`
  - Deletes a movie by its ID.

### **Authentication Requirement**

All endpoints under `/api/movies` require authentication via JWT. Add the token to the `Authorization` header:

```bash
Authorization: Bearer <YOUR_JWT_TOKEN>
```