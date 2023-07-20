import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - Date</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FullStack Engineer"
            subTitle="Flashnet Global IT Solutions LTD - (2020 - Present)"
            result="NIGERIA"
            des="At Flashnet, I collaborated with a team as a full-stack developer, utilizing React for the frontend and Laravel for the backend, to develop the Zakiru Micro Savings project.
            This financial application enabled customer registration, deposits, withdrawals, and money transfers within the application. Working closely with the team, we successfully built the necessary API integrations, implemented the user interface, and ensured smooth functionality.
            This experience provided me with valuable insights into application development and strengthened my skills in both frontend and backend technologies.
            "
            skill="Skills: React.js, Laravel, Cascading Style Sheets(CSS), HTML, PHP, REST, Git, Laravel"
          />
          <ResumeCard
            title="Hytek Computer"
            subTitle="Software Developer - (2019 - 2020) "
            result="NIGERIA"
            des="During my time at Hytek Computer, I served as a full-stack developer, utilizing PHP, MySQL, and JavaScript to create complete applications. This involved working on both the front-end and back-end aspects of the projects, ensuring the smooth integration of various functionalities."
            skill="Skills: React.js, Laravel, CSS, HTML, JavaScript, PHP, Git"
          />
          <ResumeCard
            title="Freelancing"
            subTitle="FullStack Developer - (2017 - Date)"
            result="NIGERIA"
            des="Web development freelancing on upwork "
            skill="Skills: HTML, CSS, PHP, Wordpress, Laravel, React"
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
