import React from "react";

import { FaHeart } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="/likeas">
            <FaHeart className="w-8 h-8" />
          </Link>
          <Link to="/downs">
            <FaFileDownload className="w-8 h-8" />
          </Link>
        </div>
      </nav>
      <aside>
        <Link to="https://github.com/" target="_blank">
          Turg'unboyev Raxmatillo
        </Link>
      </aside>
    </footer>
  );
}

export default Footer;
