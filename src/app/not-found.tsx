import Link from "next/link";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Not found',
};

export default function NotFound() {
    return (
        <div className="md:mt-48 mt-28 flex flex-col justify-center items-center">
            <p className="md:text-6xl text-4xl font-bold">404 - Page not found</p>
            <p className="mt-8 text-xl text-muted-foreground">The page you are looking for does not exist.</p>
            <Link
            href="/"
            className={clsx("mt-8 flex justify-center items-center", buttonVariants())}
            >
                <Rocket />
                <p className="ms-2 text-lg font-semibold">Return home</p>
            </Link>
            <Image 
            src="/images/not-found.svg"
            alt="Not found"
            className="mt-24"
            width={400}
            height={400}
            />
        </div>
    );
}