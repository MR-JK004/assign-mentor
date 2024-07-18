# Mentor-Student Management API

This project is a Node.js Express API designed to manage mentors and students. It provides endpoints to perform various operations on mentors and students, utilizing MongoDB for data storage. The key functionalities include creating and retrieving mentors and students, assigning students to mentors, and changing mentors for students. The API is structured with separate controllers and services for mentors and students, ensuring a clean and modular codebase.

## Table of Contents

1. Getting Started
2. Project Structure
3. Endpoints
    - Mentor Endpoints
    - Student Endpoints
4. Database
5. Dependencies
6. Running the Project

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/MR-JK004/assign-mentor.git
   ```

2. Navigate to the project directory:

   ```
   cd assign-mentor
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Environment Variables

Create a `.env` file in the root of your project and add your MongoDB connection string:

```
MONGO_URL=<your_mongo_db_connection_string>
```

## Project Structure

```
assign-mentor/
├── src/
│   ├── controller/
│   │   ├── mentorController.js
│   │   ├── studentController.js
│   │   └── index.js
│   ├── service/
│   │   ├── mentorService.js
│   │   ├── studentService.js
│   ├── model/
│   │   ├── mentorModel.js
│   │   ├── studentModel.js
│   │   └── index.js
│   └── app.js
├── .env
├── package.json
└── README.md
```

## Endpoints

### Mentor Endpoints

- **Create Mentor**
  - **URL**: `/mentor`
  - **Method**: `POST`
  - **Description**: Creates a new mentor.
  - **Request Body**:
    ```json
    {
      "name": "Mentor Name",
      "email": "mentor@example.com"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Mentor Mentor Name Created Successfully",
      "data": { ...mentor data... }
    }
    ```

- **Get All Mentors**
  - **URL**: `/mentor`
  - **Method**: `GET`
  - **Description**: Retrieves all mentors.
  - **Response**:
    ```json
    {
      "message": "Mentors Details Fetched Successfully",
      "data": [ ...mentors array... ]
    }
    ```

- **Get Mentor with Students**
  - **URL**: `/mentor/:mentorId/students`
  - **Method**: `GET`
  - **Description**: Retrieves a mentor along with their assigned students.
  - **Response**:
    ```json
    {
      "message": "Mentor with students fetched successfully",
      "data": { ...mentor and students data... }
    }
    ```

### Student Endpoints

- **Create Student**
  - **URL**: `/student`
  - **Method**: `POST`
  - **Description**: Creates a new student.
  - **Request Body**:
    ```json
    {
      "name": "Student Name",
      "email": "student@example.com"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Student Student Name created successfully",
      "data": { ...student data... }
    }
    ```

- **Assign Students to Mentor**
  - **URL**: `/student/assign`
  - **Method**: `POST`
  - **Description**: Assigns students to a mentor.
  - **Request Body**:
    ```json
    {
      "mentorId": "mentorId",
      "studentIds": ["studentId1", "studentId2"]
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Students assigned to Mentor successfully",
      "matchedCount": 2,
      "modifiedCount": 2
    }
    ```

- **Change Mentor for Student**
  - **URL**: `/student/change-mentor`
  - **Method**: `POST`
  - **Description**: Changes the mentor for a student.
  - **Request Body**:
    ```json
    {
      "studentId": "studentId",
      "mentorId": "newMentorId"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Mentor changed for student successfully",
      "data": { ...updated student data... }
    }
    ```

- **Get Students by Mentor**
  - **URL**: `/student/mentor/:mentorId`
  - **Method**: `GET`
  - **Description**: Retrieves students assigned to a specific mentor.
  - **Response**:
    ```json
    {
      "message": "Students fetched successfully",
      "data": [ ...students array... ]
    }
    ```

- **Get Previous Mentor for Student**
  - **URL**: `/student/previous-mentor/:studentId`
  - **Method**: `GET`
  - **Description**: Retrieves the previous mentor of a specific student.
  - **Response**:
    ```json
    {
      "message": "Previous mentor fetched successfully",
      "data": "Previous MentorId is previousMentorId"
    }
    ```

## Database

- **MongoDB**: Used for storing mentor and student data. The connection is managed through the MongoDB client, with separate collections for mentors and students.

## Dependencies

- express
- mongodb
- dotenv

## Running the Project

1. Start the server:

   ```
   node index.js
   ```

2. The API will be running at `https://assign-mentor-29d4.onrender.com`.
