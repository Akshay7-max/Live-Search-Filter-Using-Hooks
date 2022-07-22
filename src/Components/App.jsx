import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import User from "./User";
import Search from "./Search";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:fname/:lname" element={<User />} />
          <Route path="*" element={<Error />} />
          /*<Route path="*" element={<Navigate to ="/about" />}/>*/
        </Route>
      </Routes>
    </>
  );
};

export default App;
