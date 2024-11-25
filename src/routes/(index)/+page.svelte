<script lang="ts">
	import { page } from '$app/stores';
	import { translate } from '$lib/i18n';
	import '../../app.css';
	import About from './About.svelte';
	import Hero from './Hero.svelte';
	import Portfolio from './Portfolio.svelte';
	import Stack from './Stack.svelte';
	import Timeline from './Timeline.svelte';
</script>

<svelte:head>
	<title>{translate.title()}</title>
	<meta name="title" content={translate.title()} />
	<meta name="description" content={translate.description()} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tamerhayek.com{$page.url.pathname}" />
	<meta property="og:site_name" content="{translate.title()} - Portfolio" />
	<meta property="og:title" content={translate.title()} />
	<meta property="og:description" content={translate.description()} />
	<meta property="og:image" content="https://tamerhayek.com/avatar.webp" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://tamerhayek.com{$page.url.pathname}" />
	<meta property="twitter:title" content={translate.title()} />
	<meta property="twitter:description" content={translate.description()} />
	<meta property="twitter:image" content="https://tamerhayek.com/avatar.webp" />
</svelte:head>

<div class="flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-5">
	<Hero />

	<About />

	<div class="divider my-20"></div>

	<Stack />

	<div class="divider my-20"></div>

	<Timeline />

	<div class="divider my-20"></div>

	<Portfolio />
</div>
