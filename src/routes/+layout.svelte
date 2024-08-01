<script lang="ts">
	import { page } from '$app/stores';
	import { LocaleController } from '$lib/components/ui';
	import { i18n } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';
	import '@fontsource/ubuntu';
	import '@fontsource/ubuntu/300.css';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		BrandDiscord,
		BrandGithub,
		BrandInstagram,
		BrandLinkedin,
		BrandTelegram,
		Mail
	} from '@steeze-ui/tabler-icons';
	import '../app.css'; // Light
	import '@fontsource/ubuntu/700.css'; // Bold
	import '@fontsource/ubuntu/400-italic.css'; // Regular Italic
</script>

<svelte:head>
	<meta name="application-name" content="Tamer Hayek Portfolio" />
	<meta name="category" content="Web Development" />
	<meta
		name="keywords"
		content={languageTag() === 'it'
			? 'Sviluppatore web, Fullstack Developer, Tecnologia, Digitale, Sito web'
			: 'Web developer, Fullstack Developer, Technology, Digital, Website'}
	/>

	<meta name="author" content="Tamer Hayek" />

	<link rel="canonical" href="https://tamerhayek.com{$page.url.pathname}" />
</svelte:head>

<ParaglideJS {i18n}>
	<nav id="navbar" class="fixed top-0 z-50 flex w-full items-center justify-center bg-base-100">
		<div class="flex w-full max-w-7xl items-center justify-between px-5 py-5">
			<div
				class="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-b from-teal-200 to-teal-700 object-contain"
			>
				<a href="/">
					<img src="/avatar.png" alt="Tamer's avatar" fetchPriority="high" />
				</a>
			</div>
			<div class="flex shrink-0 items-center justify-center gap-3 lg:justify-start lg:gap-5">
				<a
					class="cursor-pointer"
					target="_blank"
					rel="noreferrer, noopener"
					href="https://github.com/tamerhayek"
				>
					<Icon src={BrandGithub} size="40px" class="transition-colors  hover:text-purple-700" />
				</a>
				<a
					class="cursor-pointer"
					target="_blank"
					rel="noreferrer, noopener"
					href="https://www.linkedin.com/in/tamerhayek/"
				>
					<Icon src={BrandLinkedin} size="40px" class="transition-colors  hover:text-blue-500" />
				</a>
				<a
					class="cursor-pointer"
					target="_blank"
					rel="noreferrer, noopener"
					href="https://www.instagram.com/tamerhayek/"
				>
					<Icon src={BrandInstagram} size="40px" class="transition-colors  hover:text-secondary" />
				</a>
				<LocaleController />
			</div>
		</div>
	</nav>

	<main class="flex w-full items-center justify-center">
		<div class="flex min-h-screen w-full max-w-7xl items-center justify-center pt-28">
			<slot />
		</div>
	</main>

	<footer class="w-full py-10">
		<div class="flex flex-col items-center justify-center gap-5">
			<p>
				©{new Date().getFullYear()} Tamer Hayek - {languageTag() === 'it'
					? 'Tutti i diritti riservati'
					: 'All rights reserved'}
			</p>
			<p>
				<span class="font-bold">P.IVA</span> 17090301007
			</p>
			<p><span class="font-bold">C.F.</span> HYKTMR00T15H501Q</p>
			<div class="flex gap-10 pb-5">
				<a href={'mailto:dev@tamerhayek.com'}>
					<Icon src={Mail} size="30px" class="transition-all hover:scale-110" />
				</a>
				<a target="_blank" href={'https://tamerhayek.com/telegram'}>
					<Icon src={BrandTelegram} size="30px" class="transition-all hover:scale-110" />
				</a>
				<a target="_blank" href={'https://tamerhayek.com/discord'}>
					<Icon src={BrandDiscord} size="30px" class="transition-all hover:scale-110" />
				</a>
			</div>
		</div>
	</footer>
</ParaglideJS>
