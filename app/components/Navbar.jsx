'use client';
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { usePathname } from "next/navigation";

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
                            className={`px-4 py-2 rounded-full ${pathName == link.path ? 'bg-green-400 shadow mx-2' : 'transition-colors duration-200 hover:bg-slate-200 hover:shadow-inner mx-1'}`}
                        >
                            {link.icon} {link.title}
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}
