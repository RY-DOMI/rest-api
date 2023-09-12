# REST API

[![GitHub version](https://img.shields.io/github/package-json/v/RY-DOMI/rest-api)](https://github.com/RY-DOMI/rest-api)
[![License](https://img.shields.io/github/license/RY-DOMI/rest-api)](LICENSE)

A powerful REST API for managing a comprehensive HR and inventory management system.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Docker](#docker)
- [License](#license)

## Description

This REST API is designed to handle various aspects of HR management and inventory management. It provides functionality for managing employees, salaries, roles, permissions, departments, and much more.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [Docker](https://www.docker.com/) (Optional, for containerization)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/RY-DOMI/rest-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rest-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

To start the API server locally, use the following command:
  ```bash 
  npm start
  ```

The API will be available at http://localhost:3000.

### Docker

You can also containerize this application using Docker. Ensure you have Docker installed and follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t rest-api .
   ```

2. Run a Docker container from the image:

   ```bash
   docker run -p 3000:3000 rest-api
   ```

The API will be accessible at http://localhost:3000 within the Docker container.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
