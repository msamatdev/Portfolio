import { ReactNode } from "react";


export default function Text({ children }: {children: ReactNode}) {
    return (
        <div 
        className="max-w-3xl mx-8 my-6 text-lg text-muted-foreground text-left"
        >
            {children}
        </div>
    )
}