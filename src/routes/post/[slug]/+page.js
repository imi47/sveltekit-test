import { error } from '@sveltejs/kit';
import getPost from '../../../lib/services/getPost';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  
  if (params.slug) {
    // let post = await fetch(`/api/post?slug=${params.slug}`)
    // return post = await post.json()
    return getPost(params.slug)
  }
 
  throw error(404, 'Not found');
}

export const prerender = true;