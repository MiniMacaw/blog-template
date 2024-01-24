
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true));

    return (
        <div className="py-0 px-8">
            <div className="flex flex-col justify-center px-8 w-full">
                <nav className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 border-gray-200 dark:border-gray-700 sm:pb-16">
                    <span className="text-gray-700 dark:text-gray-200 p-1 sm:px-3 sm:py-2 ">
                        Current theme: {mounted && resolvedTheme}
                    </span>

                    <div className="mx-auto ">
                        <div>
                            <div className=" text-p">primary</div>
                            <div className=" text-s">secondary</div>
                            <div className=" text-a">accent</div>
                            <div className=" text-white">white</div>
                            <div className=" text-black">black</div>
                        </div>
                    </div>

                    <button
                        onClick={() =>
                            setTheme(resolvedTheme === "dark" ? "light" : "dark")
                        }
                    >
                        Toggle theme {resolvedTheme === "dark" ? "light" : "dark"}
                    </button>
                </nav>
            </div>
        </div>
    );
}