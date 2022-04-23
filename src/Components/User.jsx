import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  let navigate = useNavigate();

  //   function handleClick() {
  //     navigate("/about");
  //   }

  return (
    <>
      <h1>
        My name is {fname} {lname} bro.
      </h1>
      <h3>My current location is: {location.pathname}</h3>
      <br />
      {location.pathname === "/user/Akshay/Kumbhare" ? (
        <button className="button-style"
          onClick={() => {
            navigate(-1);
          }}
        >
          Click Me
        </button>
      ) : null}
    </>
  );
};

export default User;
