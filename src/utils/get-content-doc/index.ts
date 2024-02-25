import {allPosts} from "contentlayer/generated";
import {Post} from "@/type";

// get index post,that is ths outermost index.md file in the content folder
const getIndexPost = () => {
  return allPosts.find(v => v._raw.sourceFilePath === 'index.md')
}

const get404Post = (): Post[] => {
  return allPosts.filter(v => v._raw.sourceFilePath === '404.md')
}

const getPostByDir = (dir: string): Post[] => {
  return allPosts.filter(v => v.dir === dir)
}

const getRealPost = (url: string): Post[] => {
  return allPosts.filter(v => v.url === url)
}

/**
 * url
 * about
 * blog/01.blog-01
 * blog
 *
 * return a post[]
 * @param url
 */
const getPostListByUrl = (url: string) => {
  const urlList = url.split('/').filter(v => v)
  const useUrl = `/${url}`
  // default 404 post
  let result = get404Post()
  if (urlList.length === 1) {
    result = getPostByDir(urlList[0])
  } else {
    result = getRealPost(useUrl)
  }
  return result
}

export {
  getIndexPost,
  getPostListByUrl,
}