import {motion} from "framer-motion";

const Header = () => {

    return (
        <>
            <header className={"h-96 md:h-56 flex flex-col items-center justify-center  bg-blue"}>
                <motion.h1
                    initial={{opacity: -1}}
                    animate={{opacity: 1}}
                    transition={{
                        duration: 1,
                        type: "tween",
                        ease: "easeInOut"
                    }}
                    className={"font-bold text-5xl text-orange w-2/3 mx-auto mb-4 text-center"}>Portfolio Alexandre Vens
                </motion.h1>
                <motion.blockquote
                    initial={{opacity: -1}}
                    animate={{opacity: 1}}
                    transition={{
                        delay:0.2,
                        duration: 1,
                        type: "tween",
                        ease: "easeInOut"
                    }}
                    className={"font-bold text-2xl text-amber-50 w-2/3 text-center"}>
                        Developer FrontEnd junior
                </motion.blockquote>
            </header>
        </>
    )
}

export default Header;