<script>
  import SvelteMarkdown from 'svelte-markdown'
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
<SvelteMarkdown source={data.content} />
