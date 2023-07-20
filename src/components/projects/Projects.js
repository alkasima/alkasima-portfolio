import React from 'react'
import Title from '../layouts/Title'
import { projectOne} from "../../assets/index";
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Alkatube"
          des=" Alkatube: Discover trending movies, top-rated movies, and celebrity favorites in this dynamic movie app, expertly crafted designed with Reactjs and Tailwind Css  powered by themoviedb API.."
          src={projectOne}
          githubLink="https://github.com/alkasima/alkatube"
          websiteLink="https://alkatube.netlify.app/"

        />
      </div>
        
    </section>
  );
}

export default Projects