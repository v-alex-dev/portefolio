import {motion} from "framer-motion";




const Skills = ({skills, title, initialX, isFoward}) => {

   return(

          <div className="relative pt-20">
              <h3 className={" text-dark opacity-30 text-9xl font-bold text-center absolute -left-4 -top-3 scale-150 font-blackOpsOne"}>{title}</h3>
              <div className={"grid grid-cols-2 md:grid-cols-5 gap-16 justify-items-center"}>
                  {skills.map((skill, index) => (
                        <motion.article
                          key={index}
                          className={isFoward ? "art-foward hover:shadow-gray-700 hover:shadow-xl duration-75 hover:text-orange text-white z-10" : "art-no-foward text-white z-10"}
                          initial={{opacity:0,}}
                          whileInView={{opacity:1, x:0}}
                          transition={{duration:1, delay:(index+1)/4, type:"spring"}}
                          viewport={{once:true}}
                        >
                          <motion.img 
                            src={skill.urlImg} 
                            alt={skill.name} 
                            className={"w-20"}
                            whileHover={isFoward? {rotate:[0,20,-20,0], duration:0.5, type:"spring"} : {rotate:[0,0,0]}}
                            
                            />
                          <motion.p
                              initial={{opacity:0}}
                              whileInView={{opacity:1}}
                              transition={{delay:(index+1.5)/5, duration:1, type:"spring"}}
                              viewport={{once:true}}
                              className={"font-bold"}>{skill.name}</motion.p>
                      </motion.article>
                  ))}
              </div>
          </div>
  )
}
export default Skills;