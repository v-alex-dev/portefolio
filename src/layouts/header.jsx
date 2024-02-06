import {motion} from "framer-motion";
import HamburgerMenu from "../components/hamburgerMenu";
import useTitleSection from "../hooks/useTitleSection";
import { useEffect, useState } from "react";

const Header = () => {

  const titleSection = useTitleSection();
  const vens = ["V", "e", "n", "s"];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
        <>
            <header className={"h-96  flex flex-col items-center justify-between  bg-blue pb-10"}>
            {screenWidth > 768 ? 
            (
              <motion.div className="border-b w-full border-orange px-8 flex justify-start mt-4">
              <ul className="grid grid-cols-4 w-full mb-4 text-center text-orange md:gap-36 gap-20 font-bold">
                {titleSection.map((element, index) => (
                        <motion.li 
                          key={index} 
                          className={"hover:text-white duration-200 hover:cursor-pointer hover:scale-110"}
                          initial={{opacity:0}}
                          animate={{opacity:1}}
                          transition={{
                            delay:0.5 + index/4,
                            duration: 1,
                            type: "tween",
                            ease: "easeInOut"
                          
                          }}
                          >
                          <a href={"#" + element} className={""}>
                            {element}
                          </a>
                          </motion.li>
                        ))}
                    </ul>
                  </motion.div>
            ):
            (
              <HamburgerMenu titleSection={titleSection}/>
            )
            }
            
            <div className="flex flex-col md:flex-row items-center justify-between pb-28">
            <motion.div 
             initial={{x:-500, opacity:0}}
             animate={{x:0, opacity:1}}
             transition={{
                 duration: 1,
                 type: "spring",
                 ease: "easeInOut"
             }}
            className="flex justify-between mr-8">
              <h1
                className={"text-orange text-5xl md:text-7xl w-2/3 text-center h-full mr-2"}> Alexandre
              </h1>
              <div className={"flex justify-center"}>
                {vens.map((ven, index) => (
                  <motion.p
                    key={index}
                    className={"text-5xl md:text-7xl text-orange font-bold vens-name"}>{ven}</motion.p>
                ))} 
                </div>
            </motion.div>
                
                
                <motion.div
                    initial={{x: 500, opacity:0}}
                    animate={{x: 0, opacity:1}}
                    transition={{
                        delay:0.5,
                        duration: 1,
                        type: "spring",
                        ease: "easeInOut"
                    }}
                    className={"font-medium text-2xl text-amber-50 w-2/3 text-center"}>
                         <p className="border-b border-white">Full-stack</p>
                         <p>Developer junior</p> 
                </motion.div>
            </div>
            </header>
        </>
    )
}

export default Header;