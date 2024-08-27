import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
const Dining = lazy(() => import("./components/Dining"))
import Error from './components/Error';
import { Provider } from 'react-redux';
import store from './utils/store';


const AppLayout = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/dining",
                element: 
                    <Suspense fallback={<h2>Loading...............</h2>}>
                        <Dining/>
                    </Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ]
    }
])

const root = ReactDom.createRoot(document.getElementById('main'));
root.render(<RouterProvider router = {appRouter}/>)