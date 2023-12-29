import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function page() {
    return (
        <div className="bg-slate-800 bg-opacity-75 px-8 pt-10 pb-1 mb-8 mt-16 rounded-xl">
            <h1 className="text-6xl font-extrabold text-center text-slate-50">Projects</h1>
            <div className="grid grid-cols-3 gap-7 my-12">
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} skills={project.skills}/>
                    ))
                }
            </div>
        </div>
    )
}
