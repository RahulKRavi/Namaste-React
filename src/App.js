import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
    },
    {
        path:"/about",
        element:<About/>
    }
])

const root = ReactDom.createRoot(document.getElementById('main'));
root.render(<RouterProvider router = {appRouter}/>)