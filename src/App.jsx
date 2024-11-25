import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import appStore from "./utils/appStore.js";
//import About from "./components/About.jsx";
//import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import ResturantMenu from "./components/ResturentMenu.jsx";
import Cart from "./components/Cart.jsx";
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import { Provider } from 'react-redux'

const Contact = lazy( ()=>import("./components/Contact.jsx"));
const About = lazy(()=>import("./components/About.jsx"));

const AppLayout = () => {
    return(
        <Provider store={appStore}>
            <div className="body">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </Provider>
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
                element: <Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
            },
            {
                path: "/Contact",
                element:<Suspense fallback={<h1>Loading....</h1>}><Contact/></Suspense> 
            },
            {
                path: "/Restaurants/:Rid",
                element: <ResturantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
        ],
        errorElement: <Error/>
    },
]);

const root1 = ReactDOM.createRoot(document.getElementById("id1"));
root1.render(<RouterProvider router={appRoute}/>);