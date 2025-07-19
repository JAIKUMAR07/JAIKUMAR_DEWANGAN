import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  // ✅ Ensure correct export
  return (
    <div>
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
