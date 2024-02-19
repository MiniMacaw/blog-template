// app/page.tsx
import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"

function PostCard(post: Post) {
  const truncatedHtml = post.body.html.split(" ").slice(0, 23).join(" ") + "..."
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")} | {post.duration} read
      </time>

      <Link href={post.url}>
        <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0">
          {/* Render truncated HTML */}
          <span dangerouslySetInnerHTML={{ __html: truncatedHtml }} />
        </div>
      </Link>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">My Blogs</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
