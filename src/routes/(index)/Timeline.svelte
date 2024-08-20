<script lang="ts">
	import { languageTag } from '$paraglide/runtime';
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
			title:
				languageTag() === 'it' ? 'Partnership con Olympos Hub' : 'Partnership with Olympos Hub',
			description:
				languageTag() === 'it'
					? `Olympos Hub è leader nello sviluppo di applicazioni web per piccole e medie imprese e aziende, che lanciano prodotti software in modo rapido ed economico, accelerando il processo di validazione delle idee sul mercato.
					Sono stato responsabile della progettazione e dell'implementazione del frontend e del backend dell'applicazione, utilizzando una serie di linguaggi di programmazione e framework combinati con una serie di strumenti low-code/no-code per accelerare il processo di sviluppo.`
					: `Olympos Hub is a leader in web application development for small and medium enterprises,
					launching software products quickly and cost-effectively, accelerating the process of validating ideas in the market.
					I was responsible for designing and implementing the application's front-end and back-end,
					using a range of programming languages and frameworks combined with a set of low-code/no-code tools to speed up the development process.`,
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
					? `Sono responsabile dello sviluppo di applicazioni web dall'inizio alla fine, compreso lo sviluppo frontend e backend.
					Il mio lavoro di sviluppatore full stack prevede l'utilizzo di un'ampia gamma di linguaggi e frameworks. Ho anche familiarità con vari strumenti di sviluppo come Git e strumenti low-code come Wappler e Squarespace.`
					: `I am responsible for developing web applications from start to finish, including both the front-end and back-end development.
					My work as a full stack developer involves using a wide range of programming languages and frameworks.
					I am also familiar with various development tools such as Git and low-code tools such as Wappler and Squarespace.`,
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
			<h2>{event.title} <span class="badge badge-secondary badge-lg ml-2">{event.type}</span></h2>
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
			<div class="my-2 h-[1px] w-1/2 bg-gradient-to-r from-secondary to-primary"></div>
		{/if}
	{/each}
</section>
