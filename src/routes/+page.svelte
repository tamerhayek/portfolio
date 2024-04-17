<script lang="ts">
	import { page } from '$app/stores';
	import { translate } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		BrandCss3,
		BrandHtml5,
		BrandJavascript,
		BrandMongodb,
		BrandNextjs,
		BrandNodejs,
		BrandReact,
		BrandSvelte,
		BrandTailwind,
		BrandTypescript,
		Mail,
		Sql,
		ArrowUpRight,
		Calendar,
		CalendarCheck
	} from '@steeze-ui/tabler-icons';
	import '../app.css';

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

	const portfolio = [
		{
			title: 'Portfolio',
			description: languageTag() === 'it' ? 'Il mio portfolio' : 'This is my portfolio',
			image: '/assets/images/projects/game-hub.webp',
			alt: languageTag() === 'it' ? 'Sito Web Portfolio' : 'Portfolio Website',
			href: '/',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		},
		{
			title: 'Olympos Hub',
			description: languageTag() === 'it' ? 'Sito Web Olympos Hub' : 'Olympos Hub Website',
			image: '/assets/images/projects/olymposhub.webp',
			alt: languageTag() === 'it' ? 'Sito Web Olympos Hub' : 'Olympos Hub Website',
			href: 'https://olymposhub.io',
			skills: ['HTML5', 'CSS3', 'JavaScript', 'Wappler']
		},
		{
			title: 'Clarisse Grosseto',
			description:
				languageTag() === 'it' ? 'Sito Web Clarisse Grosseto' : 'Clarisse Grosseto Website',
			image: '/assets/images/projects/clarisse-grosseto.webp',
			alt: languageTag() === 'it' ? 'Sito Web Clarisse Grosseto' : 'Clarisse Grosseto Website',
			href: 'https://clarissegrosseto.it',
			skills: ['HTML5', 'CSS3', 'Typescript', 'SvelteKit', 'TailwindCSS', 'DaisyUI']
		},
		{
			title: languageTag() === 'it' ? 'Progetto Game Hub' : 'Game Hub Project',
			description:
				languageTag() === 'it'
					? 'Progetto personale che prende i giochi dalle API RAWG'
					: 'Personal project that fetchs games using RAWG API',
			image: '/assets/images/projects/game-hub.webp',
			alt: languageTag() === 'it' ? 'Progetto personale Game Hub' : 'Game Hub personal project',
			href: 'https://game-hub-tamerhayek.netlify.app/',
			skills: ['HTML5', 'CSS3', 'Typescript', 'React', 'ChakraUI']
		}
	];
</script>

<svelte:head>
	<title>{translate.title()}</title>
	<meta name="title" content={translate.title()} />
	<meta name="description" content={translate.description()} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.url.origin}{$page.url.pathname}" />
	<meta property="og:title" content={translate.title()} />
	<meta property="og:description" content={translate.description()} />
	<meta property="og:image" content="{$page.url.origin}/avatar.webp" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{$page.url.origin}{$page.url.pathname}" />
	<meta property="twitter:title" content={translate.title()} />
	<meta property="twitter:description" content={translate.description()} />
	<meta property="twitter:image" content="{$page.url.origin}/avatar.webp" />
</svelte:head>

