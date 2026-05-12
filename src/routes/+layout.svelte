<script lang="ts">
	import { page } from '$app/state';
	import { Footer, Navbar } from '$lib/components';
	import type { Snippet } from 'svelte';
	import './layout.css';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="canonical" href="https://tamerhayek.com{page.url.pathname}" />
	<meta
		name="description"
		content="Tamer Hayek — freelance full-stack engineer based in Rome. SvelteKit, Go, TypeScript."
	/>
	<meta name="application-name" content="Tamer Hayek" />
	<meta name="author" content="Tamer Hayek" />
	<meta
		name="keywords"
		content="full-stack developer, SvelteKit, Go, TypeScript, Rome, freelance"
	/>
	<meta name="color-scheme" content="dark" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tamerhayek.com{page.url.pathname}" />
	<meta property="og:site_name" content="Tamer Hayek" />
	<meta property="og:title" content="Tamer Hayek" />
	<meta
		property="og:description"
		content="Freelance full-stack engineer based in Rome. SvelteKit, Go, TypeScript."
	/>
	<meta property="og:image" content="https://tamerhayek.com/avatar.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@tamibyte" />
	<meta name="twitter:title" content="Tamer Hayek" />
	<meta name="twitter:description" content="Freelance full-stack engineer based in Rome." />
	<meta name="twitter:image" content="https://tamerhayek.com/avatar.webp" />

	<!-- Umami -->
	<script
		defer
		src="https://analytics.tamerhayek.com/script.js"
		data-website-id="3289478a-168c-42ec-90e5-b0232518ac67"
		data-domains="tamerhayek.com"
	></script>
	<!-- End Umami -->
</svelte:head>

<div class="bg-fixed dot-grid"></div>
<div class="bg-fixed scanlines"></div>
<div class="bg-fixed vignette"></div>

<Navbar />

<main>
	{@render children()}
</main>

<Footer />
