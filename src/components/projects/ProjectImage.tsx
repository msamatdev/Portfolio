"use client";

import Image from "next/image"
import { ImgProp } from "@/components/projects/Banner"
import { usePathname } from "next/navigation"

export default function ProjectImage({ fileName, alt }: ImgProp) {
    const path = usePathname()
    return (
        <Image 
        alt={alt}
        src={`/images${path}/${fileName}`}
        width={500}
        height={500}
        className="object-cover max-h-[500px] w-auto rounded-md mt-10"
        />
    )
}