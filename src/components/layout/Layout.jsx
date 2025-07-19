import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import StarsCanvas from "./StarBackground";

const Layout = ({ children }) => {
  // ✅ Ensure correct export
  return (
    <div>
      <StarsCanvas />
      <Navbar />

      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
