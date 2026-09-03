import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="main-layout">

      {/* SIDEBAR */}
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      {/* OVERLAY */}
      <div
        className={`sidebar-overlay ${
          showSidebar ? "show-overlay" : ""
        }`}
        onClick={() => setShowSidebar(false)}
      ></div>

      <div className="main-content">

        <Navbar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <div className="content-wrapper">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;