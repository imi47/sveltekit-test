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
  
  console.log('test', posts)
  posts = Object.keys(posts).map(el => {
    let postVals = JSON.parse(posts[el]?.split('<!--')[1].split('-->')[0])
    let slug = el.split('/')
    slug = slug[slug.length-1].split('.md')[0]
    postVals.slug = slug
    return postVals
  })

  return {
    data: posts
  };
  // }

  // throw error(404, 'Not found');
}

export const prerender = true;
