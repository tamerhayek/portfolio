<script lang="ts">
	import { page } from '$app/state';
	import { PUBLIC_UMAMI_WEBSITE_ID } from '$env/static/public';
	import { Footer, Navbar } from '$lib/components';
	import '@fontsource/press-start-2p';
	import '@fontsource/ubuntu';
	import type { Snippet } from 'svelte';
	import './layout.css';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="canonical" href="https://tamerhayek.com{page.url.pathname}" />

	<meta name="application-name" content="Tamer Hayek Portfolio" />
	<meta name="category" content="Web Development" />
	<meta name="author" content="Tamer Hayek" />
	<meta
		name="keywords"
		content="Web developer, Fullstack Developer, Technology, Digital, Website"
	/>

	<!-- Umami -->
	{#if PUBLIC_UMAMI_WEBSITE_ID}
		<script
			defer
			src="https://analytics.tamerhayek.com/script.js"
			data-website-id={PUBLIC_UMAMI_WEBSITE_ID}
		></script>
	{/if}
	<!-- End Umami -->
</svelte:head>

<Navbar />

<main class="flex w-full items-center justify-center">
	<div class="flex min-h-screen w-full max-w-6xl items-center justify-center pt-28">
		{@render children()}
	</div>
</main>

<Footer />
