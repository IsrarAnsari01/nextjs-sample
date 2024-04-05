import React from "react";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        overflowY: "hidden",
      }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
