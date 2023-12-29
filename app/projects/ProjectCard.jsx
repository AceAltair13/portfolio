'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCaretDownCircle } from "react-icons/io5";
import { IoCaretUpCircle } from "react-icons/io5";

export default function ProjectCard({ title, description, image, link, skills }) {

    const [isExpanded, setIsExpanded] = useState(false);
    const buttonClasses = "transition-color duration-200 text-2xl text-slate-400 hover:text-slate-100"

    return (
        <>
            <div className="group transition-colors duration-200 hover:bg-green-400 col-span-1 bg-slate-700 p-4 rounded-lg shadow-md">
                <div className="bg-slate-900 rounded p-1">
                    <Link href={link} target="_blank">
                        <Image src={image} alt={title} className="rounded h-44" />
                    </Link>
                    <div className="grid grid-cols-10">
                        <div className="col-span-9 px-2 pt-2">
                            {
                                isExpanded ?
                                    <div className="bg-slate-800 rounded-md flex flex-wrap p-1 mb-1">
                                        {
                                            skills.map((skill, index) => (
                                                <span key={index} className="text-slate-200 text-xs bg-slate-600 rounded-full px-2 py-1 m-1 shadow-md">{skill.title}</span>
                                            ))
                                        }
                                    </div>
                                    :
                                    <div className="grid grid-cols-9">
                                        {
                                            skills.map((skill, index) => (
                                                <span key={index} className="text-slate-200 text-lg col-span-1">{skill.icon}</span>
                                            ))
                                        }
                                    </div>
                            }
                        </div>
                        <div className="col-span-1 pt-2">
                            <button onClick={() => setIsExpanded(!isExpanded)}>
                                {isExpanded ? <IoCaretUpCircle className={buttonClasses} /> : <IoCaretDownCircle className={buttonClasses} />}
                            </button>
                        </div>
                    </div>
                </div>
                <h2 className="text-slate-100 text-2xl my-3 transition-colors duration-200 group-hover:text-black font-bold">{title}</h2>
                <p className="text-slate-300 text-base transition-colors duration-200 group-hover:text-black">{description}</p>
            </div>
        </>
    )
}