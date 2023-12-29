import Link from "next/link"
import { RESUME_LINK } from "../data/constants"

const Hero = () => {
    return (
        <div className='min-h-svh grid justify-around items-center grid-cols-2'>
            <div className='col-span-1 bg-gray-800 bg-opacity-85 p-8 rounded-3xl'>
                <h1 className='text-6xl font-extrabold text-slate-50 mb-4'>Hi, I am <span className="text-amber-500">Tirth</span>🙋🏻‍♂️</h1>
                <h2 className='text-2xl text-slate-300 mb-8'>A Passionate Programmer, Gamer and Student</h2>
                <p className='text-lg text-slate-400 mb-12'>
                    Dedicated software developer, known for leadership and organizational skills. Passionate coder, gamer, and volunteer, driven to innovate and impact the community.
                </p>
                <Link href={RESUME_LINK} target="_blank" className='bg-green-400 transition-colors hover:bg-green-600 px-6 py-3 rounded-full'>
                    View Resume
                </Link>
            </div>
            <div className='col-span-1'>
                <dotlottie-player src="https://lottie.host/2feb991f-a744-43cd-903a-be7b63269d41/CrySeVdJOD.json" background="transparent" speed="1" className="object-cover" direction="1" mode="normal" loop autoplay></dotlottie-player>
            </div>
        </div>
    )
}

export default Hero