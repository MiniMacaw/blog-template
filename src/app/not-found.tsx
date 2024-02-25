/**
 * 1. get url
 * 2. by url get post
 * 3. if post > 1 show post list
 * 4. if post = 1 show post
 * 5. if post = 0 show not found
 */

export default function NotFound() {
  const strList = `
      not found post
      * todo:
      * 1. get url
      * 2. by url get post
      * 3. if post > 1 show post list
      * 4. if post = 1 show post
      * 5. if post = 0 show not found
  `.split('\n').map(v => v.trim())
  return (
    <div className="flex justify-center">
      <div>
        {strList.map((v, idx) => (
          <div className="m-4" key={idx}>{v}</div>
        ))}
      </div>
    </div>
  )
}