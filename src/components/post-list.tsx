import {Post} from "@/type";


export default function postList(
  {posts}: { posts: Post[] }
) {
  return (
    <div>
      {posts.map((post, idx) => (
        <div key={idx}>
          <h1>{post.title}</h1>
          <p>{post.date}</p>
          <p>{post.duration}</p>
        </div>
      ))}
    </div>
  )
}
