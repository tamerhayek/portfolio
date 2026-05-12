<script lang="ts">
	import Prompt from './Prompt.svelte';
	import SectionPrompt from './SectionPrompt.svelte';

	let active = $state(false);

	const cats = [
		{
			category: 'frontend',
			glyph: '▰',
			tools: [
				{ name: 'Svelte', color: '#ff3e00' },
				{ name: 'TypeScript', color: '#3178c6' },
				{ name: 'JavaScript', color: '#f7df1e' },
				{ name: 'HTML', color: '#e34f26' },
				{ name: 'CSS', color: '#1572b6' }
			]
		},
		{
			category: 'backend',
			glyph: '▰▰',
			tools: [
				{ name: 'SvelteKit', color: '#ff3e00' },
				{ name: 'Node.js', color: '#5fa04e' },
				{ name: 'Go', color: '#00add8' },
				{ name: 'PostgreSQL', color: '#336791' },
				{ name: 'PocketBase', color: '#b6c4d1' }
			]
		},
		{
			category: 'infra',
			glyph: '▰▰▰',
			tools: [
				{ name: 'Docker', color: '#2496ed' },
				{ name: 'Linux', color: '#ffd60a' },
				{ name: 'Traefik', color: '#24a1c1' },
				{ name: 'Hetzner', color: '#d50c2d' }
			]
		}
	];
</script>

<section id="stack">
	<SectionPrompt step="02/06" command="cat stack.txt" onActivate={() => (active = true)} />
	<div class="wrap">
		<div class="sec-body" class:in={active}>
			<div class="section-head">
				<div class="left">
					<div class="title">stack</div>
				</div>
				<div class="hint"><span class="kbd">k</span> scroll up</div>
			</div>
			<div class="section-rule"></div>

			<div class="term">
				<div class="term-bar">
					<div class="lights">
						<span class="r"></span><span class="y"></span><span class="g"></span>
					</div>
					<div class="term-title">~ / stack.txt · 1 of 1</div>
					<div class="term-tabs"><span>UTF-8</span><span>LF</span></div>
				</div>
				<div class="term-body">
					<Prompt command="cat stack.txt" instant cursorSolid showCursor={false} />
					<div class="out" style="margin-top: 10px">
						<span class="com"># a non-exhaustive list of what i reach for</span>
					</div>
					<div class="out">
						<span class="key">runtime</span><span class="pun">: </span><span class="str"
							>"linux · macos · arm/x86"</span
						>
					</div>
					<div class="out">
						<span class="key">years</span><span class="pun">: </span><span class="num">6</span><span
							class="pun">,</span
						>
						<span class="com"> # full-stack, ops, occasional design</span>
					</div>
					<div class="out">
						<span class="key">approach</span><span class="pun">: </span><span class="str"
							>"ship fast, self-host, sweat the details"</span
						>
					</div>
				</div>
			</div>

			<div class="stack-grid">
				{#each cats as cat (cat.category)}
					<div class="stack-card">
						<div class="label"><span class="glyph">{cat.glyph}</span> {cat.category}</div>
						<div class="tools">
							{#each cat.tools as tool (tool.name)}
								<span class="tool-pill">
									<span class="sw" style="background: {tool.color}"></span>
									{tool.name}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
