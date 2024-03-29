import {getIndexPost} from "@/utils";
import PostItem from "@/components/post-item";

export default function Home() {
  return (
    <div className="py-0 px-8">
      <div className="flex flex-col justify-center px-8 w-full">
        <nav
          className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 border-gray-200 dark:border-gray-700 sm:pb-16">
          <div className="mx-auto">
            <div>
              <div className=" text-p">primary</div>
              <div className=" text-s">secondary</div>
              <div className=" text-a">accent</div>
              <div className=" text-white">white</div>
              <div className=" text-black">black</div>
            </div>
          </div>
        </nav>
        <div>
          {
            (() => {
              const post = getIndexPost()
              if (post) {
                return PostItem({post})
              } else {
                return <div>not found index page</div>
              }
            })()
          }
        </div>
      </div>
    </div>
  );
}