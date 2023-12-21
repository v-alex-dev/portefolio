import {NavLink, Outlet} from "react-router-dom";
import {motion} from "framer-motion";

const Layouts = () => {
    return (
        <main className={"flex flex-row"}>
            <motion.div
                className={"w-1/5 border-r-2 border-b-2 rounded-br-2xl"}
                id={"dashboard"}
                initial={{x: -100}}
                animate={{x: 0}}
                transition={{
                    duration: 0.5,
                    type: 'spring',

                }}
            >
                <nav className={"flex flex-col justify-center mx-5 my-3 text-center"}>
                    <ul className={"flex flex-col"}>
                        <li className={"mb-2 w-2/3"}>
                            <NavLink to={"/"}>
                                <div className={"w-full"}>
                                    <svg  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
                                        <path
                                            d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/>
                                    </svg>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </motion.div>
            <div className={"w-full flex justify-center"}>
                <Outlet/>
            </div>
        </main>
    )
}

export default Layouts;