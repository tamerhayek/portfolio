<script lang="ts">
	import { languageTag } from '$paraglide/runtime';

	const portfolio = [
		{
			title: 'Portfolio',
			description: languageTag() === 'it' ? 'Il mio portfolio' : 'This is my portfolio',
			image: '/assets/images/projects/portfolio.webp',
			alt: languageTag() === 'it' ? 'Sito Web Portfolio' : 'Portfolio Website',
			href: '/',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		},
		{
			title: 'Olympos Hub',
			description: languageTag() === 'it' ? 'Sito Web Olympos Hub' : 'Olympos Hub Website',
			image: '/assets/images/projects/olymposhub.webp',
			alt: languageTag() === 'it' ? 'Sito Web Olympos Hub' : 'Olympos Hub Website',
			href: 'https://olymposhub.io',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		},
		{
			title: 'Clarisse Grosseto',
			description:
				languageTag() === 'it' ? 'Sito Web Clarisse Grosseto' : 'Clarisse Grosseto Website',
			image: '/assets/images/projects/clarisse-grosseto.webp',
			alt: languageTag() === 'it' ? 'Sito Web Clarisse Grosseto' : 'Clarisse Grosseto Website',
			href: 'https://clarissegrosseto.it',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		}
	];
</script>

<section id="portfolio" class="my-5 flex min-h-screen flex-col items-center justify-center">
	<h3 class="text-center text-4xl font-bold tracking-tight sm:text-5xl">Showroom</h3>
	<div class="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
		{#each portfolio as website}
			<a
				href={website.href}
				class="cursor-pointer overflow-auto rounded-3xl border-[5px] border-primary bg-primary/10 transition-transform hover:scale-[1.02]"
			>
				<img
					src={website.image}
					alt={website.alt}
					class="mx-auto aspect-video w-full rounded-lg object-cover object-top"
				/>
				<div class="flex flex-col gap-3 p-5">
					<h3 class="text-xl font-bold xl:text-3xl">{website.title}</h3>
					<p class="py-2 text-lg text-gray-400 xl:text-xl">
						{website.description}
					</p>
					<div class="flex flex-wrap gap-5 py-2">
						{#each website.skills as skill}
							<span
								class="rounded-lg bg-secondary px-2 py-1 text-xs font-bold text-secondary-content xl:text-lg"
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
