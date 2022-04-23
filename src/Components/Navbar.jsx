import React from "react";
import { Outlet, Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div className="menu-style">
        <NavLink exact activeClassName="active-class" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active-class" to="/about">
          About
        </NavLink>
        <NavLink exact activeClassName="active-class" to="/contact">
          Contact
        </NavLink>
      </div> */}

      <div className="menu-style">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/user/Akshay/Kumbhare">User</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
