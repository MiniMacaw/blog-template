'use client'

import { allPosts } from 'contentlayer/generated'
import { notFound, usePathname } from 'next/navigation'
import { use, Suspense } from 'react'

type BlogSlugProps = {
    params: {
        slug: string
    }
}

export default function BlogSlug() {
    const pathname = usePathname()
    //去掉pathname前面的'/'
    const pathnameWithoutSlash = pathname?.slice(1)
    const post = allPosts.find((post) => {
        console.log(post._raw.flattenedPath, pathname);
        return post._raw.flattenedPath === pathnameWithoutSlash
    }
    )
    if (!post) {
        return <div>
            {/* {
                allPosts.map((post) => (
                    <div className='m-3'>
                        {JSON.stringify(post)}
                    </div>
                ))
            } */}
            not found
        </div>
    }


    return (
        <section>

      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html:post.body.html }} />
        </section>
    )
}

