import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return redirect(303, 'https://linkedin.com/in/tamerhayek');
};
