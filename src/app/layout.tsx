import { cn } from "@/lib/utils";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from './../components/navbar/Navbar';
import ThemeButton from './../components/ThemeButton';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Portfolio • Mathis SAMAT",
    template: "%s • Mathis SAMAT"
  },
  description: "Portfolio of Mathis SAMAT"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" className="h-full colorsThemeTransition">
      <body className="relative h-full font-sans antialiased">
        <Providers>
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <ThemeButton />
          </main>
        </Providers>
      </body>
    </html>
  );
}
