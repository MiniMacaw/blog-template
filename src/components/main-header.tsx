import { SelectTheme } from "@/components/select-theme"

const routesText = [
    {
        path: "/",
        name: "Home",
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
    return (
        <header className="
        w-full flex h-[100px] bg-p px-10
        sticky top-0 z-50
        ">
            <div className="flex-1 flex items-center">
                <div className="w-10 h-10 grid bg-slate-400 ">
                    <a href="/">
                        logo
                    </a>
                </div>
            </div>
            <nav className="flex justify-center items-center">
                <ul className="flex justify-center items-center gap-4">
                    {
                        routesText.map((route) => (<li key={route.path}><a href={route.path}>{route.name}</a></li>))
                    }
                </ul>
                <SelectTheme/>
            </nav>
        </header>
    );
}