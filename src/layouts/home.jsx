
import {useEffect, useRef, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import "../../public/descriptionTitle.svg";
import AboutMe from "../components/aboutMe.jsx";
import TitleSection from "../components/titleSection.jsx";
import ListFormations from "../components/listFormations.jsx";
import Skills from "../components/skils.jsx";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const controls = useAnimation();
    const scrollRef = useRef(null);

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
        const handleScroll = () => {
            const element = scrollRef.current;
            if (element) {
                const elementTop = element.offsetTop;
                const scrollPosition = window.scrollY + window.innerHeight;

                if (scrollPosition > elementTop) {
                    controls.start({opacity: 1});
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);


    return (
        <div id="home" className={"w-full overflow-y-auto"}>
            <section id={"description"}
                     className={"rounded relative md:my-10 my-20 md:pt-8"}>
                <TitleSection title={"About me"} urlIcon={"./descriptionTitle.svg"}/>
                <AboutMe/>

            </section>
            <section id={"formations"} className={"relative my-20 bg-blue rounded"}>
                <TitleSection title={"Formations"} urlIcon={"./maison.svg"}/>
                <ListFormations controls={controls}  scrollRef={scrollRef} loading={loading}/>
            </section>
            <section id={"skills"} className={"relative my-20"}>
                <TitleSection title={"Skills"} urlIcon={"./gears-solid.svg"}/>
                <Skills/>
            </section>
            <section id={"soft-skills"}>
                <h2>soft-skills</h2>
            </section>
        </div>
    )
}

export default Home;