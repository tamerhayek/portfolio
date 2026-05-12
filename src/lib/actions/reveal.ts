import type { Action } from 'svelte/action';

export const reveal: Action<HTMLElement, number | undefined> = (node, delay) => {
	node.classList.add('reveal');
	if (delay) node.classList.add(`delay-${delay}`);

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add('in');
					io.unobserve(e.target);
				}
			});
		},
		{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
	);

	io.observe(node);
	return { destroy: () => io.disconnect() };
};
