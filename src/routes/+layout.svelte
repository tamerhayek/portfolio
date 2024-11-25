<script lang="ts">
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';
	import '@fontsource/ubuntu';
	import '@fontsource/ubuntu/300.css';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css'; // Light
	import '@fontsource/ubuntu/700.css'; // Bold
	import '@fontsource/ubuntu/400-italic.css'; // Regular Italic
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
