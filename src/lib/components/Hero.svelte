<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Prompt from './Prompt.svelte';

	const ROLES = [
		'Software Engineer',
		'Full Stack Developer',
		'DevOps Engineer',
		'Self-Hosted Everything',
	];

	let showName = $state(false);
	let showRole = $state(false);
	let roleText = $state('');

	function onPromptDone() {
		showName = true;
		setTimeout(() => {
			showRole = true;
		}, 500);
	}

	$effect(() => {
		if (!showRole) return;

		let cancelled = false;
		let idx = 0;
		let chars = 0;
		roleText = '';

		function type() {
			if (cancelled) return;
			const target = ROLES[idx];
			if (chars < target.length) {
				chars++;
				roleText = target.slice(0, chars);
				setTimeout(type, 55);
			} else {
				setTimeout(del, 1700);
			}
		}

		function del() {
			if (cancelled) return;
			if (chars > 0) {
				chars--;
				roleText = ROLES[idx].slice(0, chars);
				setTimeout(del, 28);
			} else {
				idx = (idx + 1) % ROLES.length;
				setTimeout(type, 0);
			}
		}

		type();
		return () => {
			cancelled = true;
		};
	});
</script>

<section class="hero" id="top">
	<div class="wrap" style="position: relative; width: 100%">
		<div class="hero-prompt">
			<Prompt
				command="./whoami.sh"
				onDone={onPromptDone}
				startDelay={400}
				cursorSolid={!showName}
				showCursor={!showName}
			/>
		</div>

		{#if showName}
			<h1 class="hero-name" use:reveal>
				Tamer <span class="accent">Hayek</span>
			</h1>

			<div class="hero-role" use:reveal={1}>
				<span class="gt">›</span>
				<span class="role-text">{roleText || 'Software Engineer'}</span>
				<span class="cursor"></span>
			</div>

			<div class="hero-meta">
				<div use:reveal={2}>
					<div class="k">$ location</div>
					<div class="v">Rome, IT <span style="color: var(--text-muted)">// UTC+2</span></div>
				</div>
				<div use:reveal={3}>
					<div class="k">$ status</div>
					<div class="v live"><span class="pulse"></span> open to projects</div>
				</div>
				<div use:reveal={4}>
					<div class="k">$ uptime</div>
					<div class="v">freelance · since 2022</div>
				</div>
			</div>
		{/if}
	</div>

	<a class="hero-scroll" href="#stack">
		scroll
		<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M12 5v14" />
			<path d="m6 13 6 6 6-6" />
		</svg>
	</a>
</section>
