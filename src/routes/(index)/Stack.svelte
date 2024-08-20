<script lang="ts">
	import { languageTag } from '$paraglide/runtime';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		BrandHtml5,
		BrandCss3,
		BrandJavascript,
		BrandTypescript,
		BrandSvelte,
		BrandReact,
		BrandNextjs,
		BrandTailwind,
		BrandNodejs,
		Sql,
		BrandMongodb
	} from '@steeze-ui/tabler-icons';
</script>

<section
	id="stack"
	class="flex flex-col items-center justify-center gap-5 text-center lg:flex-row lg:text-right"
>
	<div class="order-1 flex max-w-xl shrink-0 flex-col items-center lg:order-2">
		<h3 class="text-md py-2 leading-8 md:text-xl lg:max-w-2xl lg:text-2xl">
			{#if languageTag() === 'it'}
				Capace di costruire siti web da zero sfruttando diversi linguaggi, frameworks e librerie.
			{:else}
				Capable of building web applications from scratch using various programming languages,
				frameworks, and libraries.
			{/if}
		</h3>
		<div class="flex w-full flex-wrap justify-center gap-10 py-10 lg:justify-end">
			<Icon
				size="50px"
				src={BrandHtml5}
				class="cursor-pointer transition-colors hover:text-orange-500"
			/>
			<Icon
				size="50px"
				src={BrandCss3}
				class="cursor-pointer transition-colors hover:text-blue-600"
			/>
			<Icon
				size="50px"
				src={BrandJavascript}
				class="cursor-pointer transition-colors hover:text-yellow-500"
			/>
			<Icon
				size="50px"
				src={BrandTypescript}
				class="cursor-pointer transition-colors hover:text-blue-700"
			/>
			<a class="cursor-pointer" href="https://svelte.dev/">
				<Icon
					size="50px"
					src={BrandSvelte}
					class="cursor-pointer transition-colors hover:text-orange-500"
				/>
			</a>
			<a class="cursor-pointer" href="https://www.react.dev">
				<Icon
					size="50px"
					src={BrandReact}
					class="cursor-pointer transition-colors hover:text-blue-600"
				/>
			</a>
			<a class="cursor-pointer" href="https://nextjs.org/">
				<Icon
					size="50px"
					src={BrandNextjs}
					class="cursor-pointer transition-colors hover:text-gray-600"
				/>
			</a>
			<a class="cursor-pointer" href="https://tailwindcss.com/">
				<Icon
					size="50px"
					src={BrandTailwind}
					class="cursor-pointer transition-colors hover:text-blue-500"
				/>
			</a>
			<a class="cursor-pointer" href="https://nodejs.org">
				<Icon
					size="50px"
					src={BrandNodejs}
					class="cursor-pointer transition-colors hover:text-green-500"
				/>
			</a>
			<Icon size="50px" src={Sql} class="cursor-pointer transition-colors hover:text-blue-600" />
			<a class="cursor-pointer" href="https://mongodb.com/">
				<Icon
					size="50px"
					src={BrandMongodb}
					class="cursor-pointer transition-colors hover:text-green-600"
				/>
			</a>
		</div>
	</div>
	<div
		class="order-2 h-fit overflow-hidden rounded-xl object-contain pe-3 lg:order-1 lg:grow lg:pe-10"
	>
		<img
			class="h-full w-full rounded-xl object-cover object-center"
			src="/assets/images/tech_stack.webp"
			alt="Tech Stack"
		/>
	</div>
</section>
