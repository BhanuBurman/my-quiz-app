# Quiz App

This project is a full-stack quiz application consisting of a React frontend and a Spring Boot backend.

## Prerequisites

Ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/) (for running the frontend)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Java 17+](https://www.oracle.com/java/technologies/javase-downloads.html) (for running the backend)
- [Apache Maven](https://maven.apache.org/) (for building the backend)
- [MySQL](https://www.mysql.com/) (or any preferred database for the backend)

## Backend Setup (Spring Boot)

### 1. Configure the Database

Go to `src/main/resources/application.properties` and update the database configuration with your details:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 2. Build and Run the Backend

Navigate to the `Server` directory:

```sh
cd Server
```

Verify that Java and Maven are installed:

```sh
java --version
mvn -v
```

If the above commands return version numbers, proceed with building the project:

```sh
mvn clean package
```

After a successful build, start the server using:

```sh
java -jar target/quizApp-0.0.1-SNAPSHOT.jar
```

The backend should now be running at `http://localhost:8080`.

## Frontend Setup (React)

### 1. Install Dependencies

Navigate to the `Client` directory:

```sh
cd Client
```

Install all required dependencies:

```sh
npm install
```

### 2. Run the Frontend

Start the React development server:

```sh
npm start
```

This will launch the application at `http://localhost:3000`.

## Running the Full Application

1. Start the backend by following the steps in the "Backend Setup" section.
2. Start the frontend by following the steps in the "Frontend Setup" section.
3. Open `http://localhost:3000` in your browser to use the quiz application.

## API Endpoints

- `GET /api/quizzes` - Fetch all quizzes
- `POST /api/quizzes` - Create a new quiz
- `GET /api/quizzes/{id}` - Get a quiz by ID
- `POST /api/quizzes/submit` - Submit quiz answers

## Notes

- Ensure that the backend is running before accessing the frontend.
- The backend API is configured to allow cross-origin requests from `http://localhost:3000` using `@CrossOrigin`.
- Modify `application.properties` to match your database credentials.

## Deployment

For production deployment:

1. Build the frontend using:
   ```sh
   npm run build
   ```
   This will create a `build` folder inside `Client`.
2. Configure the backend to serve static files from the `build` folder.
3. Deploy the backend on a server (e.g., AWS, Heroku, DigitalOcean).

## License

This project is licensed under the MIT License.

