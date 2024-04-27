import Link from "next/link"

interface Title {
    title: string
    id: string
}

export default function SubTitle({ title, id }: Title) {
    return (
        <Link 
        href={`#${id}`}
        className="font-bold ms-2"
        id={id}
        >
            {title}
        </Link>
    )
}