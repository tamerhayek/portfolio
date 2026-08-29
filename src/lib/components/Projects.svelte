<script lang="ts">
	import SectionPrompt from './SectionPrompt.svelte';
	import {
		ImageProjectsPortfolio,
		ImageProjectsOlymposHub,
		ImageProjectsClarisseGrosseto,
		ImageProjectsIlGenioTestardo,
		ImageProjectsGlaStablesEquitazione,
		ImageProjectsPonySeries,
		ImageProjectsStudiovisalli
	} from '$lib/assets/images/projects';

	type ProjectStatus = 'online' | 'offline' | 'soon';

	interface Project {
		idx: number;
		file: string;
		title: string;
		src: string;
		desc: string;
		tags: string[];
		status: ProjectStatus;
		live: string | null;
		repo: string | null;
	}

	let active = $state(false);

	const statusText: Record<ProjectStatus, string> = {
		online: 'online',
		offline: 'offline',
		soon: 'soon'
	};

	const projects: Project[] = [
		{
			idx: 1,
			file: 'portfolio.ts',
			title: 'tamerhayek.com',
			src: ImageProjectsPortfolio,
			desc: 'Terminal-styled personal portfolio, self-hosted on Hetzner behind Traefik. You are looking at it right now.',
			tags: ['SvelteKit'],
			status: 'online',
			live: 'https://tamerhayek.com',
			repo: 'https://github.com/tamerhayek/portfolio'
		},
		{
			idx: 2,
			file: 'olymposhub.ts',
			title: 'olymposhub.io',
			src: ImageProjectsOlymposHub,
			desc: 'Landing page and digital showcase for a web studio. Design, development, and a solid web presence for clients.',
			tags: ['SvelteKit'],
			status: 'online',
			live: 'https://olymposhub.io',
			repo: null
		},
		{
			idx: 3,
			file: 'clarisse.ts',
			title: 'clarissegrosseto.it',
			src: ImageProjectsClarisseGrosseto,
			desc: 'Full website for a contemporary art museum: artwork collections, custom CMS, on-site monitor kiosks, and an integrated VR tour.',
			tags: ['SvelteKit', 'PocketBase'],
			status: 'online',
			live: 'https://clarissegrosseto.it',
			repo: null
		},
		{
			idx: 4,
			file: 'ilgeniotestardo.ts',
			title: 'ilgeniotestardo.org',
			src: ImageProjectsIlGenioTestardo,
			desc: 'Showcase site for a documentary film. Fullscreen hero, embedded trailer, cast and crew sections. A story that deserved a proper site.',
			tags: ['SvelteKit'],
			status: 'online',
			live: 'https://ilgeniotestardo.org',
			repo: null
		},
		{
			idx: 5,
			file: 'glastables.ts',
			title: 'glastablesequitazione.com',
			src: ImageProjectsGlaStablesEquitazione,
			desc: 'Showcase site for GLA Stables riding school. Lessons, ponies, team. Sections crafted directly with the owners, built for people actually looking for a stable.',
			tags: ['SvelteKit'],
			status: 'online',
			live: 'https://glastablesequitazione.com',
			repo: null
		},
		{
			idx: 6,
			file: 'ponyseries.ts',
			title: 'ponyseries.com',
			src: ImageProjectsPonySeries,
			desc: 'Platform for an equestrian competition series: rounds, standings, and registrations. Clean frontend built to be used directly trackside.',
			tags: ['SvelteKit'],
			status: 'online',
			live: 'https://ponyseries.com',
			repo: null
		},
		{
			idx: 7,
			file: 'studiovisalli.ts',
			title: 'studiovisalli.it',
			src: ImageProjectsStudiovisalli,
			desc: 'Editorial studio website for Studio Visalli: a refined online presence built around services, culture, and a blog that complements the brand story with thoughtful content.',
			tags: ['SvelteKit', 'PocketBase'],
			status: 'online',
			live: 'https://studiovisalli.it',
			repo: null
		}
	];

	function padIdx(n: number) {
		return String(n).padStart(2, '0');
	}

	function fileExt(f: string): [string, string] {
		const parts = f.split('.');
		return [parts.slice(0, -1).join('.'), parts[parts.length - 1]];
	}
</script>

<section id="projects">
	<SectionPrompt
		step="03/06"
		command="ls ./projects/ --sort=recent"
		onActivate={() => (active = true)}
	/>
	<div class="wrap">
		<div class="sec-body" class:in={active}>
			<div class="section-head">
				<div class="left">
					<div class="title">showroom</div>
				</div>
				<div class="hint"><span class="kbd">→</span> hover for glitch</div>
			</div>
			<div class="section-rule"></div>

			<div class="proj-grid">
				{#each projects as p (p.idx)}
					{@const [name, ext] = fileExt(p.file)}
					<article class="proj">
						<header class="proj-bar">
							<div class="lights">
								<span class="r"></span><span class="y"></span><span class="g"></span>
							</div>
							<div class="file">~/projects/{name}<span class="ext">.{ext}</span></div>
							<div class="right">{statusText[p.status]}</div>
						</header>
						<div class="proj-art">
							<div class="shot-img">
								<img src={p.src} alt={p.title} loading="lazy" />
								<div class="shot-img-tint"></div>
							</div>
							<div class="glitch"></div>
							<div class="scan"></div>
						</div>
						<div class="proj-body">
							<div class="proj-title">
								<span class="num">/{padIdx(p.idx)}</span>
								{p.title}
							</div>
							<p class="proj-desc">{p.desc}</p>
							<div class="proj-tags">
								{#each p.tags as tag (tag)}<span>{tag}</span>{/each}
							</div>
							<div class="proj-foot">
								{#if p.live}
									<a
										href={p.live}
										target="_blank"
										rel="noopener noreferrer external"
										aria-label={`${p.title} — live site`}
									>
										live
										<svg
											viewBox="0 0 24 24"
											width="14"
											height="14"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
										</svg>
									</a>
								{/if}
								{#if p.repo}
									<a
										href={p.repo}
										target="_blank"
										rel="noopener noreferrer external"
										aria-label={`${p.title} — source code`}
									>
										source
										<svg
											viewBox="0 0 24 24"
											width="14"
											height="14"
											fill="none"
											stroke="currentColor"
											stroke-width="1.8"
										>
											<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 1 0-7-7l-1 1" />
											<path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 1 0 7 7l1-1" />
										</svg>
									</a>
								{/if}
								<span class={`proj-status ${p.status}`}>
									<span class="status-dot" aria-hidden="true"></span>
									{statusText[p.status]}
								</span>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
