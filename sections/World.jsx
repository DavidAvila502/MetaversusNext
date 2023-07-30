"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
   <section className={`${styles.paddings} relative z-10`}>
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
         className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
         <TypingText title="| People on the world" textStyles="text-center" />

         <TitleText
            title={
               <>
                  Track friends around you and invite them to play together in
                  the same world
               </>
            }
            textStyles={"text-center"}
         />

         <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="relative mt-[68px] flex w-full h-[550px]"
         >
            <img
               src="/map.png"
               alt="map"
               className="w-full h-full object-cover"
            />

            <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
               <img
                  src="people-01.png"
                  alt="people"
                  className="w-full h-full"
               />
            </div>
            <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
               <img
                  src="people-02.png"
                  alt="people"
                  className="w-full h-full"
               />
            </div>
            <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
               <img
                  src="people-03.png"
                  alt="people"
                  className="w-full h-full"
               />
            </div>

            <div className="hidden sm:block absolute top-1/2 left-[15%] w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680]">
               <div className="w-full h-full bg-[url('/upside_down_map.png')] bg-no-repeat bg-cover p-[20px] flex items-end">
                  <div className="w-full flex flex-col items-center">
                     <div>
                        <div className="mb-[5px] flex flex-row items-center justify-end w-full h-[24px]">
                           <img
                              src="people-06.png"
                              alt="people"
                              className="w-[24px] h-[24px] absolute left-[40px] z-[3]"
                           />

                           <img
                              src="people-05.png"
                              alt="people"
                              className="w-[24px] h-[24px] absolute left-[50px] z-[2]"
                           />

                           <img
                              src="people-04.png"
                              alt="people"
                              className="w-[24px] h-[24px] absolute left-[60px] z-[1]"
                           />

                           <p className="text-white text-[11px] ml-[4px]">
                              + 264 has joined
                           </p>
                        </div>

                        <p className="text-white font-semibold">
                           The Upside Down
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="hidden sm:block absolute top-10 right-64  max-md:right-20 w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680]">
               <div className="w-full h-full bg-[url('/hawkins_labs.png')] bg-no-repeat bg-cover p-[20px] flex items-end">
                  <div className="w-full flex flex-col items-center">
                     <div>
                        <div className="mb-[5px] flex flex-row items-center justify-end w-full h-[24px]">
                           <img
                              src="people-06.png"
                              alt="people"
                              className="w-[24px] h-[24px] absolute left-[40px] z-[3]"
                           />

                           <img
                              src="people-05.png"
                              alt="people"
                              className="w-[24px] h-[24px] absolute left-[50px] z-[2]"
                           />

                           <img
                              src="people-04.png"
                              alt="people"
                              className="w-[24px] h-[24px] absolute left-[60px] z-[1]"
                           />

                           <p className="text-white text-[11px] ml-[4px]">
                              + 264 has joined
                           </p>
                        </div>

                        <p className="text-white font-semibold">
                           The Upside Down
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </motion.div>
   </section>
);

export default World;
