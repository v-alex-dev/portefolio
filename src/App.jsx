
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./layouts/header.jsx";
import Layouts from "./layouts/layouts.jsx";
import Footer from "./layouts/footer.jsx";
import Error404 from "./errors/404.jsx";
import Home from "./components/home.jsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <>
          <Layouts/>
        </>
    ),
    errorElement:<Error404/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
      }
    ]
  }
])
function App() {

  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
