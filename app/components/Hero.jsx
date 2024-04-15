import Link from "next/link"
import { RESUME_LINK } from "../data/constants"

const Hero = () => {
    return (
        <div className='lg:min-h-svh min-h-[65svh] grid md:grid-cols-2 justify-around md:items-center'>
            <div className="md:col-span-1">
                <div className='bg-gray-800 bg-opacity-85 p-10 rounded-3xl md:mt-0 mt-20 md:text-left text-center'>
                    <h1 className='text-4xl md:text-6xl font-extrabold text-slate-50 mb-4 md:text-left text-center'>Hi, I am <span className="text-amber-500">Tirth</span>🙋🏻‍♂️</h1>
                    <h2 className='text-xl md:text-2xl text-slate-300 mb-8'>A Passionate Programmer, Gamer and Student</h2>
                    <p className='text-base md:text-lg text-slate-400 mb-12'>
                        Dedicated software developer, known for leadership and organizational skills. Passionate coder, gamer, and volunteer, driven to innovate and impact the community.
                    </p>
                    <Link href={RESUME_LINK} target="_blank" className='text-lg bg-green-600 text-slate-50 transition-colors hover:bg-green-700 px-6 py-4 rounded'>
                        View Resume
                    </Link>
                </div>
            </div>
            <div className='md:col-span-1 md:mt-0 mt-12'>
                <dotlottie-player src="https://lottie.host/2feb991f-a744-43cd-903a-be7b63269d41/CrySeVdJOD.json" background="transparent" speed="1" className="object-cover" direction="1" mode="normal" loop autoplay></dotlottie-player>
            </div>
        </div>
    )
}

export default Hero