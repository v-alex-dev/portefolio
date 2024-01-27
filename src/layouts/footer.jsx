import cv from "../assets/alexandre-vens-cv.pdf";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import FormContactMe from "../components/formContactMe.jsx";
import github from "../assets/github.svg";
import linkedin from "../assets/linkledin.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Router>
      <footer className="bg-blue pb-5">
        <div className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8 w-1/2">
          <ul className="font-bold text-white flex  gap-4 items-center w-full justify-between">
            <li>
              <div>
                <NavLink
                  to="/contact"
                  className="link-hover-text text-orange">
                  Contactez moi
                </NavLink>
              </div>
            </li>
            <motion.div 
            initial={{opacity:0, rotate:290}}
            whileInView={{opacity:1, rotate:0}}
            transition={{duration:2, delay:0.5, type:"tween", ease:"easeInOut"}}
            viewport={{once:true}}
            className="h-8 w-0.5 bg-orange rounded-full"></motion.div>
            <li>
              <div>
                <a href={cv} download className="link-hover-text text-orange">Mon CV</a>

              </div>
            </li>
            <motion.div 
            initial={{opacity:0, rotate:290}}
            whileInView={{opacity:1, rotate:0}}
            transition={{duration:2, delay:0.5, type:"tween", ease:"easeInOut"}}
            viewport={{once:true}}
            className="h-8 w-0.5 bg-orange rounded-full"></motion.div>
            <li className="">
              <div>
                <a href="https://github.com/v-alex-dev" className="" target="_blank">
                  <img
                    src={github}
                    alt="github"
                    className="md:w-10 w-5 bg-orange rounded-full p-1 hover:bg-white duration-200 " />
                </a>
              </div>
            </li>
            <motion.div 
            initial={{opacity:0, rotate:290}}
            whileInView={{opacity:1, rotate:0}}
            transition={{duration:2, delay:0.5, type:"tween", ease:"easeInOut"}}
            viewport={{once:true}}
            className="h-8 w-0.5 bg-orange rounded-full"></motion.div>
            <li className="">
              <div>
                <a href="https://www.linkedin.com/in/vens-alexandre/" className="w-full" target="_bank">
                  <img src={linkedin} alt="linkedin" className="md:w-10 w-5 bg-orange rounded-lg hover:bg-white duration-200" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/contact" element={<FormContactMe />} />
        </Routes>
      </footer>
    </Router>
  )
}
export default Footer;