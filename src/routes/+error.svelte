<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<div class="error-page">
	<h1>{page.status}</h1>
	<p>{page.error?.message ?? 'An unexpected error occurred.'}</p>
	<a href={resolve('/')}>go home</a>
</div>

<style>
	.error-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		gap: 16px;
		padding: 32px;
		text-align: center;
	}
	h1 {
		font-size: 80px;
		font-family: var(--font-mono);
		color: var(--text);
		margin: 0;
	}
	p {
		color: var(--text-muted);
	}
	a {
		color: var(--primary);
	}
</style>
