import {allPosts} from "contentlayer/generated";
import {getPostListByUrl} from "@/utils";
import PostItem from "@/components/post-item";
import PostList from "@/components/post-list"

export function generateStaticParams() {
  return allPosts.map(post => {
    return {
      params: {
        slug: post.dir.split('/').filter(v => v)
      }
    }
  })
}


interface PostI {
  params: {
    slug: string[]
  }
}

export default function Page({params}: PostI) {
  const {slug} = params
  const useUrl = slug.join('/')
  const postList = getPostListByUrl(useUrl);

  if (postList.length === 1) {
    return (
      <PostItem post={postList[0]}/>
    )
  }

  return (
    <PostList posts={postList}/>
  )
}