<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Errore</title>
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center gap-4 px-3 py-5">
	<h1 class="text-8xl">{page.status}</h1>
	<p>Generic error</p>
	<a href="/" class="btn btn-primary"> Go back home </a>
</div>
