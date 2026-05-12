import type { RequestHandler } from '@sveltejs/kit';

const LASTMOD = '2026-05-12T00:00:00.000Z';

const urls = [
	{ loc: 'https://tamerhayek.com/', priority: '1.00' },
	{ loc: 'https://tamerhayek.com/github', priority: '0.80' },
	{ loc: 'https://tamerhayek.com/linkedin', priority: '0.80' },
	{ loc: 'https://tamerhayek.com/instagram', priority: '0.70' },
	{ loc: 'https://tamerhayek.com/threads', priority: '0.70' },
	{ loc: 'https://tamerhayek.com/x', priority: '0.70' },
	{ loc: 'https://tamerhayek.com/reddit', priority: '0.70' },
	{ loc: 'https://tamerhayek.com/discord', priority: '0.70' },
	{ loc: 'https://tamerhayek.com/telegram', priority: '0.70' },
];

export const GET: RequestHandler = async () => {
	const entries = urls
		.map(
			({ loc, priority }) =>
				`\t\t<url>\n\t\t\t<loc>${loc}</loc>\n\t\t\t<lastmod>${LASTMOD}</lastmod>\n\t\t\t<priority>${priority}</priority>\n\t\t</url>`
		)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries}
</urlset>`.trim(),
		{ headers: { 'Content-Type': 'application/xml' } }
	);
};
