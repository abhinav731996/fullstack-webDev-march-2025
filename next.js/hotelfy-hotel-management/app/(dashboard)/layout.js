"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// export const metadata = {
//   title: "Hotelfy",
//   description: "Sumit Baghel",
// };


const DashboardLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">

        {/* DESKTOP SIDEBAR */}
        <div className="col-md-2 d-none d-md-block p-0">
          <Sidebar />
        </div>

        {/* MOBILE SIDEBAR (OVERLAY) */}
        {showSidebar && (
          <div className="mobile-sidebar">
            <Sidebar closeSidebar={() => setShowSidebar(false)} />
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="col-12 col-md-10 p-0">
          <Header toggleSidebar={() => setShowSidebar(true)} />
          {children}
          <Footer />
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;