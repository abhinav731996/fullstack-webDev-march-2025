import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />

      <div className="main-wrapper flex-grow-1">
        <Header />

        <div className="content p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
