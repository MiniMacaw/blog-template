import {MaybePost, Post} from "@/type";
import Link from "next/link";
import dayjs from "dayjs";

//TODO:implement previous and nest post


function PostCard(
  {post}: { post: Post }
) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-p hover:text-s"
        >
          {post.title}
        </Link>
      </h2>
      <div className="flex gap-2">
        <time dateTime={post.date} className="mb-2 block text-xs text-c1">
          {dayjs(post.date).format("MMMM D, YYYY")}
        </time>
        <span className="mb-2 block text-xs text-c1">
          {post.duration} min read
        </span>

      </div>

      <div className="group block w-full">
        <div className="bg-blue-500 text-white p-2">
          hover show post info
        </div>
        <div className="h-0 overflow-hidden group-hover:h-auto text-white">
          <div className="p-4">
            {JSON.stringify(post)}
          </div>
        </div>
      </div>

      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{__html: post.body.html}}
      />
    </div>
  );
}


export default function PostItem({post}: { post: MaybePost }) {
  return post ? (
    <PostCard post={post}/>
  ) : (
    <div>Not found this post</div>
  );
}