import { createBrowserRouter } from "react-router-dom";


import RootLayout from "../layout/RootLayout";
import Dashboard from "../pages/Dashboard";
import Setting from "../pages/Setting";

export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);