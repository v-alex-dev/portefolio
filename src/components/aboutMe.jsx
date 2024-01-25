import { useEffect, useState } from 'react';
import useWidthScreen from '../hooks/w-screen.js';
import { motion } from "framer-motion"; // Add the import statement for the motion component
import GallerieAboutMe from './gallerieAboutMe.jsx';
import TextOnMe from './textOnMe.jsx';
import photoMe from '../assets/PhotCV.jpg';

const AboutMe = () => {
  const screenWidth = useWidthScreen();
  const maxMobileWidth = 860; // Adjust this value based on your responsive design needs
  // State to manage whether the full text modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);


  const paragraphs = [
    "Ayant commencé ma carrière professionnelle en tant que chauffeur, ma passion pour l'informatique m'a conduit à explorer le domaine du développement web. Mon initiation a débuté dans le back-end, notamment avec l'environnement .NET C#, où j'ai acquis une solide compréhension des rouages techniques.",
    "Mon engagement envers le développement web s'est consolidé lors d'un stage chez Barestho, où j'ai eu l'opportunité de plonger dans une expérience full-stack en utilisant Django pour le back-end et React pour le front-end. Cette immersion complète m'a permis de développer mes compétences de manière holistique, en comprenant l'ensemble du processus de développement d'applications web, de la conception à la mise en œuvre.",
    "Fort de cette expérience, j'ai décidé de concentrer mes efforts sur le renforcement de mes compétences front-end. C'est à ce stade que j'ai rejoint la formation BeCode à Charleroi, cherchant à approfondir ma compréhension de la conception visuelle et interactive. Cette décision stratégique a été motivée par ma volonté de maîtriser pleinement l'aspect visuel des applications web et d'offrir des expériences utilisateur exceptionnelles.",
    "Mon parcours, bien que non conventionnel, reflète ma détermination à élargir mes horizons dans le domaine du développement web, passant du back end au full stack et se concentrant ensuite sur le front-end. Mon portfolio témoigne de cette évolution, illustrant mes compétences acquises à chaque étape de ce parcours diversifié."
  ];



  return (
    <div className="md:grid md:grid-cols-2 justify-items-center my-9 flex justify-center items-center ">
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
          <img src={photoMe} alt={'Alexandre'} className={`md:w-full rounded-full`} />
        </motion.div>
      )}

      <div className={"text-center py-10"}>
        <motion.div className={"flex flex-col items-center gap-8 p-4"} >
          <p>Développeur junior à la recherche de vos futurs bugs !</p>

          <button
            type={"button"}
            onClick={toggleModal}
            className={"rounded-full shadow shadow-light-orange w-20 active:bg-light-orange active:text-white"}>Read me</button>
        </motion.div>
      </div>

      {isModalOpen && (
        maxMobileWidth > screenWidth ? 
          ( <GallerieAboutMe toggleModal={toggleModal}  paragraphs={paragraphs}/> ) : ( <TextOnMe paragraphs={paragraphs} toggleModal={toggleModal}/> )
      )}
    </div>
  );
};

export default AboutMe;
