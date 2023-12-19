# Project Name

## Overview

[Provide a brief overview of your project, highlighting its purpose, key features, and technologies used.]

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Routes](#routes)
  - [Buyer Routes](#buyer-routes)
  - [Seller Routes](#seller-routes)
  - [Project Routes](#project-routes)

## Installation

1. Clone the repository:

```bash
git clone [https://github.com/your-username/your-project.git](https://github.com/your-username/your-project.git)
cd your-project
```

# Install backend dependencies

cd backend
npm install

# Install frontend dependencies

cd frontend
npm install

## Configuration

**1. Configure MongoDB:**

- Create a MongoDB database and obtain the connection URI.
- Update the `backend/config/config.js` file with your MongoDB URI.

**2. Configure Frontend API URL:**

- Update the API URL in the frontend components (e.g., `frontend/src/components/BuyerLoginForm.js`, `frontend/src/components/SellerLoginForm.js`) with the actual backend API URL.

## Usage

**1. Run the backend server:**

bash
cd backend
npm start
cd frontend
npm start

The frontend development server will be running on `http://localhost:3000`.

Access the application in your web browser.

## Routes

### Buyer Routes

- **Login:**
  - Path: `/buyer/login`
  - Method: POST
  - Description: Allows buyers to log in. Validates the provided credentials and returns an authentication token upon successful login.
- **Register:**
  - Path: `/buyer/register`
  - Method: POST
  - Description: Allows buyers to register. Creates a new buyer account with the provided username and password.
- **Buyer Dashboard:**
  - Path: `/buyer/dashboard`
  - Method: GET
  - Description: Displays the buyer-specific dashboard with relevant information.

### Seller Routes

- **Login:**
  - Path: `/seller/login`
  - Method: POST
  - Description: Allows sellers to log in. Validates the provided credentials and returns an authentication token upon successful login.
- **Register:**
  - Path: `/seller/register`
  - Method: POST
  - Description: Allows sellers to register. Creates a new seller account with the provided username and password.
- **Seller Dashboard:**
  - Path: `/seller/dashboard`
  - Method: GET
  - Description: Displays the seller-specific dashboard with relevant information.

### Project Routes

- **Create Project:**
  - Path: `/create-project`
  - Method: POST
  - Description: Allows users (both buyers and sellers) to create a new project. Requires a valid authentication token.
- **Project List:**
  - Path: `/project-list`
  - Method: GET
  - Description: Retrieves a list of projects available on the platform. Publicly accessible.
