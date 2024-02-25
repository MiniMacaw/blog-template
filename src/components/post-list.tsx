import {Post} from "@/type";
import Link from "next/link";


export default function postList(
  {posts}: { posts: Post[] }
) {
  return (
    <div>
      {
        posts.map(post => {
          return <div className="p-3" key={post.url}>
            <Link className="text-p text-xl hover:text-s" href={post.url}>{post.title}</Link>
            <div>{post.dir}</div>
          </div>
        })
      }
    </div>
  )
}
