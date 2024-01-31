'use client'

import { SelectTheme } from "@/components/select-theme"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routesText = [
    {
        path: "/",
        name: "Home",
    },{
        path: "/posts",
        name: "Blog",
    },
    {
        path: "/about",
        name: "About",
    },
    {
        path: "/contact",
        name: "Contact",
    }
]

export function MainHeader() {
    const pathname = usePathname()
    return (
        <header className="
        w-full flex h-[100px] bg-p px-10
        sticky top-0 z-50
        ">
            <div className="flex-1 flex items-center">
                <div className="w-10 h-10 grid bg-slate-400 ">
                    <Link href="/">
                        logo
                    </Link>
                </div>
            </div>
            <nav className="flex justify-center items-center">
                <ul className="flex justify-center items-center gap-4">
                    {
                        routesText.map((route) => (
                            <li
                                key={route.path}
                                className={
                                    pathname === route.path
                                        ? "text-s"
                                        : "text-white"
                                }
                            >
                                <Link href={route.path}>{route.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <SelectTheme />
            </nav>
        </header>
    );
}