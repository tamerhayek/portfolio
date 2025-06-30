<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowUpRight, CircleCheck, Progress } from '@steeze-ui/tabler-icons';

	const timeline = [
		{
			title: 'Computer Science Degree',
			description: 'Sapienza University of Rome',
			type: 'Education',
			date: '2019 - in progress',
			completed: false
		},
		{
			title: 'Software Engineer - Olympos Hub',
			description:
				"We provide integrated solutions for web-based services, taking care of every functional aspect in the realization of our customers' projects: from design to web development, from implementation to the management of networks and hardware devices.",
			type: 'Work',
			date: 'September 2022 - in progress',
			completed: false,
			href: 'https://olymposhub.io',
			linkName: 'Website'
		},
		{
			title: 'Fullstack Developer Freelance',
			description:
				'I am a freelance Full Stack Developer, skilled in creating end-to-end digital solutions, from intuitive frontend development to robust, scalable backend systems. I collaborate with clients to turn their ideas into reality using modern technologies.',
			type: 'Work',
			date: 'January 2023 - in progress',
			completed: false
		},
		{
			title: 'React.js & Redux',
			description: 'Course for React.js and Redux.js provided by Udemy.',
			type: 'Education',
			date: 'May 2023',
			completed: true,
			href: 'https://ude.my/UC-688266d7-9300-41c8-94da-3b2933c081b4/',
			linkName: 'Certificate'
		},
		{
			title: 'Master Svelte 5 & SvelteKit',
			description: 'Course for Svelte 5 and Sveltekit provided by Udemy.',
			type: 'Education',
			date: 'December 2024',
			completed: true,
			href: 'https://ude.my/UC-7fe1dca3-016e-4781-b4d4-45fb3515ebd5',
			linkName: 'Certificate'
		}
	];
</script>

<section id="timeline" class="my-5 flex min-h-screen flex-col items-center justify-center gap-10">
	<h3 class="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">Timeline</h3>
	<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
		{#each timeline as { title, description, date, type, href, linkName, completed }, index (index)}
			<li>
				<div class="timeline-middle">
					<Icon size="30px" src={completed ? CircleCheck : Progress} />
				</div>
				<div
					class:timeline-end={index % 2 === 1}
					class:md:text-end={index % 2 === 0}
					class:timeline-start={index % 2 === 0}
					class:md:text-start={index % 2 === 1}
					class:md:items-end={index % 2 === 0}
					class:md:items-start={index % 2 === 1}
					class="mx-4 mb-20 flex flex-col gap-5 text-start"
				>
					<time class="mt-2 font-mono text-sm italic md:text-base">{date}</time>
					<h4
						class:md:justify-end={index % 2 === 0}
						class="flex flex-col gap-2 text-lg font-black md:flex-row md:items-center md:text-xl"
					>
						<span class:md:order-2={index % 2 === 0} class:md:order-1={index % 2 === 1}>
							{title}
						</span>
						<span
							class:md:order-1={index % 2 === 0}
							class:md:order-2={index % 2 === 1}
							class="badge badge-primary badge-sm md:badge-lg">{type}</span
						>
					</h4>
					<p class="text-base leading-8">
						<!-- eslint-disable svelte/no-at-html-tags -->
						{@html description}
					</p>
					{#if href && linkName}
						<a class="btn btn-primary btn-sm md:btn-md w-fit" {href}>
							{linkName}
							<Icon size="20px" src={ArrowUpRight} />
						</a>
					{/if}
				</div>
				<hr />
			</li>
		{/each}
	</ul>
</section>
