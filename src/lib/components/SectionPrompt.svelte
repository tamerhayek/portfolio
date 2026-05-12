<script lang="ts">
	import Prompt from './Prompt.svelte';

	interface Props {
		step: string;
		command: string;
		onActivate?: () => void;
	}

	let { step, command, onActivate }: Props = $props();

	let active = $state(false);

	function sectionObserver(node: HTMLElement) {
		const section = node.closest('section');
		if (!section) return;

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting && !active) {
						active = true;
						onActivate?.();
					}
				});
			},
			{ threshold: 0.1 }
		);
		io.observe(section);

		return () => io.disconnect();
	}
</script>

<div class="section-sticky-prompt" class:active {@attach sectionObserver}>
	<div class="section-sticky-prompt-inner">
		<span class="step">{step}</span>
		<Prompt {command} instant showCursor={false} />
		<span class="spp-tick" class:on={active}>✓</span>
	</div>
</div>
