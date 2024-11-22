import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Home } from "./pages/Home";
import { HomeSections } from "./pages/HomeSections";

export const App = () => {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home /> 
                },    
                {
                    path: "homesections",
                    element: <HomeSections /> 
                },            
               
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};
