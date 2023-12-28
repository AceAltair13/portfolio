import { skillGroup } from "./constants"

function SkillTile({ title, icon, index }) {
    return <div key={index} className="col-span-1 text-center">
        <div className="group bg-slate-800 rounded-3xl p-4 m-3 shadow-md hover:bg-green-400 hover:shadow-inner">
            <p className="text-5xl text-slate-200 group-hover:text-black">{icon}</p>
        </div>
        <p className="text-slate-200 text-lg">{title}</p>
    </div>
}

function SkillGroup({ skillName, skillIcon, skills, index }) {
    return <div key={index} className="my-12 bg-slate-700 rounded-3xl shadow-2xl py-12">
        <h1 className="text-4xl text-slate-200 font-extrabold text-center">
            {skillIcon} {skillName}
        </h1>
        <hr className="w-24 h-1 mx-auto my-2 bg-gray-900 border-0 rounded md:my-10" />
        <div className="grid grid-cols-6 px-8">
            {
                skills.map((skill, index) => (
                    <SkillTile key={index} title={skill.title} icon={skill.icon} />
                ))
            }
        </div>
    </div>
}

export default function Skills() {

    return (
        <div className="bg-slate-800 bg-opacity-75 px-8 pt-10 pb-1 mb-8 mt-16 rounded-xl">
            <h1 className="text-6xl font-extrabold text-center text-slate-50">Skill Vault</h1>
            {
                skillGroup.map((skill, index) => (
                    <SkillGroup key={index} skillName={skill.title} skills={skill.skills} skillIcon={skill.skillIcon} />
                ))
            }
        </div>
    )
}
