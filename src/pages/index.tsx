import ToggleThemeBtn from "@/components/ToggleThemeBtn";
export default function Home() {
    return (
        <div className="py-0 px-8">
            <div className="flex flex-col justify-center px-8 w-full">
                <nav className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 border-gray-200 dark:border-gray-700 sm:pb-16">
                    <div className="mx-auto">
                        <div>
                            <div className=" text-p dark:text-red-500">primary</div>
                            <div className=" text-s">secondary</div>
                            <div className=" text-a">accent</div>
                            <div className=" text-white">white</div>
                            <div className=" text-black">black</div>
                        </div>
                    </div>
                    <ToggleThemeBtn />
                </nav>
            </div>
        </div>
    );
}