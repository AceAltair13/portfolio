import Image from "next/image";
import { experience } from "../data/experience"
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import ItemHolder from "./ItemHolder";

function ExperienceCard(experience) {
    return (
        <div className="bg-slate-600 rounded grid grid-cols-8 p-4">
            <div className="col-span-1 p-4">
                <Image placeholder="blur" src={experience.image} alt={experience.company} className="rounded-lg shadow-lg h-auto w-full" />
            </div>
            <div className="col-span-7 p-3">
                <h3 className="text-3xl font-extrabold text-slate-200">{experience.role}</h3>
                <h4 className="text-xl text-green-400">{experience.company}</h4>
                <h6 className="text-md text-slate-300 mt-2"><FaLocationDot className="inline-icon" />{experience.location}</h6>
                <p className="text-md text-slate-400">{experience.start} - {experience.end}</p>
                <ul className="list-disc p-4">
                    {
                        experience.description.map((desc, ind) => <li key={ind} className="text-slate-300">{desc}</li>)
                    }
                </ul>
                <div className="flex flex-wrap bg-slate-700 bg-opacity-75 rounded-md p-2 mt-4">
                    {
                        experience.skills.map((skill, ind) => <p key={ind} className="rounded-full px-3 py-1 m-1 bg-slate-600 border-2 border-slate-700 text-slate-300"><span className="text-slate-800">{skill.icon}</span>{" "}{skill.title}</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <ItemHolder title="Work Experience" icon={<MdWork className="inline-icon" />}>
            <div className="grid grid-cols-1 gap-5">
                {
                    experience.map((exp, ind) => <ExperienceCard key={ind} {...exp} />)
                }
            </div>
        </ItemHolder>
    )
}
