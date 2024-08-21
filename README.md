# WatchWiz

WatchWiz is a movie and series search app that allows you to explore the latest and most popular entertainment content. Built with Vue 3, Vuetify, and Vite, WatchWiz offers a responsive user experience for discovering and managing your favorite movies and series.

## Features

- Search for movies and series.
- View detailed information about each title.
- Watchlist
- Responsive design with Vuetify.
- State management with Pinia.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16.x or later)
- [npm](https://www.npmjs.com/)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dhanushkajayasekara/watchwiz.git
   cd watchwiz
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variable:**

   Create a **.env** file in the root directory and add your OMDB API key:

   ```makefile
   VITE_OMDB_API_URL=https://www.omdbapi.com/
   VITE_OMDB_API_KEY=a6b5b9f0
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app will be running at http://localhost:3000.
