import { ReactNode } from "react";

export default function Content({children}: {children: ReactNode}) {
    return (
        <div className="max-w-3xl mt-6 md:p-2 p-6 flex flex-col items-center justify-center">
            {children}
        </div>
    )
}