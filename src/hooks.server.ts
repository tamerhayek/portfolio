import { i18n } from '$lib/i18n.js';
import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const localeHandle: Handle = i18n.handle();

export const handle = sequence(localeHandle);
