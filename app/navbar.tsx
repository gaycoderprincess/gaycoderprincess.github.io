'use client'

import Link from "next/link";
import siteMetadata from "@/content/metadata.json";

const navPopout = () => {
    const element = document.querySelector('#nav-popout');
    // @ts-expect-error Element exists
    element.classList.toggle('flex');
    // @ts-expect-error Element exists
    element.classList.toggle('hidden');
}

const Navbar = () => (
    <nav className="bg-[#fee1ed] text-slate-800 dark:bg-slate-800 dark:text-[#fee1ed] sticky top-0 p-2 lg:p-4">
        <div className="hidden lg:flex justify-between">
            <Link className="px-4 text-xl hover:underline" href="/">{siteMetadata.title}</Link>
            <div className="flex items-center">
                <Link className="px-4 hover:underline" href="/">Home</Link>
                <Link className="px-4 hover:underline" href="/projects">Projects</Link>
                <Link className="px-4 hover:underline" href="/downloads">Downloads</Link>
                <Link className="px-4 hover:underline" href="#contact">Contact</Link>
            </div>
        </div>
        <div className="flex flex-col lg:hidden">
            <div className="flex justify-between">
                <Link className="p-2 text-xl" href="/">{siteMetadata.title}</Link>
                <button id="nav-button" onClick={navPopout}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
            </div>
            <div id="nav-popout" className="hidden flex-col">
                <Link className="p-2" href="/">Home</Link>
                <Link className="p-2" href="/projects">Projects</Link>
                <Link className="p-2" href="/downloads">Downloads</Link>
                <Link className="p-2" href="#contact">Contact</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;