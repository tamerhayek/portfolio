<script lang="ts">
	import { ImageTalksIUseSvelteBtw } from '$lib/assets/images/talks';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { BrandYoutube, Presentation } from '@steeze-ui/tabler-icons';

	const talks = [
		{
			title: 'I use Svelte btw!',
			description: `Tra i tanti framework per costruire interfacce web moderne, Svelte si distingue per semplicità, leggerezza e performance. In questo talk esploreremo cosa rende Svelte diverso dai framework reattivi più diffusi come React e Vue.
<br /><br />
Parleremo anche della Developer Experience, uno degli aspetti più apprezzati da chi usa Svelte: meno boilerplate, una sintassi intuitiva e componenti che sembrano HTML potenziato. Il risultato è uno sviluppo più fluido, leggibile e, soprattutto, piacevole.
<br /><br />
Infine, faremo un rapido tour del suo ecosistema, da SvelteKit alle principali librerie e strumenti disponibili oggi. Che tu sia curioso di provarlo per un nuovo progetto o semplicemente voglia capirne i punti di forza, questo talk ti offrirà una panoramica concreta e accessibile su uno dei framework più interessanti del momento.`,
			image: ImageTalksIUseSvelteBtw,
			href: 'https://www.youtube.com/watch?v=iJCrS9E9dZE',
			slides: 'https://iusesveltebtw.romajs.tamerhayek.com'
		}
	];
</script>

<section id="talks" class="my-5 flex min-h-screen flex-col items-center justify-center gap-10">
	<h3 class="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">Talks</h3>
	<div class="flex flex-col items-center gap-3">
		{#each talks as { title, description, image, href, slides }, index (href)}
			<div
				class="card lg:card-side bg-base-200 border-primary overflow-hidden rounded-2xl border-4 shadow-sm"
			>
				<figure class="shrink-0 overflow-hidden rounded-none">
					<enhanced:img
						src={image}
						alt="{title} photo"
						class="h-full object-cover object-center lg:max-w-lg"
					/>
				</figure>
				<div class="card-body gap-5">
					<h4 class="card-title text-2xl">{title}</h4>
					<p>{@html description}</p>
					<div class="card-actions justify-end">
						<a href={slides} target="_blank" rel="noopener noreferrer" class="btn btn-outline">
							Slides <Icon src={Presentation} size="20px" />
						</a>
						<a {href} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
							Live <Icon src={BrandYoutube} size="20px" />
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
