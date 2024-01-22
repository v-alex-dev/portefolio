import './App.css'
import {createBrowserRouter, defer, RouterProvider} from "react-router-dom";
import Error404 from "./errors/404.jsx";
import Layouts from "./layouts/layouts.jsx";
import Home from "./layouts/home.jsx";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <Layouts/>
                </>
            ),
            errorElement: <Error404/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
            ]
        }
    ])


    return (
        <>
            <Header/>
            <RouterProvider router={router}/>
            <Footer/>
        </>
    )
}

export default App
