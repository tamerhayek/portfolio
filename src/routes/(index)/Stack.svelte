<script lang="ts">
	import { ImageTechStack } from '$lib/assets/images';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		BrandCss3,
		BrandHtml5,
		BrandJavascript,
		BrandNodejs,
		BrandSvelte,
		BrandTailwind,
		BrandTypescript,
		Sql
	} from '@steeze-ui/tabler-icons';
</script>

<section
	id="stack"
	class="flex flex-col items-center justify-center gap-5 text-center lg:flex-row lg:text-right"
>
	<div class="order-1 flex max-w-xl shrink-0 flex-col items-center lg:order-2">
		<div class="grid w-full grid-cols-4 place-items-center gap-10 py-10 lg:place-items-end">
			<Icon size="60px" src={BrandHtml5} class="transition-colors hover:text-orange-500" />
			<Icon size="60px" src={BrandCss3} class="transition-colors hover:text-blue-600" />
			<Icon size="60px" src={BrandJavascript} class="transition-colors hover:text-yellow-500" />
			<Icon size="60px" src={BrandTypescript} class="transition-colors hover:text-blue-700" />
			<Icon size="60px" src={BrandSvelte} class="transition-colors hover:text-orange-500" />
			<Icon size="60px" src={BrandTailwind} class="transition-colors hover:text-blue-500" />
			<Icon size="60px" src={BrandNodejs} class="transition-colors hover:text-green-500" />
			<Icon size="60px" src={Sql} class="transition-colors hover:text-blue-600" />
		</div>
		<h3 class="text-neutral-content py-2 text-base leading-8 md:text-xl lg:max-w-2xl lg:text-xl">
			Capable of building web applications from scratch using various programming languages,
			frameworks, and libraries.
		</h3>
	</div>
	<div
		class="order-2 h-fit overflow-hidden rounded-box object-contain pe-3 lg:order-1 lg:grow lg:pe-10"
	>
		<enhanced:img
			class="h-full w-full rounded-box object-cover object-center"
			src={ImageTechStack}
			alt="Tech Stack"
		/>
	</div>
</section>
