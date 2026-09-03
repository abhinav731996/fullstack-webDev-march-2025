import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isLoggedIn = localStorage.getItem("login");

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return children;
}

export default ProtectedRoute;