<script>
  export let data
  console.log(data)
</script>

{#each data.data as post}
  <div>
    <h3>title: {post.title}</h3>
    <p>tag {post.tag}</p>
  </div>
{/each}