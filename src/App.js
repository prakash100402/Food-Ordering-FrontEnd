import React from "react";
import ReactDOM from "react-dom/client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import ResturantMenu from "./components/ResturentMenu.js";
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";


const AppLayout = () => {
    return(
        <div className="body">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/About",
                element: <About/>
            },
            {
                path: "/Contact",
                element: <Contact/>
            },
            {
                path: "/Restaurants/:Rid",
                element: <ResturantMenu/>
            },
        ],
        errorElement: <Error/>
    },
]);

const root1 = ReactDOM.createRoot(document.getElementById("id1"));
root1.render(<RouterProvider router={appRoute}/>);