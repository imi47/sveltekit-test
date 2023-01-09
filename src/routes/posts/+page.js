import { error } from '@sveltejs/kit';
// import post from '../../lib/posts/post1.md?raw'
// console.log(post)

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
  // console.log('context', context)

  let posts = await fetch('/api/posts')
  posts = await posts.json()

  return {
    data: posts
  };
  // }

  // throw error(404, 'Not found');
}

export const prerender = false;
