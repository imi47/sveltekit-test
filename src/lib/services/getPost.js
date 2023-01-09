
export default async function(slug) {
  const post = (await import(`$lib/posts/${[slug]}.md?raw`)).default
    let str = post?.split('<!--')[1]
    str = str?.split('-->')[0]
    str = JSON.parse(str)

    return {
      title: str.title,
      content: post
    }
}