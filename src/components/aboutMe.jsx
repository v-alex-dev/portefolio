
import { useState } from 'react';
import useWidthScreen from '../hooks/w-screen.js';

const AboutMe = () => {
    const screenWidth = useWidthScreen();
    const maxMobileWidth = 860; // Adjust this value based on your responsive design needs

    // State to manage whether the full text modal is open
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle the modal state
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={`flex flex-row md:w-full gap-2 md:gap-4 items-center justify-around bg-light-gray p-4 rounded-2xl relative md:mt-10  mx-8`
        + isModalOpen? "absolute bg-white" : ""}>
            {screenWidth > maxMobileWidth && (
                <div className={`w-1/4`}>
                    <img src={'./src/assets/PhotCV.jpg'} alt={'Alexandre'} className={`md:w-full rounded-full`} />
                </div>
            )}

            <div className={`text-left font-bold tracking-normal flex flex-col w-2/3 bg-white`} onClick={toggleModal}>

                {isModalOpen ? (
                    <p className={"z-50"} onClick={toggleModal}>
                        Ayant commencé ma carrière professionnelle en tant que chauffeur, ma passion pour l'informatique m'a
                        conduit à explorer le domaine du développement web. Mon initiation a débuté dans le back-end,
                        notamment
                        avec l'environnement .NET C#, où j'ai acquis une solide compréhension des rouages techniques.

                        Mon engagement envers le développement web s'est consolidé lors d'un stage chez Barestho, où j'ai eu
                        l'opportunité de plonger dans une expérience full stack en utilisant Django pour le back-end et
                        React pour le front-end. Cette immersion complète m'a permis de développer mes compétences de
                        manière holistique, en comprenant l'ensemble du processus de développement d'applications web, de la
                        conception à la mise en œuvre.


                        Fort de cette expérience, j'ai décidé de concentrer mes efforts sur le renforcement de mes
                        compétences front-end. C'est à ce stade que j'ai rejoint la formation BeCode à Charleroi, cherchant
                        à approfondir ma compréhension de la conception visuelle et interactive. Cette décision stratégique
                        a été motivée par ma volonté de maîtriser pleinement l'aspect visuel des applications web et
                        d'offrir des expériences utilisateur exceptionnelles.

                        Mon parcours, bien que non conventionnel, reflète ma détermination à élargir mes horizons dans le
                        domaine du développement web, passant du back end au full stack et se concentrant ensuite sur le
                        front-end. Mon portfolio témoigne de cette évolution, illustrant mes compétences acquises à chaque
                        étape de ce parcours diversifié.
                    </p>
                ) : (
                    <p className={"line-clamp-6"}>
                        Ayant commencé ma carrière professionnelle en tant que chauffeur, ma passion pour l'informatique m'a
                        conduit à explorer le domaine du développement web. Mon initiation a débuté dans le back-end,
                        notamment
                        avec l'environnement .NET C#, où j'ai acquis une solide compréhension des rouages techniques.

                        Mon engagement envers le développement web s'est consolidé lors d'un stage chez Barestho, où j'ai eu
                        l'opportunité de plonger dans une expérience full stack en utilisant Django pour le back-end et
                        React pour le front-end. Cette immersion complète m'a permis de développer mes compétences de
                        manière holistique, en comprenant l'ensemble du processus de développement d'applications web, de la
                        conception à la mise en œuvre.


                        Fort de cette expérience, j'ai décidé de concentrer mes efforts sur le renforcement de mes
                        compétences front-end. C'est à ce stade que j'ai rejoint la formation BeCode à Charleroi, cherchant
                        à approfondir ma compréhension de la conception visuelle et interactive. Cette décision stratégique
                        a été motivée par ma volonté de maîtriser pleinement l'aspect visuel des applications web et
                        d'offrir des expériences utilisateur exceptionnelles.

                        Mon parcours, bien que non conventionnel, reflète ma détermination à élargir mes horizons dans le
                        domaine du développement web, passant du back end au full stack et se concentrant ensuite sur le
                        front-end. Mon portfolio témoigne de cette évolution, illustrant mes compétences acquises à chaque
                        étape de ce parcours diversifié.
                    </p>
                )}

            </div>

        </div>
    );
};

export default AboutMe;
