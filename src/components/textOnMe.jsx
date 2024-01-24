import React from "react";

const TextOnMe = ({paragraphs, toggleModal}) => {
  
  return(
    <div className="modalAboutMe">
      <div className="bg-blue flex flex-col justify-center items-center mx-20 p-10 rounded-xl gap-6">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={"text-left px-4 pb-2 tracking-wide text-white"}>{paragraph}</p>
      ))}
      <button type='button' onClick={toggleModal} className="rounded-full border border-orange text-white font-bold p-2">Close</button>
      </div>
      
    </div>
  )

}


export default TextOnMe;