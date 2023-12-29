function SkillTile({ title, icon }) {
    return <div className="group col-span-1 text-center bg-slate-600 rounded-3xl shadow-md">
        <div className="bg-slate-800 p-4 rounded-tl-3xl rounded-tr-3xl transition-colors duration-200 group-hover:bg-green-400 group-hover:shadow-inner">
            <p className="text-5xl text-slate-200 transition-colors duration-200 group-hover:text-black">{icon}</p>
        </div>
        <p className="text-slate-200 text-lg my-2">{title}</p>
    </div>
}

export default function SkillGroup({ skillName, skillIcon, skills }) {
    return <div className="my-12 bg-slate-700 rounded-3xl shadow-2xl py-12">
        <h1 className="text-4xl text-slate-200 font-extrabold text-center">
            {skillIcon} {skillName}
        </h1>
        <hr className="w-24 h-1 mx-auto my-2 bg-gray-900 border-0 rounded md:my-10" />
        <div className="grid grid-cols-6 px-8 gap-5">
            {
                skills.map((skill, index) => (
                    <SkillTile key={index} title={skill.title} icon={skill.icon} />
                ))
            }
        </div>
    </div>
}