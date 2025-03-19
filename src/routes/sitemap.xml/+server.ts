import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xmlns:xhtml="http://www.w3.org/1999/xhtml"
			xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/1999/xhtml http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd">
		>
				<url>
					<loc>https://tamerhayek.com/</loc>
					<lastmod>2025-03-19T00:00:00.000Z</lastmod>
					<priority>1.00</priority>
				</url>
			</urlset>
		`.trim(),
		{ headers: { 'Content-Type': 'application/xml' } }
	);
};
