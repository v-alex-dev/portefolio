import './App.css'
import {createBrowserRouter, defer, RouterProvider} from "react-router-dom";
import Error404 from "./layouts/404.jsx";
import Layouts from "./layouts/layouts.jsx";
import Home from "./layouts/home.jsx";

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
          element:<Home/>
        },
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
