// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `posts/${post._raw.flattenedPath}`,
    },
  },
}))

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `posts/${page._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: ".", // Set to the common parent directory
  documentTypes: [Post, Page],
})
