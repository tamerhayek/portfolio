<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_UMAMI_WEBSITE_ID } from '$env/static/public';
	import { i18n } from '$lib/i18n';
	import { languageTag } from '$lib/paraglide/runtime';
	import '@fontsource/ubuntu';
	import '@fontsource/ubuntu/300.css';
	import '@fontsource/ubuntu/400-italic.css';
	import '@fontsource/ubuntu/700.css';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="canonical" href="{$page.url.origin}{$page.url.pathname}" />

	<meta name="application-name" content="Tamer Hayek Portfolio" />
	<meta name="category" content="Web Development" />
	<meta name="author" content="Tamer Hayek" />
	<meta
		name="keywords"
		content={languageTag() === 'it'
			? 'Sviluppatore web, Fullstack Developer, Tecnologia, Digitale, Sito web'
			: 'Web developer, Fullstack Developer, Technology, Digital, Website'}
	/>

	<!-- Umami -->
	{#if PUBLIC_UMAMI_WEBSITE_ID}
		<script
			defer
			src="https://analytics.olymposhub.io/script.js"
			data-website-id={PUBLIC_UMAMI_WEBSITE_ID}
		></script>
	{/if}
	<!-- End Umami -->
</svelte:head>

<ParaglideJS {i18n}>
	<Navbar />

	<main class="flex w-full items-center justify-center">
		<div class="flex min-h-screen w-full max-w-6xl items-center justify-center pt-28">
			{@render children?.()}
		</div>
	</main>

	<Footer />
</ParaglideJS>
