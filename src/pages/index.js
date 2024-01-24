// Import necessary module from Next.js
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Website!</h1>
      <Link href="/blog">blog</Link>
    </div>
  )
}
