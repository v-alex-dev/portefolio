import cv from "../assets/alexandre-vens-cv.pdf";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import FormContactMe from "../components/formContactMe.jsx";

const Footer = () => {
  return(
    <Router>
      <footer className="bg-blue">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex justify-center items-center w-3/4 relative">
            <p className="text-white font-bold text-left md:absolute">Created by Vens Alexandre</p>
          </div>
          <div className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
            <ul className="font-bold text-white flex flex-col gap-4 items-center">
            
              <li>
                <NavLink to="/contact" className="link-hover-text">
                  Contact Me
                </NavLink>
              </li>
              <li>
                <a href={cv} download className="link-hover-text">My CV</a>
              </li>
              <li>
                <a href="https://github.com/v-alex-dev" className="" target="_blank">
                  <img src="../src/assets/github.svg" alt="github" className="md:w-10 w-5 bg-orange rounded-full p-1 hover:scale-125 duration-200 "/>
                </a>
                </li>
              <li>
                <a href="https://www.linkedin.com/in/vens-alexandre/" className="w-full" target="_bank">
                  <img src="../src/assets/linkledin.svg" alt="linkledin"  className="md:w-10 w-5 bg-orange rounded-lg hover:scale-125 duration-200"/>
                </a>
              </li>
          
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/contact" element={<FormContactMe />} />
        </Routes>
      </footer>
    </Router>
  )
}
export default Footer;