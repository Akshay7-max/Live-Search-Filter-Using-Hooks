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

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
