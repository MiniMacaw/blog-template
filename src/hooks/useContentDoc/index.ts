import {allPosts} from "contentlayer/generated";

//传入路径返回路径下的所有文件
const getDir = (dir: string) => {
  return allPosts.filter(v => v.dir === dir)
}

export {
  getDir

}