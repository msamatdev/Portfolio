import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GoBack() {
    return (
        <Link className="flex items-center text-primary"
        href="/projects">
            <ArrowLeft/>
            <p className="ms-[2px] tracking-tight text-[18px]">Go back to projects</p>
        </Link>
    )
}