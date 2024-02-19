// contentlayer.config.ts
import {defineDocumentType, makeSource} from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {type: 'string', required: true},
    date: {type: 'date', required: true},
    duration: {type: 'string', required: true},
  },
  computedFields: {
    url: {type: 'string', resolve: (post) => `/${post._raw.flattenedPath}`},
    order: {
      type: 'number',
      resolve: (post) => {
        // 根据sourceFileName 获取前面的数字
        console.log(post._raw.sourceFileName)
        return parseInt(post._raw.sourceFileName) || 0
      }
    },
    dir: {
      type: 'string',
      resolve: (post) => {
        return post._raw.sourceFileDir
      }
    }
  },
}))

export default makeSource({contentDirPath: 'content', documentTypes: [Post]})