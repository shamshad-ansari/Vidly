# Vidly - Movie Rental Application

Vidly is a React-based movie rental management application. It allows users to browse a collection of movies, filter them by genre, and perform various management tasks such as adding, editing, or deleting movie records.

## 🎬 Project Demo

![Project Demo](https://github.com/shamshad-ansari/Vidly/main/asset/demo.gif)

<!-- To add a project demo GIF or screenshot:
1. Record your application using a screen recorder (e.g., OBS Studio, ShareX, or LICEcap)
2. Convert to GIF if needed using a tool like ezgif.com or ffmpeg
3. Add the GIF to your repository (e.g., in a folder called 'assets' or 'screenshots')
4. Update the path above to point to your GIF file
   - If using GitHub: https://raw.githubusercontent.com/username/repo/main/assets/demo.gif
   - Then resize if needed: <img src="URL" width="600" alt="Project Demo">
-->

## ✨ Features

* **Movie Management**: View a comprehensive list of movies with details like title, genre, stock levels, and rental rates.
* **Filtering and Sorting**: Filter movies by genre (e.g., Action, Comedy, Thriller) and sort the table by different columns.
* **Pagination**: Smoothly navigate through large lists of movies using built-in pagination.
* **Interactive UI**: "Like" movies, delete entries, and use a dynamic navigation bar to move between sections like Customers and Rentals.
* **Authentication**: Dedicated forms for user login and registration.

## 🛠️ Tech Stack

* **Frontend**: React (v18.2.0)
* **Routing**: React Router DOM (v6.23.0)
* **Styling**: Bootstrap (v4.1.1) and Font Awesome (v4.7.0)
* **Utilities**: Lodash for data manipulation and Joi-browser for form validation

## 📁 Project Structure

* `src/components/`: Contains reusable UI components like `Movies`, `NavBar`, `LoginForm`, and common components like `Pagination` and `Table`.
* `src/services/`: Includes fake backend services (`fakeMovieService.js`, `fakeGenreService.js`) that simulate API calls for movie and genre data.
* `src/utils/`: Helper functions such as `paginate.js` for handling client-side pagination.

## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/vidly.git
cd vidly
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

* `npm start`: Runs the app in development mode at http://localhost:3000.
* `npm test`: Launches the interactive test runner.
* `npm run build`: Builds the production-ready application to the `build` folder.