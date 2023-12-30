import { IoSchoolSharp } from "react-icons/io5";
import { education } from "../data/education";
import { FaLocationDot } from "react-icons/fa6";
import ItemHolder from "./ItemHolder";
import Image from "next/image";

function EducationCard(education) {
    return (
        <div className="bg-slate-600 rounded grid grid-cols-8 p-4">
            <div className="col-span-1 p-4">
                <Image placeholder="blur" src={education.image} alt={education.school} className="rounded-lg shadow-lg h-auto w-full" />
            </div>
            <div className="col-span-6 p-3">
                <h3 className="text-3xl font-extrabold text-slate-200">{education.school}</h3>
                <h4 className="text-xl text-green-400">{education.degree}</h4>
                <h6 className="text-md text-slate-300 mt-2"><FaLocationDot className="inline-icon" />{education.location}</h6>
                <p className="text-md text-slate-400">{education.start} - {education.end}</p>
                <div className="flex flex-wrap bg-slate-700 bg-opacity-75 rounded-md p-2 mt-4">
                    {
                        education.coursework.map((course, ind) => <p key={ind} className="rounded-full px-3 py-1 m-1 bg-slate-600 text-slate-300 border-2 border-slate-700">{course}</p>)
                    }
                </div>
            </div>
            <div className="col-span-1 text-end">
                <div>
                    <p className="text-slate-300 text-4xl font-extrabold">
                        {education.gpa}
                        <span className="text-lg text-slate-400">{" / "} {education.maxgpa}</span>
                    </p>
                    <p className="italic text-slate-400">{education.gpatype}</p>
                </div>
            </div>
        </div>
    )
}

export default function Education() {
    return (
        <ItemHolder title="Education" icon={<IoSchoolSharp className="inline-icon" />}>
            <div className="grid grid-cols-1 gap-5">
                {
                    education.map((edu, ind) => <EducationCard key={ind} {...edu} />)
                }
            </div>
        </ItemHolder>
    )
}
