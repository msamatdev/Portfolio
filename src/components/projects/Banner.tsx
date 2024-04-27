"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export interface ImgProp {
    fileName: string;
    alt: string;
}

export default function Banner( { alt }: ImgProp) {
    const path = usePathname()
    return (
        <Image
            src={`/images${path}/banner.jpg`}
            alt={alt}
            height={200}
            width={200}
            className="rounded-xl w-full h-56 object-cover md:p-0 px-4"
            unoptimized={true}
        />
    )
}