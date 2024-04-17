<script lang="ts">
	import { languageTag } from '$paraglide/runtime';
	import { goto } from '$app/navigation';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';

	const handleOnChangeLanguage = async (e: Event) => {
		const locale = (e.target as HTMLSelectElement).value as 'it' | 'en';

		if (locale !== languageTag())
			await goto(i18n.resolveRoute(i18n.route($page.url.pathname), locale) + $page.url.search);
	};
</script>

<div class="form-control w-full">
	<label for="locale" class="sr-only">
		{languageTag() === 'it' ? 'Cambia la lingua' : 'Change the language'}
	</label>
	<select id="locale" on:change={handleOnChangeLanguage} class="select select-bordered">
		<option selected={languageTag() === 'it'} value="it">Italiano</option>
		<option selected={languageTag() === 'en'} value="en">English</option>
	</select>
</div>
