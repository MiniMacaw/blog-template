import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    { id: 1, title: 'First Blog Post', slug: 'first-blog-post' },
    { id: 2, title: 'Second Blog Post', slug: 'second-blog-post' },
    // More blog posts...
  ];

  return (
    <div>
      <h1>Blog</h1>
      <Link href="/">Return to Home</Link>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
