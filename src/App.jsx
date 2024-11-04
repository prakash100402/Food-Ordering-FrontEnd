import React from "react";
import ReactDOM from "react-dom/client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import ResturantMenu from "./components/ResturentMenu.jsx";
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