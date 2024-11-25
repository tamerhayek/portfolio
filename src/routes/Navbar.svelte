<script lang="ts">
	import { LocaleController } from '$components/ui';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { BrandGithub, BrandInstagram, BrandLinkedin } from '@steeze-ui/tabler-icons';
</script>

<nav id="navbar" class="fixed top-0 z-50 flex w-full items-center justify-center bg-base-100">
	<div class="flex w-full max-w-6xl items-center justify-between px-5 py-5">
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
				<span class="sr-only">Github</span>
			</a>
			<a
				class="cursor-pointer"
				target="_blank"
				rel="noreferrer, noopener"
				href="https://www.linkedin.com/in/tamerhayek/"
			>
				<Icon src={BrandLinkedin} size="40px" class="transition-colors  hover:text-blue-500" />
				<span class="sr-only">Linkedin</span>
			</a>
			<a
				class="cursor-pointer"
				target="_blank"
				rel="noreferrer, noopener"
				href="https://www.instagram.com/tamerhayek/"
			>
				<Icon src={BrandInstagram} size="40px" class="transition-colors  hover:text-pink-500" />
				<span class="sr-only">Instagram</span>
			</a>
			<LocaleController />
		</div>
	</div>
</nav>
