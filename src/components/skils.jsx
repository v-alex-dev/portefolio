import {motion} from "framer-motion";


const currentSkills =
    [
        {
            urlImg:"./src/assets/js.svg",
            name:'Javascript'
        },
        {
            urlImg:"./src/assets/typescript.svg",
            name:'Typescript'
        },
        {
            urlImg:"./src/assets/node-js.svg",
            name:'NodeJs'
        },
        {
            urlImg:"./src/assets/database-solid.svg",
            name:'SQL'
        },
        {
            urlImg:"./src/assets/react.svg",
            name:'React'
        },
        {
            urlImg:"./src/assets/next-js.svg",
            name:'Next.js'
        },
        {
            urlImg:"./src/assets/tailwind.svg",
            name:'Tailwindcss'
        },
        {
            urlImg:"./src/assets/github.svg",
            name:'Git'
        },
    ]

const Skills = () => {
  return(
      <div className={"pt-8 grid grid-cols-2 justify-items-center"}>
          <div>
              <h3 className={"text-blue text-2xl font-bold text-center my-8"}>Current skills</h3>
              <div className={"grid grid-cols-3 gap-3 justify-items-center"}>
                  {currentSkills.map((skill, index) => (
                      <motion.article
                          key={index}
                          className={"rounded-xl border grid grid-rows-2 justify-items-center items-center p-4"}
                          initial={{opacity:0, x:-200}}
                          animate={{opacity:1, x:0}}
                          transition={{duration:1, delay:(index+1)/2, type:"spring"}}
                      >
                          <img src={skill.urlImg} alt={skill.name} className={"w-20"}/>
                          <p className={"text-blue font-bold"}>{skill.name}</p>
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