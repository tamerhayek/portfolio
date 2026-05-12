<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		user?: string;
		host?: string;
		path?: string;
		command?: string;
		instant?: boolean;
		showCursor?: boolean;
		cursorSolid?: boolean;
		onDone?: () => void;
		startDelay?: number;
	}

	let {
		user = 'tamibyte',
		host = 'tamerhayek.com',
		path = '~',
		command = '',
		instant = false,
		showCursor = true,
		cursorSolid = false,
		onDone,
		startDelay = 0,
	}: Props = $props();

	let typed = $state('');
	let displayText = $derived(instant ? command : typed);

	onMount(() => {
		if (instant || !command) {
			onDone?.();
			return;
		}

		let cancelled = false;
		let i = 0;

		function tick() {
			if (cancelled) return;
			typed = command.slice(0, i);
			if (i < command.length) {
				i++;
				setTimeout(tick, 35);
			} else {
				onDone?.();
			}
		}

		const t = setTimeout(tick, startDelay);
		return () => {
			cancelled = true;
			clearTimeout(t);
		};
	});
</script>

<div class="prompt">
	<span class="user">{user}</span><span class="at">@</span><span class="host">{host}</span><span
		class="sym">:</span><span class="path">{path}</span><span class="sym"> $</span><span
		class="cmd"> {displayText}</span>{#if showCursor}<span
		class="cursor{cursorSolid ? ' solid' : ''}"></span>{/if}
</div>
