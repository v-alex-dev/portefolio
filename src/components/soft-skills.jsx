import React from 'react';
import {motion} from "framer-motion";

const SoftSkills = ({title, imgSrc, description, index}) => {
    return (
        <motion.div
            key={index} className={"flex flex-col gap-3 justify-center items-center p-8 md:w-1/2"}>
            <motion.div
                className={"flex flex-col justify-center items-center"}

                initial={{x:-300, opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{
                    delay:(index+0.3)/2,
                    duration:2.5,
                    type:"spring"
                }}
            >
                <h3 className={"text-center text-2xl"}>{title}</h3>
                <img src={imgSrc} alt={title} className={"w-28"}/>
            </motion.div>
            <motion.p
                className={"text-left px-4 pb-2 tracking-wide"}>{description}</motion.p>
        </motion.div>
    );
};

export default SoftSkills;