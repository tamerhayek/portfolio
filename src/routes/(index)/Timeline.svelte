<script lang="ts">
	import { languageTag } from '$lib/paraglide/runtime';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowUpRight, Calendar, CalendarCheck } from '@steeze-ui/tabler-icons';

	const timeline = [
		{
			title: languageTag() === 'it' ? 'Ingegneria Informatica' : 'Computer Science Degree',
			description:
				languageTag() === 'it' ? 'La Sapienza Università di Roma' : 'Sapienza University of Rome',
			type: languageTag() === 'it' ? 'Educazione' : 'Education',
			date: languageTag() === 'it' ? '2019 - in corso' : '2019 - in progress',
			completed: false
		},
		{
			title: 'Software Engineer - Olympos Hub',
			description:
				languageTag() === 'it'
					? "Forniamo soluzioni integrate per i servizi basati sul web, curando ogni aspetto funzionale alla realizzazione dei progetti dei nostri clienti: dalla progettazione allo sviluppo web, dall'implementazione alla gestione di reti e dispositivi hardware."
					: "We provide integrated solutions for web-based services, taking care of every functional aspect in the realization of our customers' projects: from design to web development, from implementation to the management of networks and hardware devices.",
			type: languageTag() === 'it' ? 'Lavoro' : 'Work',
			date: languageTag() === 'it' ? 'Settembre 2022 - in corso' : 'September 2022 - in progress',
			completed: false,
			href: 'https://olymposhub.io',
			linkName: languageTag() === 'it' ? 'Sito Web' : 'Website'
		},
		{
			title: 'Fullstack Developer Freelance',
			description:
				languageTag() === 'it'
					? 'Sono un Full Stack Developer freelance, esperto nella creazione di soluzioni digitali complete, dallo sviluppo frontend intuitivo a backend robusti e scalabili. Collaboro con clienti per trasformare le loro idee in realtà, utilizzando tecnologie moderne.'
					: 'I am a freelance Full Stack Developer, skilled in creating end-to-end digital solutions, from intuitive frontend development to robust, scalable backend systems. I collaborate with clients to turn their ideas into reality using modern technologies.',
			type: languageTag() === 'it' ? 'Lavoro' : 'Work',
			date: languageTag() === 'it' ? 'Gennaio 2023 - in corso' : 'January 2023 - in progress',
			completed: false
		},
		{
			title: 'React.js & Redux',
			description:
				languageTag() === 'it'
					? 'Corso per React.js e Redux.js fornito da Udemy. Credenziali ID: UC-688266d7-9300-41c8-94da-3b2933c081b4'
					: 'Course for React.js and Redux.js provided by Udemy. Credential ID: UC-688266d7-9300-41c8-94da-3b2933c081b4',
			type: languageTag() === 'it' ? 'Educazione' : 'Education',
			date: languageTag() === 'it' ? 'Maggio 2023' : 'May 2023',
			completed: true,
			href: 'https://www.udemy.com/certificate/UC-688266d7-9300-41c8-94da-3b2933c081b4/',
			linkName: languageTag() === 'it' ? 'Certificato' : 'Certificate'
		}
	];
</script>

<section id="timeline" class="flex w-full flex-col items-center justify-center gap-5 text-center">
	{#each timeline as event, index}
		<div class="flex w-full flex-col gap-5 rounded-xl border-2 border-primary p-5 text-left">
			<h3 class="flex flex-wrap items-center gap-2 text-white">
				{event.title} <span class="badge badge-secondary badge-lg">{event.type}</span>
			</h3>
			<p
				class="flex items-center gap-2"
				class:text-gray-400={event.completed}
				class:italic={!event.completed}
				class:text-secondary={!event.completed}
			>
				{#if event.completed}
					<Icon size="24px" src={CalendarCheck} />
				{:else}
					<Icon size="24px" src={Calendar} />
				{/if}
				{event.date}
			</p>
			<p class="leading-8">{event.description}</p>
			{#if event.href && event.linkName}
				<a class="btn btn-primary w-fit" href={event.href}>
					<Icon size="24px" src={ArrowUpRight} />
					{event.linkName}
				</a>
			{/if}
		</div>
		{#if index < timeline.length - 1}
			<div class="my-2 h-[1px] w-1/2 bg-secondary"></div>
		{/if}
	{/each}
</section>
