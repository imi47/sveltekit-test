import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  
  if (params.slug) {
    let post = await fetch(`/api/post?slug=${params.slug}`)
    post = await post.json()
    return post
  }
 
  throw error(404, 'Not found');
}

export const prerender = false;