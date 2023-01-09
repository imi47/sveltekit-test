<script>
  export let data
  console.log(data)
</script>

{#each data.data as post}
  <div>
    <h3>title: <a href="/posts/{post.slug}">{post.title}</a></h3>
    <p>tag: {post.tag}</p>
  </div>
{/each}