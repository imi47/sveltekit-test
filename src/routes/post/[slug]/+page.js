import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  
  if (params.slug) {
    let post = await fetch(`/api/post/${params.slug}`)
    return post = await post.json()
  }
 
  throw error(404, 'Not found');
}

export const prerender = true;