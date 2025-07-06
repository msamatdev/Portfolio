import { useTranslations } from "next-intl";
import Link from "next/link"

export default function Footer() {
    const t = useTranslations('Footer');
    
    return (
        <div className="p-4 md:px-8 gap-4 lg:my-6 mx-auto flex flex-wrap md:justify-between justify-center w-full max-w-[1100px] rounded-lg">
            <p className="font-semibold">Mathis SAMAT © 2025 - {t('allRightsReserved')}</p>
            <div className="flex items-center gap-6 text-muted-foreground decoration-dashed underline decoration-1 underline-offset-[5px]">
                <Link
                    href="/privacy-policy"
                >
                    {t('privacyPolicy')}
                </Link>

                <Link
                    href="/legal-notice"
                >
                    {t('legalNotice')}
                </Link>
            </div>
        </div>
    )
}