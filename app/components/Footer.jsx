import Image from "next/image";
import WaveImage from "../../public/wave.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <Image src={WaveImage} alt="" className="pointer-events-none h-auto w-full select-none" />
            <div className="bg-green-700 flex justify-center items-center">
                <h1 className="mb-12 -mt-10 text-lg text-center text-slate-200 rounded-md select-none">
                    Created with ❤️ by <span className="transition-all hover:underline hover:text-yellow-400 hover:decoration-2 hover:decoration-yellow-400 hover:underline-offset-8"><Link target="_blank" href="https://www.linkedin.com/in/tirth-thoria-0165b31b0/">Tirth Thoria</Link></span> using Next.js 14 and Tailwind CSS.
                </h1>
            </div>
        </>
    )
}
