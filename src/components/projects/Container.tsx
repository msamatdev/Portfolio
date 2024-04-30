import { ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
    return (
        <div className="mt-24 md:mt-36 md:px-20 flex flex-col items-center justify-center smoothScroll">
            {children}
        </div>
    );
}