import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
    
      
      <div className="flex flex-wrap mr-10 pl-5">
  <div className="w-full md:w-1/2">
    <ProjectsCard
      title="Alkatube"
      des="Alkatube: Discover trending movies, top-rated movies, and celebrity favorites in this dynamic movie app, expertly crafted designed with Reactjs and Tailwind CSS powered by themoviedb API.."
      src={projectOne}
      githubLink="https://github.com/alkasima/alkatube"
      websiteLink="https://alkatube.netlify.app/"
    />
  </div>

  <div className="w-full md:w-1/2">
    <ProjectsCard
      title="Flashjobs"
      des="Flashjobs: Flashjobs is a sleek job board application designed with Laravel and Tailwind CSS. It features a powerful job search filter and secure user authentication for a seamless job-seeking experience..."
      src={projectTwo}
      githubLink="https://github.com/alkasima/flashjobs"
      websiteLink="https://flashjobs.fly.dev/"
    />
  </div>
</div>



      
        
    </section>
  );
}

export default Projects