<div class="flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-5">
	<section
		id="home"
		class="flex w-full flex-col items-center justify-center gap-20 text-center lg:flex-row lg:text-left"
	>
		<div class="order-2 flex shrink-0 flex-col gap-5 lg:order-1">
			<h1 class="text-4xl font-bold text-primary lg:text-6xl 2xl:text-7xl">
				{languageTag() === 'it' ? 'Tamer Hayek' : "I'm Tamer Hayek"}
			</h1>
			<h2 class="text-2xl md:text-3xl lg:text-5xl">Full Stack Developer</h2>
			<div class="py-5 lg:py-10">
				<a class="btn btn-primary" href={'mailto:dev@tamerhayek.com'}>
					{languageTag() === 'it' ? 'Contattami' : 'Contact me'}
					<Icon size="24px" src={Mail} class="transition-all hover:scale-110" />
				</a>
			</div>
		</div>
		<div
			class="relative order-1 rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] lg:order-2"
		>
			<div class="flex flex-row">
				<div
					class="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"
				></div>
				<div class="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
			</div>
			<div class="px-4 py-5 lg:px-8">
				<div class="flex flex-row space-x-2">
					<div class="h-3 w-3 rounded-full bg-red-400"></div>
					<div class="h-3 w-3 rounded-full bg-orange-400"></div>
					<div class="h-3 w-3 rounded-full bg-green-400"></div>
				</div>
			</div>
			<div
				class="overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 text-left lg:px-8 lg:py-8"
			>
				<code class="font-mono text-xs md:text-sm lg:text-base">
					<div class="blink">
						<span class="text-pink-500">const</span>
						<span class="text-white">programmer</span>
						<span class="text-pink-500">=</span>
						<span class="text-gray-400">{'{'}</span>
					</div>
					<div>
						<span class="ml-4 text-white lg:ml-8">name:</span>
						<span class="text-amber-300">'Tamer Hayek'</span>
					</div>
					<div class="ml-4 lg:ml-8">
						<span class="text-white">skills:</span>
						<span class="text-gray-400">{`[`}</span>
						<span class="text-amber-300">'HTML5'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'CSS3'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'Javascript'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'Typescript'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'NodeJS'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'Svelte'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'SvelteKit'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'React'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'NextJS'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'Docker'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'PostgreSql'</span>
						<span class="text-gray-400">{', '}</span>
						<span class="text-amber-300">'MongoDB'</span>
						<span class="text-gray-400">{'],'}</span>
					</div>
					<div>
						<span class="ml-4 text-white lg:ml-8">hardWorker:</span>
						<span class="text-orange-400">true</span>,
					</div>
					<div>
						<span class="ml-4 text-white lg:ml-8">quickLearner:</span>
						<span class="text-orange-400">true</span>,
					</div>
					<div>
						<span class="ml-4 text-white lg:ml-8">problemSolver:</span>
						<span class="text-orange-400">true</span>,
					</div>
					<div>
						<span class="text-gray-400">{`};`}</span>
					</div>
				</code>
			</div>
		</div>
	</section>

	<section
		id="about"
		class="flex w-full flex-col items-center justify-center gap-20 text-center lg:flex-row lg:text-left"
	>
		<div class="relative my-12 w-full lg:my-16">
			<div class="absolute -right-8 top-16 hidden flex-col items-center lg:flex">
				<span class="w-fit rotate-90 rounded-md bg-primary p-2 px-5 text-xl text-primary-content">
					{languageTag() === 'it' ? 'CHI SONO' : 'ABOUT ME'}
				</span>
				<span class="h-36 w-[2px] bg-[#1a1443]"></span>
			</div>
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div class="order-2 flex flex-col items-center justify-center gap-5 lg:order-1">
					<p class="mb-5 block text-xl font-bold text-primary lg:hidden">
						{languageTag() === 'it' ? 'Chi sono?' : 'Who am I?'}
					</p>
					<p class="text-gray-200">
						{#if languageTag() === 'it'}
							Sono uno sviluppatore web fullstack con la passione per la tecnologia e mi dedico alla
							creazione di esperienze digitali innovative e user-friendly. Con una solida base di
							sviluppo sia frontend che backend, sono specializzato nell'utilizzo di tecnologie
							all'avanguardia per costruire applicazioni reattive, scalabili e dinamiche.
						{:else}
							I'm a full-stack web developer with a passion for technology and I am dedicated to
							creating innovative and user-friendly digital experiences. With a solid foundation in
							both frontend and backend development, I specialize in utilizing cutting-edge
							technologies to build responsive, scalable, and dynamic applications.
						{/if}
					</p>
					<p class="text-gray-200">
						{#if languageTag() === 'it'}
							Mi trovo bene in ambienti collaborativi e mi impegno a fornire risultati eccezionali
							ai clienti. Cerco costantemente di ampliare le mie competenze e conoscenze e sono
							entusiasta di contribuire con il mio talento a qualsiasi team o progetto che apprezzi
							l'innovazione, la creatività e l'eccellenza.
						{:else}
							I thrive in collaborative environments and I am committed to delivering exceptional
							results for clients. I am constantly seeking to expand my skills and knowledge, and I
							am excited to contribute my talents to any team or project that values innovation,
							creativity, and excellence.
						{/if}
					</p>
				</div>
				<div class="order-1 flex justify-center lg:order-2">
					<img
						src="/assets/images/portrait.webp"
						width={280}
						height={280}
						alt="Tamer Hayek Portrait"
						class="aspect-square rounded-full object-contain"
					/>
				</div>
			</div>
		</div>
	</section>

	<div class="divider my-20" />

	<section
		id="stack"
		class="flex flex-col items-center justify-center gap-5 text-center lg:flex-row lg:text-right"
	>
		<div class="order-1 flex max-w-xl shrink-0 flex-col items-center lg:order-2">
			<h3 class="text-md py-2 leading-8 md:text-xl lg:max-w-2xl lg:text-2xl">
				{#if languageTag() === 'it'}
					Capace di costruire siti web da zero sfruttando diversi linguaggi, frameworks e librerie.
				{:else}
					Capable of building web applications from scratch using various programming languages,
					frameworks, and libraries.
				{/if}
			</h3>
			<div class="flex w-full flex-wrap justify-center gap-10 py-10 lg:justify-end">
				<Icon
					size="50px"
					src={BrandHtml5}
					class="cursor-pointer transition-colors hover:text-orange-500"
				/>
				<Icon
					size="50px"
					src={BrandCss3}
					class="cursor-pointer transition-colors hover:text-blue-600"
				/>
				<Icon
					size="50px"
					src={BrandJavascript}
					class="cursor-pointer transition-colors hover:text-yellow-500"
				/>
				<Icon
					size="50px"
					src={BrandTypescript}
					class="cursor-pointer transition-colors hover:text-blue-700"
				/>
				<a class="cursor-pointer" href="https://svelte.dev/">
					<Icon
						size="50px"
						src={BrandSvelte}
						class="cursor-pointer transition-colors hover:text-orange-500"
					/>
				</a>
				<a class="cursor-pointer" href="https://www.react.dev">
					<Icon
						size="50px"
						src={BrandReact}
						class="cursor-pointer transition-colors hover:text-blue-600"
					/>
				</a>
				<a class="cursor-pointer" href="https://nextjs.org/">
					<Icon
						size="50px"
						src={BrandNextjs}
						class="cursor-pointer transition-colors hover:text-gray-600"
					/>
				</a>
				<a class="cursor-pointer" href="https://tailwindcss.com/">
					<Icon
						size="50px"
						src={BrandTailwind}
						class="cursor-pointer transition-colors hover:text-blue-500"
					/>
				</a>
				<a class="cursor-pointer" href="https://nodejs.org">
					<Icon
						size="50px"
						src={BrandNodejs}
						class="cursor-pointer transition-colors hover:text-green-500"
					/>
				</a>
				<Icon size="50px" src={Sql} class="cursor-pointer transition-colors hover:text-blue-600" />
				<a class="cursor-pointer" href="https://mongodb.com/">
					<Icon
						size="50px"
						src={BrandMongodb}
						class="cursor-pointer transition-colors hover:text-green-600"
					/>
				</a>
			</div>
		</div>
		<div
			class="order-2 h-fit overflow-hidden rounded-xl object-contain pe-3 lg:order-1 lg:grow lg:pe-10"
		>
			<img
				class="h-full w-full rounded-xl object-cover object-center"
				src="/assets/images/tech_stack.webp"
				alt="Tech Stack"
			/>
		</div>
	</section>

	<div class="divider my-20" />

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

	<div class="divider my-20" />

	<section id="portfolio" class="my-5 flex min-h-screen flex-col items-center justify-center">
		<h3 class="text-center text-4xl font-bold tracking-tight sm:text-5xl">Showroom</h3>
		<div class="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
			{#each portfolio as website}
				<a
					href={website.href}
					class="cursor-pointer overflow-auto rounded-3xl border-[5px] border-primary bg-primary/10 transition-transform hover:scale-[1.02]"
				>
					<img
						src={website.image}
						alt={website.alt}
						class="mx-auto aspect-video w-full rounded-lg object-cover object-top"
					/>
					<div class="flex flex-col gap-3 p-5">
						<h3 class="text-xl font-bold xl:text-3xl">{website.title}</h3>
						<p class="py-2 text-lg text-gray-400 xl:text-xl">
							{website.description}
						</p>
						<div class="flex flex-wrap gap-5 py-2">
							{#each website.skills as skill}
								<span
									class="rounded-lg bg-secondary px-2 py-1 text-xs font-bold text-secondary-content xl:text-lg"
								>
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>
