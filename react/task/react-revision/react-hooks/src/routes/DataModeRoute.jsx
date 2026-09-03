import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import UseReducerHook from "../pages/UseReducerHook";
import UseRefHook from "../pages/UseRefHook";
import UseStateHook from "../pages/UseStateHook";
import UseEffectHook from "../pages/UseEffectHook";

export const routes = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/UsestateHook",
                element: <UseStateHook/>
            },
            {
                path: "/UseReducerHook",
                element: <UseReducerHook/>
            },
            {
                path: "/UseRefHook",
                element: <UseRefHook/>
            },
            {
                path: "/UseEffectHook",
                element: <UseEffectHook/>
            },
        ]
    }
])