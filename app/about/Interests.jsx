import React from 'react'
import ItemHolder from './ItemHolder'
import { MdInterests } from "react-icons/md";
import { interests } from '../data/interests';

export default function Interests() {
    return (
        <ItemHolder title="Interests" icon={<MdInterests className="inline-icon" />}>
            <div className="flex flex-wrap gap-3">
                {
                    interests.map((interest, index) => (
                        <p key={index} className="rounded-full text-slate-300 text-xl bg-slate-800 px-6 py-2">{interest}</p>
                    ))
                }
            </div>
        </ItemHolder>
    )
}
