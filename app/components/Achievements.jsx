import { FaTrophy } from "react-icons/fa";
import { achievements } from "../data/achievements";

export default function Achievements() {
    return (
        <div className="mt-28">
            <h1 className="text-5xl font-extrabold text-slate-200 text-center"><FaTrophy className="inline-icon" />{" "}Achievements</h1>
            <div className="mt-12 bg-gray-800 bg-opacity-85 p-10 rounded-3xl">
                <ul className="list-none text-slate-300 px-5 mx-8">
                    {
                        achievements.map((achievement, index) => (
                            <li key={index} className="text-xl my-3 p-3 rounded-lg border-l-green-600 border-l-8 border-r-8 border-r-green-600 bg-gray-700 bg-opacity-75">
                                <p className="pl-2">{achievement}</p>
                            </li>
                        ))
                    }
                </ul>
            </div >
        </div >
    )
}
