import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./components/login";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import PageNotFound from "./components/notFound";
import NavBar from "./components/navBar";
import RegisterForm from "./components/register";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>

          <Route path="/movies/:id" element={<MovieForm />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
