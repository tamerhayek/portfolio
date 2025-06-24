<script lang="ts">
	import { ImageTechStack } from '$lib/assets/images';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		BrandCss3,
		BrandDocker,
		BrandGit,
		BrandGolang,
		BrandHtml5,
		BrandJavascript,
		BrandMongodb,
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
			<Icon size="60px" src={BrandTailwind} class="transition-colors hover:text-blue-500" />
			<Icon size="60px" src={BrandNodejs} class="transition-colors hover:text-green-500" />
			<Icon size="60px" src={BrandSvelte} class="transition-colors hover:text-orange-500" />
			<Icon size="60px" src={BrandGolang} class="transition-colors hover:text-blue-500" />
			<Icon size="60px" src={Sql} class="transition-colors hover:text-pink-600" />
			<Icon size="60px" src={BrandMongodb} class="transition-colors hover:text-green-600" />
			<Icon size="60px" src={BrandGit} class="transition-colors hover:text-red-500" />
			<Icon size="60px" src={BrandDocker} class="transition-colors hover:text-blue-500" />
		</div>
		<p class="text-neutral-content py-2 text-xl leading-8 lg:max-w-2xl">
			Capable of building web applications from scratch using various programming languages,
			frameworks, and libraries.
		</p>
	</div>
	<div
		class="rounded-box order-2 h-fit overflow-hidden object-contain pe-3 lg:order-1 lg:grow lg:pe-10"
	>
		<enhanced:img
			class="rounded-box h-full w-full object-cover object-center"
			src={ImageTechStack}
			alt="Tech Stack"
		/>
	</div>
</section>
