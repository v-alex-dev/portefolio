import {motion} from "framer-motion";
import HamburgerMenu from "../components/hamburgerMenu";
import useTitleSection from "../hooks/useTitleSection";

const Header = () => {
  const titleSection = useTitleSection();
  const vens = ["V", "e", "n", "s"];

    return (
        <>
            <header className={"h-96 md:h-56 flex flex-col items-center justify-center  bg-blue"}>
            <motion.div className="border-b w-full border-orange px-8">
              <ul className="flex  text-orange md:gap-36 gap-20 font-bold justify-around">
                {titleSection.map((element, index) => (
                  <li key={index} className="w-full flex justify-between">
                    
                    <a href={"#" + element} className="">
                      {element}
                    </a>
                    {index !== titleSection.length - 1 && (
                      <motion.span 
                        initial={{opacity:0}}
                        animate={{opacity:1, rotate: 360}}
                        transition={{
                          delay:0.5 + index/4,
                          duration: 1,
                          type: "tween",
                          ease: "easeInOut"
                      }}
                      className="">|</motion.span> )}
                  </li>
                ))}
              </ul>
            </motion.div>
            <HamburgerMenu/>
            <div className="flex items-center justify-between">
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
                className={"text-orange text-7xl w-2/3 text-center h-full mr-2"}> Alexandre 
              </h1>
              <div className={"flex justify-center"}>
                {vens.map((ven, index) => (
                  <motion.p
                    key={index}
                    initial={{opacity:0, y: -100}}
                    animate={{opacity:1, y: 0}}
                    transition={{
                        delay:0.5 + index/4,
                        duration: 1,
                        type: "tween",
                        ease: "easeInOut"
                    }}
                    className={"text-7xl text-orange font-bold vens-name"}>{ven}</motion.p>
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