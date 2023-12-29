'use client';
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { usePathname } from "next/navigation";
import { RESUME_LINK } from "../data/constants";

var navLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome className="inline-icon" />
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <FaStar className="inline-icon" />
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FaMagic className="inline-icon" />
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaInfoCircle className="inline-icon" />
    }
]

export default function Navbar() {

    const pathName = usePathname();

    return (
        <nav>
            <div className="rounded-full py-4 px-6 bg-white shadow-lg">
                {
                    navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`px-4 py-2 rounded-full ${pathName == link.path ? 'bg-green-500 shadow mx-2 text-slate-50' : 'transition-colors hover:bg-slate-200 hover:shadow-inner mx-1'}`}
                        >
                            {link.icon} {link.title}
                        </Link>
                    ))
                }
                <Link
                    href={RESUME_LINK}
                    target="_blank"
                    className="px-4 py-2 rounded-full shadow bg-red-700 text-white transition-colors hover:bg-red-600 hover:shadow-inner mx-1"
                >
                    <IoMdDocument className="inline-icon" /> Resume
                </Link>
            </div>
        </nav>
    )
}
