import { ReactNode } from "react";


export default function SubContent({ children }: { children: ReactNode }) {
    return (
        <div 
        className="w-full mx-8 mt-6 mb-16 text-lg text-muted-foreground text-left flex flex-col items-center justify-center"
        >
            {children}
        </div>
    )
}