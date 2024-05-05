import { MessageCircle, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function LetsConnect() {
    return (
        <div className="w-full px-4">
            <p className="flex justify-center gap-1 items-center">
                <MessageCircle />
                <span className="font-semibold text-3xl">Let&apos;s connect !</span>
            </p>
            <p className="text-center mt-4 px-8 text-lg text-muted-foreground">My inbox is always open. If you have a question or if you want to get in touch, I&apos;ll try my best to get back to you!</p>
            <div className="mt-4 flex justify-center items-center gap-8">
                <Link 
                    href="https://www.linkedin.com/in/mathis-samat/"
                    className="p-[12px] rounded-full border-muted border-2 group"
                > 
                    <Linkedin className="size-6 group-hover:text-primary transition-colors duration-300"/>
                </Link>
                <Link 
                    href="https://www.github.com/msamatdev/"
                    className="p-[12px] rounded-full border-muted border-2 group"
                > 
                    <Github className="size-6 group-hover:text-primary"/>
                </Link>
            </div>
        </div>
    )
}