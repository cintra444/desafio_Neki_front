import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Home  from "./pages/Home";
import  Login  from "./pages/Login";
import  Register  from "./pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/home",
        element: <Home />,
    },
]);

export default function AppRouter() {
    return (
        <RouterProvider router={router} />
    );
}