import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from 'next/link';
import Separator from "@/components/Separator";

export default function PrivacyPolicy() {
    return (
        <MaxWidthWrapper>
            <div className="max-w-5xl mx-auto mt-24 md:mt-36 lg:mt-44 px-6 flex flex-col items-start justify-center mb-12">
                <h1 className="text-center self-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                    Legal notice
                </h1>
                <div id="copyright" className="mt-16">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        1. Copyright Notice
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                    All content, including text, images, and graphics on this website is the property of 
                    Mathis SAMAT unless otherwise stated. This content is protected by copyright laws and 
                    international treaties. Unauthorized use, reproduction, or distribution of any material 
                    from this site is strictly prohibited without prior written consent from Mathis SAMAT.
                    </p>
                </div>
                <div id="owner" className="mt-16 lg:mt-20">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        2. Website Owner
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        The owner and administrator of this website is Mathis SAMAT. 
                        You can contact him at {" "}
                        <Link
                            href="mailto:mathis.samat@gmail.com"
                            className="underline decoration-dashed underline-offset-4 decoration-1"
                        >
                            mathis.samat@gmail.com
                        </Link>
                        .
                    </p>
                </div>
                <div id="hosting" className="mt-16 lg:mt-20">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        3. Website Hosting
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        This website is hosted by Vercel with the free plan.
                    </p>
                </div>
                <div id="links" className="mt-16 lg:mt-20">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        4. Links
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        This website may contain links to external websites that are not provided or 
                        maintained by Mathis SAMAT. These links are provided solely for your convenience 
                        and reference. He shall not be responsible for the content of any linked site, or 
                        any link contained within a linked site. In addition, all links towards this
                        website are permitted as long as the origin does not diffuse any content that
                        could be considered as offensive.
                    </p>
                </div>
                <div id="laws" className="mt-16 lg:mt-20">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        5. Laws and Data Collection
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Everything collected on this website is mentionned in the {" "}
                        <Link
                            href="/privacy-policy"
                            className="underline decoration-dashed underline-offset-4 decoration-1"
                        >
                            privacy policy
                        </Link>
                        . Also, the collected data follows the General Data Protection Regulation (GDPR).
                    </p>
                </div>
                <div id="noticeChanges" className="mt-16 lg:mt-20">
                    <h1 className="text-2xl md:text-4xl text-foreground font-semibold">
                        6. Changes to This Legal Notice
                        <Separator />
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Mathis SAMAT reserves the right to update or modify this legal notice at any time without 
                        prior notice. Your use of this website following any such change constitutes your agreement 
                        to follow and be bound by the updated legal notice.
                    </p>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}