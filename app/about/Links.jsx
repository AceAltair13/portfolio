import React from 'react'
import { GITHUB_LINK, EMAIL_ID, INSTAGRAM_LINK, LINKEDIN_LINK, LOCATION, PHONE_NUMBER } from '../data/constants'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const links = [
    {
        title: EMAIL_ID,
        icon: <MdEmail className="inline-icon" />,
        content: 'mailto:' + EMAIL_ID,
    },
    {
        title: 'Github',
        icon: <FaGithub className="inline-icon" />,
        content: GITHUB_LINK,
    },
    {
        title: 'LinkedIn',
        icon: <FaLinkedin className="inline-icon" />,
        content: LINKEDIN_LINK,
    },
    {
        title: 'Instagram',
        icon: <FaInstagram className="inline-icon" />,
        content: INSTAGRAM_LINK,
    },
    {
        title: PHONE_NUMBER,
        icon: <FaPhoneAlt className="inline-icon" />,
        content: 'tel:' + PHONE_NUMBER,
    },
    {
        title: LOCATION,
        icon: <FaLocationDot className="inline-icon" />,
        content: "",
    },
]

export default function Links() {
    return (
        <div className="columns-1 px-4 mt-4">
            {
                links.map((link, index) => (
                    <div key={index} className="text-slate-300 text-lg">
                        {link.icon}
                        <a href={link.content} target="_blank" className="ml-2">{link.title}</a>
                    </div>
                ))
            }
        </div>
    )
}
