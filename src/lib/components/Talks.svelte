<script lang="ts">
	import SectionPrompt from './SectionPrompt.svelte';

	let active = $state(false);

	const log = [
		{
			hash: 'f3a1c2b',
			title: 'I use Svelte btw!',
			meta: '@ RomaJS · Rome, IT',
			tag: 'v1.0',
			date: '2025',
			links: [
				{ label: 'slides', href: 'https://iusesveltebtw.romajs.tamerhayek.com/', icon: 'doc' },
				{ label: 'recording', href: 'https://www.youtube.com/watch?v=iJCrS9E9dZE', icon: 'play' }
			]
		}
	];
</script>

<section id="talks">
	<SectionPrompt
		step="05/06"
		command="git log --oneline --talks"
		onActivate={() => (active = true)}
	/>
	<div class="wrap">
		<div class="sec-body" class:in={active}>
			<div class="section-head">
				<div class="left">
					<div class="title">talks</div>
				</div>
				<div class="hint"><span class="kbd">⏎</span> for details</div>
			</div>
			<div class="section-rule"></div>

			<div class="git-log">
				{#each log as entry (entry.hash)}
					<div class="git-row">
						<div class="git-hash">{entry.hash}</div>
						<div class="git-msg">
							<div class="title">{entry.title}</div>
							<div class="meta">
								<span class="tag">{entry.tag}</span>
								{entry.meta} <span style="color: var(--text-dim)">·</span>
								{entry.date}
							</div>
						</div>
						<div class="git-actions">
							{#each entry.links as lk (lk.label)}
								<a href={lk.href} target="_blank" rel="noopener noreferrer external">
									{#if lk.icon === 'doc'}
										<svg
											viewBox="0 0 24 24"
											width="12"
											height="12"
											fill="none"
											stroke="currentColor"
											stroke-width="1.8"
										>
											<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
											<path d="M14 3v5h5" />
										</svg>
									{:else}
										<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
											<path d="M8 5v14l11-7z" />
										</svg>
									{/if}
									{lk.label}
								</a>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
