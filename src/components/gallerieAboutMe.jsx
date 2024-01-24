import { useState } from "react";
import { motion } from "framer-motion";

const GallerieAboutMe =({ toggleModal, paragraphs}) =>{

  const [currentParagraph, setCurrentParagraph] = useState(0);
  const handleNextParagraph = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    }
  };
  const handlePreviewParagraph = () => {
    if (currentParagraph > 0) {
      setCurrentParagraph(currentParagraph - 1);
    }
  };

  return (
    <motion.div
      className={"modalAboutMe"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={toggleModal}
    >
      <motion.div
        className={"p-8 rounded-lg text-white flex flex-col gap-1 md:gap-4 justify-center items-center bg-blue md:mx-32"}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 1 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className='flex gap-2'>
          {currentParagraph > 0 && (
            <button
              type={"button"}
              onClick={handlePreviewParagraph}
              className={"rounded-full active:bg-light-orange active:text-white flex items-center"}
            >
              -
            </button>
          )}
        
          <p className='snap-start'>{paragraphs[currentParagraph]}</p>
          {currentParagraph < paragraphs.length - 1 && (
            <button
              type={"button"}
              onClick={handleNextParagraph}
              className={"rounded-full active:bg-light-orange active:text-white"}
            >
              +
            </button>
          )}
        </div>
        <button type='button' onClick={toggleModal}>Close</button>
      </motion.div>
    </motion.div>
  );
}

export default GallerieAboutMe;
