import { Link } from "react-router-dom";
import cv from "../assets/alexandre-vens-cv.pdf";

const Footer = () => {
  return(
      <footer className="bg-blue">
          <div>
            <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
              <ul>
                <li><a href="https://www.linkedin.com/in/vens-alexandre/" target="_blank" rel="noreferrer">My profile <img src="../src/assets/square-github.svg" alt="github"/></a></li>
                <li>Download : <a href={cv} download>My CV</a></li>
              </ul>
            </nav>
          </div>
      </footer>
  )
}

export default Footer;