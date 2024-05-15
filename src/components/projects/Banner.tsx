"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            20,     // max tilt rotation (degrees)
	perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export interface ImgProp {
    fileName: string;
    alt: string;
}

export default function Banner( { alt }: ImgProp) {
    const path = usePathname()
    return (
        <Tilt options={defaultOptions} style={{width: '100%', transition: 'all 0.1s linear !important', margin: '8px 8px'}}>
            <Image
                src={`/images${path}/banner.jpg`}
                alt={alt}
                height={600}
                width={600}
                className="rounded-xl w-full h-56 object-cover border-muted border-2 shadow-md"
            />
        </Tilt>
    )
}