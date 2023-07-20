import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2018</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Director"
            subTitle="National Association of Computer Science Students (NACOSS)"
            des="As the Software Director in the National Association of Computer Science Students (NACOSS) at Federal University Gashua, I have made significant achievements in enhancing the association's software infrastructure and supporting fellow students in their programming assignments and projects. Some of my accomplishments include:  Developed a QR code generator and verifier exclusively for NACOSS, enhancing efficiency in various processes, 
            Designed and implemented a live presentation software using Android as a camera, enabling seamless and interactive presentations., Created a versatile framework to display activities within ComputerAssisted students in the Computer Science department with practical programming lessons, fostering their technical skills and understanding. applications, offering the flexibility to expand to full-screen mode or view individual screens., Assisted students in the Computer Science department with practical programming lessons, fostering their technical skills and understanding."
          />
          
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
