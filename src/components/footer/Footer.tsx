import Link from "next/link"

export default function Footer() {
    return (
        <div className="p-4 md:px-8 gap-4 lg:my-6 mx-auto flex flex-wrap md:justify-between justify-center w-full max-w-[1100px] rounded-lg">
            <p className="font-semibold">Mathis SAMAT © 2024 - All rights reserved</p>
            <div className="flex items-center gap-6 text-muted-foreground decoration-dashed underline decoration-1 underline-offset-[5px]">
                <Link
                    href="/privacy-policy"
                >
                    Privacy policy
                </Link>

                <Link
                    href="/legal-notice"
                >
                    Legal notice
                </Link>
            </div>
        </div>
    )
}