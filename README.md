# Notebook Application

Notebook is an simple note-taking application designed for ease of use, allowing you to easily create, update, edit, and delete notes. It features a secure authentication and authorization system to ensure that only logged-in users can access its functionalities.

## Key Features
- **Create Notes:** Easily add new notes.
- **Edit Notes:** Update your notes whenever you need to.
- **Delete Notes:** Remove notes that are no longer necessary.
- **User Authentication:** Enjoy a secure login system with JWT and cookies.
- **Password Security:** Your passwords are kept safe with bcrypt.js hashing.
- **Protected Access:** Access to the app’s features is restricted to authenticated users only.

## Installation

1. Clone the repository:
    git clone https://github.com/iamtheritikraj/Notebook_Application.git
    cd Notebook_Application
    
2. Install all the dependencies:
    npm install


3. Set up environment variables in your project file:
    Create a `.env` file in the root directory and add these variables:
    PORT = your_localhost_portno
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the application:
    npm start

Notebook employs cutting-edge technologies to deliver its seamless functionality:

- **Node.js:** Powering the server-side development, Node.js enables efficient handling of server operations.
  
- **Express:** As a robust web framework for Node.js, Express simplifies the creation of web applications, providing a streamlined development experience.
  
- **MongoDB:** Utilizing a NoSQL database like MongoDB ensures flexible and scalable storage solutions for both notes and user data.
  
- **EJS:** With EJS as the templating engine, Notebook renders a dynamic and interactive user interface, enhancing the overall user experience.

