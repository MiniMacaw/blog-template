import {allPosts} from "contentlayer/generated";


// get index post,that is ths outermost index.md file in the content folder
const getIndexPost = () => {
  return allPosts.find(v => v._raw.sourceFilePath === 'index.md')
}

const getPostByUrl = (url: string) => {
  return allPosts.find(v => v.url === url)
}

export {
  getIndexPost,
  getPostByUrl,
}