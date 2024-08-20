<script lang="ts">
	import { languageTag } from '$paraglide/runtime';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Mail } from '@steeze-ui/tabler-icons';
</script>

<section
	id="home"
	class="flex w-full flex-col items-center justify-center gap-20 text-center lg:flex-row lg:text-left"
>
	<div class="order-2 flex shrink-0 flex-col gap-5 lg:order-1">
		<h1 class="text-4xl font-bold text-primary lg:text-6xl 2xl:text-7xl">
			{languageTag() === 'it' ? 'Tamer Hayek' : "I'm Tamer Hayek"}
		</h1>
		<h2 class="text-2xl md:text-3xl lg:text-5xl">Full Stack Developer</h2>
		<div class="py-5 lg:py-10">
			<a class="btn btn-primary" href={'mailto:dev@tamerhayek.com'}>
				{languageTag() === 'it' ? 'Contattami' : 'Contact me'}
				<Icon size="24px" src={Mail} class="transition-all hover:scale-110" />
			</a>
		</div>
	</div>
	<div
		class="relative order-1 rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] lg:order-2"
	>
		<div class="flex flex-row">
			<div
				class="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"
			></div>
			<div class="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
		</div>
		<div class="px-4 py-5 lg:px-8">
			<div class="flex flex-row space-x-2">
				<div class="h-3 w-3 rounded-full bg-red-400"></div>
				<div class="h-3 w-3 rounded-full bg-orange-400"></div>
				<div class="h-3 w-3 rounded-full bg-green-400"></div>
			</div>
		</div>
		<div
			class="overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 text-left lg:px-8 lg:py-8"
		>
			<code class="font-mono text-xs md:text-sm lg:text-base">
				<div class="blink">
					<span class="text-pink-500">const</span>
					<span class="text-white">programmer</span>
					<span class="text-pink-500">=</span>
					<span class="text-gray-400">{'{'}</span>
				</div>
				<div>
					<span class="ml-4 text-white lg:ml-8">name:</span>
					<span class="text-amber-300">'Tamer Hayek'</span>
				</div>
				<div class="ml-4 lg:ml-8">
					<span class="text-white">skills:</span>
					<span class="text-gray-400">{`[`}</span>
					<span class="text-amber-300">'HTML5'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'CSS3'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'Javascript'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'Typescript'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'NodeJS'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'Svelte'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'SvelteKit'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'React'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'NextJS'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'Docker'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'PostgreSql'</span>
					<span class="text-gray-400">{', '}</span>
					<span class="text-amber-300">'MongoDB'</span>
					<span class="text-gray-400">{'],'}</span>
				</div>
				<div>
					<span class="ml-4 text-white lg:ml-8">hardWorker:</span>
					<span class="text-orange-400">true</span>,
				</div>
				<div>
					<span class="ml-4 text-white lg:ml-8">quickLearner:</span>
					<span class="text-orange-400">true</span>,
				</div>
				<div>
					<span class="ml-4 text-white lg:ml-8">problemSolver:</span>
					<span class="text-orange-400">true</span>,
				</div>
				<div>
					<span class="text-gray-400">{`};`}</span>
				</div>
			</code>
		</div>
	</div>
</section>
