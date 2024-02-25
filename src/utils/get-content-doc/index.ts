import {allPosts} from "contentlayer/generated";
import {Post} from "@/type";

// get index post,that is ths outermost 01.index.md file in the content folder
const getIndexPost = () => {
  return allPosts.find(v => v._raw.sourceFilePath === 'index.md')
}

const get404Post = (): Post[] => {
  return allPosts.filter(v => v._raw.sourceFilePath === '404.md')
}

//url encode
const getDecodeUrl = (url: string): string => {
  return decodeURI(url)
}

const getPostByDir = (dir: string): Post[] => {
  return allPosts.filter(v => v.dir === getDecodeUrl(dir))
}

const getRealPost = (url: string): Post[] => {
  return allPosts.filter(v => v.url === getDecodeUrl(url))
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
  const urlList = url.split('/').filter(Boolean);
  const useUrl = `/${url}`;
  //if url is 1 ,need return dir
  //if url not 1 need return real post
  let result = urlList.length === 1 ? getPostByDir(urlList[0]) : getRealPost(useUrl);
  //if not have result need 404 post
  return result.length ? result : get404Post();
}


export {
  getIndexPost,
  getPostListByUrl,
}