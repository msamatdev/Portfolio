import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from 'next/link';
import Separator from "@/components/Separator";

export default function PrivacyPolicy() {
    return (
        <MaxWidthWrapper>
            <div className="max-w-5xl mx-auto mt-24 md:mt-36 lg:mt-44 px-6 flex flex-col items-start justify-center mb-12">
                <h1 className="text-center self-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-16 lg:mb-20">
                    Privacy policy
                </h1>
                <div id="thirdParty">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        Third party
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Only one third party is used by this website :{" "}
                        <Link
                            href="https://vercel.com/docs/concepts/analytics/privacy"
                            className="underline decoration-dashed underline-offset-4 decoration-1"
                        >
                            Vercel Analytics
                        </Link>
                        . It mainly tracks the number of visitors, their devices types, 
                        their devices OS, their country, the web vital, and
                        the number of times a page has been visited.
                        No other data is shared with any other third party, and there 
                        is not any intrusive tracking.
                    </p>
                </div>
                <div id="cookies" className="mt-16 lg:mt-20">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        Cookies
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                    The only cookie used on this website is from Vercel, the hosting provider. Vercel uses 
                    a cookie to store an identifier for each user session, in order to avoid counting the same user multiple times. 
                    It is only used by Vercel and not shared with any other third party.
                    </p>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}