import PageContainer from "../components/PageContainer";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function page() {
    return (
        <PageContainer title="Projects">
            <div className="grid grid-cols-3 gap-7 my-12">
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} skills={project.skills} />
                    ))
                }
            </div>
        </PageContainer>
    )
}
