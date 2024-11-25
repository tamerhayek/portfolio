import * as runtime from '$lib/paraglide/runtime.js';
import * as messages from '$lib/paraglide/messages.js';
import { createI18n } from '@inlang/paraglide-sveltekit';

export const i18n = createI18n(runtime, {
	defaultLanguageTag: 'it',
	prefixDefaultLanguage: 'never',
	pathnames: {},
	exclude: []
});

export const translate = messages;
