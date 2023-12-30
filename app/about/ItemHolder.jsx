export default function ItemHolder({ title, icon, children }) {
    return (
        <div className="m-6 p-2">
            <h3 className="text-4xl font-extrabold text-slate-200 my-6">{icon}{" "}{title}</h3>
            {children}
        </div>
    )
}
