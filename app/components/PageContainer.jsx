export default function PageContainer({ title, children }) {
    return (
        <div className="bg-slate-800 bg-opacity-75 px-8 pt-10 pb-1 mb-8 mt-16 rounded-xl">
            <h1 className="text-6xl font-extrabold text-center text-slate-50">{title}</h1>
            {children}
        </div>
    )
}
