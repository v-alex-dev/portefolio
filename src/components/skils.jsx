import {motion} from "framer-motion";



const Skills = ({skills, title, initialX}) => {
  return(

          <div>
              <h3 className={"text-blue text-2xl font-bold text-center my-8"}>{title}</h3>
              <div className={"grid grid-cols-3 gap-3 justify-items-center"}>
                  {skills.map((skill, index) => (
                      <motion.article
                          key={index}
                          className={"grid grid-rows-2 justify-items-center items-center p-4"}
                          initial={{opacity:0, x:initialX}}
                          whileInView={{opacity:1, x:0}}
                          exit={{opacity:1}}
                          transition={{duration:1, delay:(index+1)/2, type:"spring"}}
                      >
                          <img src={skill.urlImg} alt={skill.name} className={"w-20"}/>
                          <motion.p
                              initial={{opacity:0}}
                              whileInView={{opacity:1}}
                              exit={{opacity:1}}
                              transition={{delay:(index+1.5)/2, duration:1}}
                              className={"text-blue font-bold"}>{skill.name}</motion.p>
                      </motion.article>
                  ))}
              </div>
          </div>
  )
}
export default Skills;