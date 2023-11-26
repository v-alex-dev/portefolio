import {NavLink, Outlet} from "react-router-dom";

const Layouts = () => {
    return (
        <main className={" flex flex-row"}>
            <div className={"w-1/5 border-r-2 border-b-2 rounded-br-2xl"} id={"dashboard"}>
                    <nav className={"flex flex-col justify-center ml-8"}>
                        <h2 className={"my-5"}>Routes</h2>
                        <ul className={"flex flex-col"}>
                            <li className={"my-4 w-10"}>
                                <NavLink to={"/"}>
                                    <div className={"w-full"}>
                                            <img className={"duration-1000 hover:scale-150"} src="/public/maison.svg" alt="home"/>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
            </div>
            <div className={"w-full flex justify-center"}>
                <Outlet/>
            </div>
        </main>
    )
}

export default Layouts;