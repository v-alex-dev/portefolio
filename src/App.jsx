import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// add the beginning of your app entry
import "vite/modulepreload-polyfill";
import background from "./assets/28V_generated-3.jpg";
import Error404 from "./errors/404.jsx";
import Footer from "./layouts/footer.jsx";
import Header from "./layouts/header.jsx";
import Home from "./layouts/home.jsx";
import Layouts from "./layouts/layouts.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Layouts />
        </>
      ),
      errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <Header />
      <img
        src={background}
        alt="background"
        className="fixed top-0 left-0 w-screen h-full -z-10"
      />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
