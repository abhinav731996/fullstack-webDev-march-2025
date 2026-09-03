// import required modules
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

// import requierd pages
import UserStatus from "./pages/UserStatus";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";

// import required layout
import RootLayout from "./layouts/RootLayout";

// import required pages for authantication
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AuthLayout from "./layouts/AuthLayout";

function App() {

  const routes = createBrowserRouter(
    [
      {path:"/", element:<Dashboard/>},
      {path:"/userStatus", element:<UserStatus />},
      {path:"/setting", element:<Setting />}
    ]
  )

  return (

    // <BrowserRouter>
    //     <Routes>
    //       {/* Required routs fro dashboard */}
    //       <Route element={<RootLayout/>}>
    //         <Route path="/" element={<Dashboard />} />
    //         <Route path="/setting" element={<Setting />} />
    //         <Route path="/userStatus" element={<UserStatus />} />
    //       </Route>

    //       {/* Required rout for auth pages */}
    //       <Route element={<AuthLayout/>} >
    //         <Route path="/signin" element={<SignIn />} />
    //         <Route path="/signup" element={<SignUp />} />
    //         <Route path="/forgot-password" element={<ForgotPassword />} />
    //       </Route>
    //     </Routes>
    // </BrowserRouter>


    <RouterProvider router={routes}/>
  );
}

export default App;
