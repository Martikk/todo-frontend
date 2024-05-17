# Todo List Frontend

This is the frontend application for the Todo List project, built with React.js and deployed on AWS Amplify.

## Live Demo

You can access the live demo of the application [here](https://main.d3sufhpecf7yrr.amplifyapp.com/).

## Features

- View all todo items
- Add new todo items
- Update existing todo items
- Delete todo items
- Filter todos by category and priority
- Mark todos as completed

## Technologies Used

- React.js
- Axios for API requests
- AWS Amplify for deployment

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-list-frontend.git
   cd todo-list-frontend

Install dependencies:

bash
Copy code
npm install
# or
yarn install
Create a .env file in the root directory and add the following:

plaintext
Copy code
REACT_APP_API_URL=https://to-do-martik-78cca75b2965.herokuapp.com
Start the development server:

bash
Copy code
npm start
# or
yarn start
Deployment
The project is deployed using AWS Amplify. Follow these steps to deploy your own instance:

Install the AWS Amplify CLI:

bash
Copy code
npm install -g @aws-amplify/cli
Initialize a new Amplify project:

bash
Copy code
amplify init
Deploy the project:

bash
Copy code
amplify publish
Usage
Open the application in your browser.
Add, update, and delete todo items as needed.
Use the filters to manage your todo list more effectively.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.