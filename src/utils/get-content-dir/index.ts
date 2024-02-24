import {allPosts} from "contentlayer/generated";

//每一个文件夹的名字
const allDirs = new Set(allPosts.map(v => v.dir))
allDirs.delete('')
allDirs.delete('.')

export {
  allDirs
}

