import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="max-lg:collapse lg:mb-48 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title flex  justify-between navbar">
        <div className="navbar-start">
          <label  className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <button className="btn btn-ghost text-xl">daisyUI</button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu fle menu-horizontal px-1">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>

            <li>
              <Link to={"/downs"}>Downlotos</Link>
            </li>
            <li>
              <Link to={"/likeas"}>Likeas</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-64 lg:w-auto"
          />
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>

          <li>
            <Link to={"/downs"}>Downlotos</Link>
          </li>
          <li>
            <Link to={"/likeas"}>Likeas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
