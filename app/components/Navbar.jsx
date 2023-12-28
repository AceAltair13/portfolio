import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

var navLinks = [
    {
        title: 'Home',
        path: '/',
        selected: true,
        icon: <FaHome className="inline-icon" />
    },
    {
        title: 'Skills',
        path: '/skills',
        selected: false,
        icon: <FaStar className="inline-icon" />
    },
    {
        title: 'Projects',
        path: '/',
        selected: false,
        icon: <FaMagic className="inline-icon" />
    },
    {
        title: 'About',
        path: '/',
        selected: false,
        icon: <FaInfoCircle className="inline-icon" />
    }
]

export default function Navbar() {
    return (
        <nav>
            <div className="rounded-full py-4 px-6 bg-white shadow-lg">
                {
                    navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`px-4 py-2 rounded-full ${link.selected ? 'bg-green-400 shadow mx-2' : 'hover:bg-slate-200 hover:shadow-inner mx-1'}`}
                        >
                            {link.icon} {link.title}
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}
