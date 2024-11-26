
```markdown
# User Management System

## Overview

This project is a **User Management System** built with **React** for the front-end and **JSON Server** as a mock backend to handle user data. The system allows users to **add**, **edit**, and **delete** users, and each user has a unique `id`, `name`, `role`, and `status`. The front-end communicates with the backend via HTTP requests using **Axios**.

## Features

- **Add New User**: Users can be added with a name, role, and status.
- **Edit User**: Existing users can be updated.
- **Delete User**: Users can be deleted from the list.
- **List Users**: Users are displayed in a table, sorted by their IDs.
- **Status Handling**: Each user has an active or inactive status.
  
## Technologies Used

- **React**: Front-end framework for building the user interface.
- **Material-UI**: UI component library for styling the application.
- **Axios**: For making HTTP requests to the backend.
- **JSON Server**: Mock backend to simulate CRUD operations on user data.
- **JavaScript**: For logic and state management.
  
## Installation

### Prerequisites

- **Node.js** and **npm** should be installed. If not, you can install them from [nodejs.org](https://nodejs.org/).

### Steps to Run the Application

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/rbac-user-management.git
   cd rbac-user-management
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up JSON Server (for backend)**:
   - Install JSON Server globally if it's not already installed:
     ```bash
     npm install -g json-server
     ```
   - Start the JSON Server with the `db.json` file (included in the project):
     ```bash
     json-server --watch db.json --port 5000
     ```
   This will start a mock backend server at `http://localhost:5000`.

4. **Run the React application**:
   ```bash
   npm start
   ```
   This will start the React app at `http://localhost:3000`.

## Functionality

- **Add User**:
  - Click the "Add User" button to open a form where you can enter a new user's name, role, and status. 
  - The ID is assigned automatically based on the highest existing ID in the database.

- **Edit User**:
  - To edit a user, click the "Edit" button next to the user you want to modify. You can change the name, role, and status.
  
- **Delete User**:
  - To delete a user, click the "Delete" button next to the user you wish to remove.

- **User List**:
  - The users are displayed in a table, showing their `ID`, `Name`, `Role`, and `Status`.
  - The users are always sorted by their `ID` in ascending order.

## API Endpoints

This project interacts with a mock backend (JSON Server) running on `http://localhost:5000`. The following API endpoints are used:

- `GET /users`: Fetches all users.
- `POST /users`: Adds a new user.
- `PUT /users/{id}`: Updates an existing user.
- `DELETE /users/{id}`: Deletes a user.

### Example:

```json
// GET /users
[
  { "id": 1, "name": "John Doe", "role": "Admin", "status": "Active" },
  { "id": 2, "name": "Jane Smith", "role": "User", "status": "Inactive" }
]
```

## Known Issues

- The user IDs are generated based on the highest existing ID in the database. If users are deleted, the IDs will not be reused.
  
## Future Improvements

- Implementing role-based access control (RBAC) for users.
- Adding form validation and error handling for invalid input.
- Enabling search and filtering features for the user list.
  
## Author

- **Your Name**  
  - GitHub: [Your GitHub Profile Link](https://github.com/Harsha-2604)
  - Email: [Your Email](mailto:v.harshavardhan2604.com)

"# RBAC" 
