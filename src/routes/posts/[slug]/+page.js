import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  if (params.slug) {
    let post = (await import(`../[slug]/../../../lib/posts/${[params.slug]}.md?raw`)).default
    let str = post?.split('<!--')[1]
    str = str?.split('-->')[0]
    str = JSON.parse(str)
    // console.log(str)
    return {
      title: str.title,
      content: post
    };
  }
 
  throw error(404, 'Not found');
}

export const prerender = true;