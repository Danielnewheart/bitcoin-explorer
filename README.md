![Lightning Nodes Per Country](https://github.com/Danielnewheart/bitcoin-explorer/assets/87961226/d33e8d9c-5e3d-4202-8106-9ded35bb41e0)
# Lightning Nodes Per Country
> Full-Stack Framework with Vite, React, TypeScript, and Express

This project demonstrates a full-stack application using Vite, React, TypeScript, and Express. It showcases how to build a modern web application that fetches real-time data from the Mempool API and visualizes it using a Doughnut Chart with `react-chartjs-2`.

## Technologies Used

- **Vite**: A modern frontend build tool that provides a faster and leaner development experience.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Mempool API**: Provides real-time blockchain data from Mempool.
- **react-chartjs-2**: A React wrapper for Chart.js, a community maintained project that visualizes data using JavaScript charts.

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```
git clone &lt;repository-url&gt;
cd &lt;project-directory&gt;
```

### Install frontend dependencies

```
npm install
```

### Install backend dependencies

```
cd backend
npm install
```

## Running the Application

To run the application, you need to start both the frontend and the backend servers.

### Start the Backend Server

Navigate to the `backend` directory and run:

```
npm start
```

This will start the Express server on `http://localhost:3001`.

### Start the Frontend Server

In a new terminal, navigate back to the project root directory and run:

```
npm run dev
```

This will start the Vite server and open the application in your default web browser.

## Architecture Overview

The frontend is built with React and TypeScript, utilizing Vite for an optimized development experience. It fetches real-time data from the backend, which is an Express server that retrieves data from the Mempool API. The data is then visualized in a Doughnut Chart using `react-chartjs-2`.

## Fetching Data

The backend server fetches real-time data from the Mempool API and processes it before sending it to the frontend. The frontend uses React hooks to fetch this data from the backend and updates the chart accordingly.

## Visualization

The project uses `react-chartjs-2` to render a Doughnut Chart based on the data fetched from the backend. This provides a visual representation of the real-time data from Mempool.

## Conclusion

This project is a great starting point for developers looking to build full-stack applications with real-time data visualization. It demonstrates the power of combining Vite, React, TypeScript, and Express with external APIs and chart libraries.
