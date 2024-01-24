import {useEffect, useRef, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import "../../public/descriptionTitle.svg";
import AboutMe from "../components/aboutMe.jsx";
import TitleSection from "../components/titleSection.jsx";
import ListFormations from "../components/listFormations.jsx";
import Skills from "../components/skils.jsx";
import inView from 'in-view';
import {currentSkills, casualSkills, softSkills} from "../utils/all-skills.js";
import SoftSkills from "../components/soft-skills.jsx";

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
        <div id="home" className={"w-full overflow-y-auto"}>
            <section id={"description"}

                     className={"rounded relative md:py-10 py-20 md:mt-24"}>
                <TitleSection title={"About me"} urlIcon={"./descriptionTitle.svg"}/>
                <AboutMe/>

            </section>
            <motion.section id={"formations"}
                            ref={scrollRef}
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                        className={"relative py-20 bg-blue rounded border-b border-black"}>
                <TitleSection title={"Formations"} urlIcon={"./maison.svg"}/>
                <ListFormations loading={loading}/>
            </motion.section>
            <motion.section
                id={"soft-skills"}
                className={"relative py-20 bg-blue rounded"}>
                <TitleSection title={"Soft-Skills"} urlIcon={"./star-regular.svg"}/>
                <motion.div
                    className={"pt-10 text-white font-bold flex flex-wrap justify-center"}>
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
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                id={"skills"} className={"relative py-20"}>
                <TitleSection title={"Skills"} urlIcon={"./gears-solid.svg"}/>
                <div className={"pt-8 md:grid md:grid-cols-2 md:justify-items-center flex flex-col"}>
                    <Skills skills={currentSkills} title={"Current skills"} initialX={-150}/>
                    <Skills skills={casualSkills} title={"Casual Skills"} initialX={150}/>
                </div>
            </motion.section>

        </div>
    )
}

export default Home;