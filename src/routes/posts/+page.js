import { error } from '@sveltejs/kit';
// import post from '../../lib/posts/post1.md?raw'
// console.log(post)

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  // if (params.slug) {
  let posts = import.meta.glob(`../../lib/posts/*.md`, {
    as: 'raw',
    eager: true
  })
  posts = Object.values(posts)
  // console.log('test', posts)
  posts = posts.map(el => {
    return JSON.parse(el?.split('<!--')[1].split('-->')[0])
  })
  // console.log(posts)
  return {
    data: posts
  };
  // }

  // throw error(404, 'Not found');
}

export const prerender = true;
