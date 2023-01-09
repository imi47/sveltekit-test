import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  let posts = import.meta.glob(`../../../lib/posts/*.md`, {
    as: 'raw',
    eager: true
  })
  
  // console.log('test', posts)
  posts = Object.keys(posts).map(el => {
    let postVals = JSON.parse(posts[el]?.split('<!--')[1].split('-->')[0])
    let slug = el.split('/')
    slug = slug[slug.length-1].split('.md')[0]
    postVals.slug = slug
    return postVals
  })
 
  // if (isNaN(d) || d < 0) {
  //   throw error(400, 'min and max must be numbers, and min must be less than max');
  // }
 
  return new Response(JSON.stringify(posts));
}