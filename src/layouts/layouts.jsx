import {NavLink, Outlet} from "react-router-dom";
import {motion} from "framer-motion";

const Layouts = () => {
    return (
        <main className={"flex flex-row w-10/12 mx-auto md:bg-light-gray"}>
            <div className={"w-full flex justify-center"}>
                <Outlet/>
            </div>
        </main>
    )
}

export default Layouts;