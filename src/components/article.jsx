import Loader from "./loader.jsx";
import {motion} from "framer-motion";

const Article = ({ title, description, loading}) => {
    return (
        !loading ?

                    <article>
                        <h3 className={"text-blue underline"}>{title}</h3>
                        <p>{description}</p>
                    </article>

            :
                <Loader primaryColor={"#152837"} secondaryColor={"#E69F34"}/>

    )
}

export default Article