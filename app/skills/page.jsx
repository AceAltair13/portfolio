import { skillGroup } from "../data/skills-groups"
import SkillGroup from "./SkillGroup"

export default function Skills() {
    return (
        <div className="bg-slate-800 bg-opacity-75 px-8 pt-10 pb-1 mb-8 mt-16 rounded-xl">
            <h1 className="text-6xl font-extrabold text-center text-slate-50">Skill Vault</h1>
            {
                skillGroup.map((skill, index) => (
                    <SkillGroup
                        key={index}
                        skillName={skill.title}
                        skills={skill.skills}
                        skillIcon={skill.skillIcon}
                    />
                ))
            }
        </div>
    )
}
