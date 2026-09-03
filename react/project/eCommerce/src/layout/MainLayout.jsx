import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoriesBar from "../components/CategoriesBar";
// import CartSidebar from "../components/CartSidebar";

function MainLayout() {
  return (
    <>
      <Header />
      <CategoriesBar />
      {/* <CartSidebar /> */}
      <div className="container mt-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;