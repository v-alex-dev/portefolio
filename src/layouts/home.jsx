import Article from "../components/article.jsx";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import"../../public/descriptionTitle.svg";
import TitleSection from "../components/titleSection.jsx";
const Home = () => {
    const [loading, setLoading] = useState(true);

    const articleContent = [
        {
            parcours: "Technocité",
            url: 'https://technocite.be/',
            description: 'test'
        },
        {
            parcours: "Becode",
            url:'https://becode.org/fr/',
            description: 'test2'
        }
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {

                await new Promise((resolve) => setTimeout(resolve, 1000));
                setTimeout(setLoading(false), 2000)

            } catch (error) {
                console.error("Erreur lors de la récupération des données", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div id="home" className={"w-full"}>
            <section id={"description"}
                    className={"bg-white rounded md:p-4"}>
                <TitleSection title={"description"} urlImg={"../../public/descriptionTitle.svg"}/>
                <div id={"Parcours"} className={" md:grid md:grid-cols-2 gap-2"}>
                    {articleContent.map((item, index) => (
                        <motion.a
                            initial={{opacity: -1, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                ease: "easeOut",
                                type: "tween",
                                duration: 1,
                            }}
                            href={item.url}
                            key={index}
                            className={"bg-light-orange rounded-xl shadow-dark p-4 hover:shadow-2xl duration-150"}>
                            <Article title={item.parcours} description={item.description} loading={loading}/>
                        </motion.a>
                    ))}
                </div>
            </section>
            <section id={"skills"}>
                <h2>skills</h2>
            </section>
            <section id={"soft-skills"}>
                <h2>soft-skills</h2>
            </section>
        </div>
    )
}

export default Home;