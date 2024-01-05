import {motion} from "framer-motion";


const currentSkills =
    [
        {
            urlImg:"",
            name:'Javascript'
        },
        {
            urlImg:"",
            name:'Typescript'
        },
        {
            urlImg:"",
            name:'NodeJs'
        },
        {
            urlImg:"",
            name:'SQL'
        },
        {
            urlImg:"",
            name:'React'
        },
        {
            urlImg:"",
            name:'Next.js'
        },
        {
            urlImg:"",
            name:'Tailwindcss'
        },
        {
            urlImg:"",
            name:'Git'
        },
    ]

const Skills = () => {
  return(
      <div className={"pt-8 grid grid-cols-2 justify-items-center"}>
          <div>
              <h3>Current skills</h3>
              <div className={"grid grid-cols-3 gap-3 justify-items-center"}>
                  {currentSkills.map((skill, index) => (
                      <motion.article key={index} className={"shadow shadow-light-orange grid grid-rows-2 justify-items-center"}>
                          <img src={skill.urlImg} alt={skill.name}/>
                          <p>{skill.name}</p>
                      </motion.article>
                  ))}
              </div>
          </div>
          <div>
              <h3>casual skils</h3>
          </div>
      </div>
  )
}
export default Skills;