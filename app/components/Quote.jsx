import TirthImage from "../../public/tirth.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

export default function Quote() {
    return (
        <div className="grid grid-cols-3 p-8">
            <div className="col-span-1 px-6">
                <Image placeholder="blur" src={TirthImage} alt="Tirth Thoria" className="shadow-xl rounded-3xl h-auto w-full border-4 border-slate-800" />
            </div>
            <div className="col-span-2 px-12 bg-gray-800 bg-opacity-85 rounded-3xl p-10">
                <FaQuoteLeft className="text-3xl text-slate-200" />
                <p className="text-lg text-slate-300 py-4 text-justify">
                    {"Hello! My name is Tirth Thoria and I am currently pursuing Masters in Computer Science at California State University, Long Beach. I am a former Advanced App Engineering Associate at Accenture."}
                    <br /><br />
                    {" I'm a highly motivated software developer with a track record of delivering exceptional results in collaborative team environments. Known for strong leadership and organizational abilities, I've successfully managed projects and mentored others. Committed to making a positive impact through a relentless work ethic, I'm a passionate coder, avid gamer, and dedicated volunteer, driven by a desire to innovate and contribute to meaningful projects."}</p>
                <FaQuoteRight className="text-3xl text-slate-200 ml-auto" />
            </div>
        </div>
    )
}
