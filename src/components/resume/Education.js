import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Federal University Gashua"
            subTitle="Bsc. Computer Science (2015 - 2018)"
            result="Completed"
            des="Studied computer science courses Data Strucute and Algorithm, Cryptography, Database management and Mathematics"
          />
          <ResumeCard
            title="Federal Polytechnic Damaturu"
            subTitle="Diploma in Computer Science"
            result="Completed"
            des="Studied Computer Science courses Introduction to computer programming, OO Basic programming, and Mathematics"
          />
          <ResumeCard
            title="Government Science & Technical College"
            subTitle="Science (2003 - 2009)"
            result="Completed"
            des="Studied science in this school Subjects: English, Mathematics, Physics, Computer, Geography, Chemistry."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" JavaScript Algorithms and Data Structure"
            subTitle="FreeCodeCamp - (2022)"
            result="Online"
            des="Learned Basic JavaScript, ES6, Regular Expressions, Debugging, Basic Data Structures, Basic Algorithm Scripting, Object Oriented Programming"
          />
          <ResumeCard
            title="Network Security & Database Vulnerability"
            subTitle="Coursera - (2020)"
            result="Online"
            des="Learned Network basics around the TCP/IP and OSI Models, Describe the structures and vulnerabilities of key databases for cybersecurity including SQL, Couch, Oracle and MongoDB."
          />
          <ResumeCard
            title="ISC2 Certified Secure Software Life-Cycle Profressional (CSSLP)"
            subTitle="Cybrary - 2020"
            result="Online"
            des=" Learned applying secure coding, practices to each phase of the software development lifecycle"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education