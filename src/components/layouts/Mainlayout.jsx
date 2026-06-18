import React from "react";

import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Mainlayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Mainlayout;
