import {useEffect, useRef, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import "../../public/descriptionTitle.svg";
import AboutMe from "../components/aboutMe.jsx";
import TitleSection from "../components/titleSection.jsx";
import ListFormations from "../components/listFormations.jsx";
import Skills from "../components/skils.jsx";
import inView from "in-view";
import {currentSkills, casualSkills, softSkills} from "../utils/all-skills.js";
import SoftSkills from "../components/soft-skills.jsx";
import ShowProject from "../components/ShowProject.jsx";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const controls = useAnimation();
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (inView.is(scrollRef.current)) {
                controls.start({ opacity: 1 });
            }
        };

        inView(scrollRef.current, () => {
            controls.start({ opacity: 1 });
        });

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);


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
            <section 
                     className={"rounded relative md:py-10 py-20 bg-opacity-10 bg-gray-400 "}>
                <TitleSection title={"A propos"} urlIcon={"./descriptionTitle.svg"}/>
                <AboutMe/>
                <ShowProject/>
            </section>
           
            <motion.section
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                className={"relative py-20 bg-blue"}>
                <TitleSection title={"Skills"} urlIcon={"./gears-solid.svg"}/>
                <div className={"pt-8 flex flex-col items-center"}>
                    <Skills skills={currentSkills} title={"Current skills"} initialX={-150} isFoward/>
                    <div className="h-0.5 shadow-xl w-1/2 my-20 bg-light-orange"></div>
                    <Skills skills={casualSkills} title={"Occasional"} initialX={150}/>
                </div>
            </motion.section>
            <motion.section
                className={"relative py-20 bg-opacity-10 bg-gray-600 rounded"}>
                <TitleSection title={"Soft-Skills"} urlIcon={"./star-regular.svg"}/>
                <motion.div
                    className={"pt-10 text-blue font-bold flex flex-wrap justify-center"}>
                    {softSkills.map((item, index) => (
                        <SoftSkills
                            title={item.title}
                            description={item.description}
                            imgSrc={item.imgSrc}
                            key={index}/>
                    ))}
                </motion.div>
            </motion.section>
            <motion.section
                            ref={scrollRef}
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                        className={"relative py-20 bg-blue rounded border-b border-black"}>
                <TitleSection title={"Formations"} urlIcon={"./maison.svg"}/>
                <ListFormations loading={loading}/>
            </motion.section>

        </div>
    )
}

export default Home;