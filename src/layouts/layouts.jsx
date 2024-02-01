import {NavLink, Outlet} from "react-router-dom";
import {motion} from "framer-motion";


const Layouts = () => {
    return (
        <main className={"flex flex-row md:w-full mx-auto md:bg-transparent w-full"}>
          
            <div className={"w-full flex justify-center"}>
                <Outlet/>
            </div>
        </main>
    )
}

export default Layouts;