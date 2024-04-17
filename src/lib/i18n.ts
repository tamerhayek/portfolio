import * as runtime from '$paraglide/runtime.js';
import * as messages from '$paraglide/messages.js';
import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';

export const i18n = createI18n(runtime, {
	defaultLanguageTag: 'it',
	prefixDefaultLanguage: 'never',
	pathnames: {},
	exclude: []
});

export const translate = messages;
