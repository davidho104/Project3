import React from "react";
import { Link } from "react-router-dom";

function NavTabsEmployee() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/employee"
          className={window.location.pathname === "/employee" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/quiz"
          className={window.location.pathname === "/quiz" ? "nav-link active" : "nav-link"}
        >
          Quiz
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resources"
          className={window.location.pathname === "/resources" ? "nav-link active" : "nav-link"}
        >
          Resources
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          Profile
      </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/helpemployee"
          className={window.location.pathname === "/helpemployee" ? "nav-link active" : "nav-link"}
        >
          Help
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/"
          className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
}

export default NavTabsEmployee;
