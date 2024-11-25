<script lang="ts">
	import { page } from '$app/stores';
	import { translate } from '$lib/i18n';
	import { languageTag } from '$lib/paraglide/runtime';
</script>

<svelte:head>
	<title>{translate.titleError()}</title>
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center gap-4 px-3 py-5">
	<h1 class="text-8xl">{$page.status}</h1>
	<p>{languageTag() === 'it' ? 'Errore generico' : 'Generic error'}</p>
	<a href="/" class="btn btn-primary"
		>{languageTag() === 'it' ? 'Torna alla home' : 'Go back home'}</a
	>
</div>
