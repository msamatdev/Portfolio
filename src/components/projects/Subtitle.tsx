import Link from "next/link"

interface Title {
    title: string
    id: string
}

export default function SubTitle({ title, id }: Title) {
    return (
        <Link 
        href={`#${id}`}
        className="font-bold text-2xl self-start scroll-mt-36"
        id={id}
        >   
            <span className="text-primary me-2">#</span>
            {title}
        </Link>
    )
}