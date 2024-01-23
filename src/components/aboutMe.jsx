import { useEffect, useState } from 'react';
import useWidthScreen from '../hooks/w-screen.js';
import { motion } from "framer-motion";

const AboutMe = () => {
    const screenWidth = useWidthScreen();
    const maxMobileWidth = 860; // Adjust this value based on your responsive design needs
    // State to manage whether the full text modal is open
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [styleModal, setStyleModale] = useState("");
    const [styleDivMain, setStyleDivMain] = useState("");

    // Function to toggle the modal state
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    useEffect(() => {
        const styleDivMain = () => {
            return isModalOpen ? "divMain" :
                "divMainClose"
        };
        setStyleDivMain(styleDivMain)
    
        const styleModal = () => {
            if (screenWidth > maxMobileWidth) {
                return isModalOpen ?
                    "text-left  tracking-normal flex flex-col justify-around self-center  " +
                    "w-screen gap-10 text-blue bg-light-gray backdrop-blur p-10 text-sm "
                    : "flex flex-col gap-10 overflow-hidden "
            }
            return "flex flex-col gap-10 p-5"
        }
        setStyleModale(styleModal)
    }, []);

    return (
        <div className={styleDivMain}>
            {screenWidth > maxMobileWidth && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                        opacity: { duration: 1.2 }, // Adjust the duration as needed
                        height: { duration: 1 },
                        exit: { duration: 1 },
                    }}
                    className={`w-48  `}>
                    <img src={'./src/assets/PhotCV.jpg'} alt={'Alexandre'} className={`md:w-full rounded-full`} />
                </motion.div>
            )}

            <div className={styleModal}>
                {!isModalOpen ?
                    <motion.div className={"flex flex-col items-center gap-8 p-4"} >
                        <p>Développeur junior à la recherche de vos futurs bug !</p>

                        <button
                            type={"button"}
                            onClick={toggleModal}
                            className={"rounded-full shadow shadow-light-orange w-20 active:bg-light-orange active:text-white"}>Read me</button>
                    </motion.div>
                    :
                    <motion.div
                        className={"flex flex-col gap-4 justify-center"}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            opacity: { duration: 1.2 }, // Adjust the duration as needed
                            height: { duration: 1 },
                            exit: { duration: 1 },
                        }}
                    >

                        <motion.p
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 1 }}>
                            Ayant commencé ma carrière professionnelle en tant que chauffeur, ma passion pour
                            l'informatique
                            m'a
                            conduit à explorer le domaine du <span>développement web</span> . Mon initiation a débuté
                            dans
                            le back-end,
                            notamment
                            avec l'environnement .NET C#, où j'ai acquis une solide compréhension des rouages
                            techniques.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "tween", duration: 1, delay: 0.3 }}>
                            Mon engagement envers le développement web s'est consolidé lors d'un stage chez Barestho, où
                            j'ai eu
                            l'opportunité de plonger dans une expérience <span>full stack</span> en utilisant Django
                            pour le back-end et
                            React pour le front-end. Cette immersion complète m'a permis de <span>développer mes compétences</span> de
                            manière holistique, en comprenant l'ensemble du processus de développement d'applications
                            web, de la
                            conception à la mise en œuvre.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "tween", duration: 1, delay: 0.6 }}>
                            Fort de cette expérience, j'ai décidé de concentrer mes efforts sur le renforcement de mes
                            compétences front-end. C'est à ce stade que j'ai rejoint la formation <span>BeCode</span> à
                            Charleroi, cherchant
                            à approfondir ma compréhension de la <span>conception visuelle et interactive</span> . Cette
                            décision stratégique
                            a été motivée par ma volonté de maîtriser pleinement l'aspect visuel des applications web et
                            d'offrir des expériences utilisateur exceptionnelles.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "tween", duration: 1, delay: 0.9 }}>
                            Mon parcours, bien que non conventionnel, reflète ma détermination à élargir mes horizons
                            dans le
                            domaine du développement web, passant du back end au full stack et se concentrant ensuite
                            sur le
                            front-end. Mon portfolio témoigne de cette évolution, illustrant mes compétences acquises à
                            chaque
                            étape de ce parcours diversifié.
                        </motion.p>
                        <button
                            type={"button"}
                            onClick={toggleModal}
                            className={"rounded-full shadow shadow-light-orange w-20 active:bg-light-orange active:text-white"}>Close</button>
                    </motion.div>

                }

            </div>

        </div>
    );
};

export default AboutMe;
