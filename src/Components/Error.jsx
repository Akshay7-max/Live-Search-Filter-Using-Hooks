import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>404 Page Not Found</h1>
      <p>Sorry, This page doesn't exist.</p>
      <Link to="/">Go to home page.</Link>
    </>
  );
};

export default Error;
