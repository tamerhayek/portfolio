<script lang="ts">
	import { languageTag } from '$lib/paraglide/runtime';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { BrandDiscord, BrandTelegram, Mail } from '@steeze-ui/tabler-icons';
</script>

<footer class="w-full py-10">
	<div class="flex flex-col items-center justify-center gap-5">
		<p>
			©{new Date().getFullYear()} Tamer Hayek - {languageTag() === 'it'
				? 'Tutti i diritti riservati'
				: 'All rights reserved'}
		</p>
		<div class="flex gap-10 pb-5">
			<a href={'mailto:dev@tamerhayek.com'}>
				<Icon src={Mail} size="30px" class="transition-all hover:scale-110" />
				<span class="sr-only">Mail</span>
			</a>
			<a target="_blank" href={'https://tamerhayek.com/telegram'}>
				<Icon src={BrandTelegram} size="30px" class="transition-all hover:scale-110" />
				<span class="sr-only">Telegram</span>
			</a>
			<a target="_blank" href={'https://tamerhayek.com/discord'}>
				<Icon src={BrandDiscord} size="30px" class="transition-all hover:scale-110" />
				<span class="sr-only">Discord</span>
			</a>
		</div>
	</div>
</footer>
