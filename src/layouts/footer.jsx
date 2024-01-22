import cv from "../assets/alexandre-vens-cv.pdf";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import FormContactMe from "../components/formContactMe.jsx";

const Footer = () => {
  return(
    <Router>
      <footer className="bg-blue">
        <div>
          <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
            <ul className="font-bold text-white">
              <li>
                <NavLink to="/contact" className="link-hover-text">
                  Contact Me
                </NavLink>
              </li>
              <li>
                <a href={cv} download className="link-hover-text">My CV</a>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/contact" element={<FormContactMe />} />
        </Routes>
      </footer>
    </Router>
  )
}
export default Footer;