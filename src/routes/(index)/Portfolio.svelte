<script lang="ts">
	import {
		ImageProjectsClarisseGrosseto,
		ImageProjectsGlaStablesEquitazione,
		ImageProjectsIlGenioTestardo,
		ImageProjectsOlymposHub,
		ImageProjectsPortfolio
	} from '$lib/assets/images/projects';

	const portfolio = [
		{
			title: 'Portfolio',
			image: ImageProjectsPortfolio,
			href: 'https://tamerhayek.com',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		},
		{
			title: 'Olympos Hub',
			image: ImageProjectsOlymposHub,
			href: 'https://olymposhub.io',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		},
		{
			title: 'Polo Culturale Le Clarisse',
			image: ImageProjectsClarisseGrosseto,
			href: 'https://clarissegrosseto.it',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		},
		{
			title: 'Il Genio Testardo',
			image: ImageProjectsIlGenioTestardo,
			href: 'https://ilgeniotestardo.org',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		},
		{
			title: 'GLA Stables Equitazione',
			image: ImageProjectsGlaStablesEquitazione,
			href: 'https://glastablesequitazione.com',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		}
	];
</script>

<section id="portfolio" class="my-5 flex min-h-screen flex-col items-center justify-center">
	<h3 class="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">Showroom</h3>
	<div class="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
		{#each portfolio as website}
			<a
				href={website.href}
				target="_blank"
				class="border-primary bg-primary/10 cursor-pointer overflow-auto rounded-3xl border-[5px] transition-transform hover:scale-[1.02]"
			>
				<enhanced:img
					src={website.image}
					alt="{website.title} website screenshot"
					class="mx-auto aspect-video w-full rounded-lg object-cover object-top"
				/>
				<div class="flex flex-col gap-3 p-5">
					<h4 class="font-bold text-white">{website.title}</h4>
					<div class="flex flex-wrap gap-5 py-2">
						{#each website.skills as skill}
							<span
								class="bg-primary/50 text-primary-content rounded-lg px-2 py-1 text-xs font-bold xl:text-sm"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
