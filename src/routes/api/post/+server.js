import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const slug = url.searchParams.get('slug')

  const post = (await import(`../../../lib/posts/${[slug]}.md?raw`)).default
    let str = post?.split('<!--')[1]
    str = str?.split('-->')[0]
    str = JSON.parse(str)

    return new Response(JSON.stringify({
      title: str.title,
      content: post
    }))
}