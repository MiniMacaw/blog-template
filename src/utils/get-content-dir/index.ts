import {allPosts} from "contentlayer/generated";

//每一个文件夹的名字
const postsSortByDirOrder = allPosts.sort((a, b) => a.dir_order - b.dir_order);

const allDirs = new Set(
  postsSortByDirOrder.map(v => v.dir)
)

allDirs.delete('')
allDirs.delete('.')

export {
  allDirs
}

