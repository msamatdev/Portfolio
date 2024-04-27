import Image from "next/image"
import { ImgProp } from "@/components/projects/Banner"
import { usePathname } from "next/navigation"

export default function ProjectImage( {fileName, alt}: ImgProp) {
    const path = usePathname()
    return (
        <Image 
        alt={alt}
        src={`/images${path}/${fileName}`}
        width={200}
        height={200}
        className="object-cover max-w-3xl rounded-md"
        />
    )
}