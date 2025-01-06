import type {Metadata} from "next";
import "./globals.css";

import siteMetadata from "@/content/metadata.json"
import Link from "next/link";
import Navbar from "@/app/navbar";

export const metadata: Metadata = {
    title: siteMetadata.title,
    description: siteMetadata.description,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const Contact = () => (
        <footer id="contact"
                className="bg-[#fee1ed] text-slate-800 dark:bg-slate-800 dark:text-[#fee1ed] p-4 flex flex-col lg:flex-row lg:justify-around">
            <Link className="hover:underline" href="https://bsky.app/profile/gaycoderprincess.bsky.social"> BlueSky:
                @gaycoderprincess.bsky.social</Link>
            <Link className="hover:underline" href="https://discord.gg/TB2Rbq2mRq"> Discord:
                discord.gg/TB2Rbq2mRq</Link>
            <Link className="hover:underline" href="https://github.com/gaycoderprincess/"> GitHub:
                gaycoderprincess</Link>
        </footer>
    )

    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        <Contact/>
        </body>
        </html>
    );
}
