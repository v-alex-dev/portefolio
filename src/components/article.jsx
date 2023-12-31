import Loader from "./loader.jsx";
import {motion} from "framer-motion";

const Article = ({ title, description, loading }) => {


    return (
        !loading ? (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay:0.2,
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut"
                }}
                className={"flex flex-col items-center gap-4 p-4"}
            >
                <h3 className={"text-blue underline text-2xl font-bold mb-3"}>{title}</h3>
                <p className={"text-blue font-medium mb-3"}>{description}</p>
            </motion.div>
        ) : (
            <Loader primaryColor={"#152837"} secondaryColor={"#E69F34"} />
        )
    );
};

export default Article;
