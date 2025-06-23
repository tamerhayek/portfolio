<script lang="ts">
	import { page } from '$app/stores';
	import '../../app.css';
	import About from './About.svelte';
	import Hero from './Hero.svelte';
	import Portfolio from './Portfolio.svelte';
	import Stack from './Stack.svelte';
	import Talks from './Talks.svelte';
	import Timeline from './Timeline.svelte';
</script>

<svelte:head>
	<title>Tamer Hayek</title>
	<meta name="title" content="Tamer Hayek" />
	<meta
		name="description"
		content="I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences. With a solid foundation in both frontend and backend development, I specialize in utilizing cutting-edge technologies to build responsive, scalable, and dynamic applications. I thrive in collaborative environments and I am committed to delivering exceptional results for clients. I am constantly seeking to expand my skills and knowledge, and I am excited to contribute my talents to any team or project that values innovation, creativity, and excellence."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tamerhayek.com{$page.url.pathname}" />
	<meta property="og:site_name" content="Tamer Hayek" />
	<meta property="og:title" content="Tamer Hayek" />
	<meta
		property="og:description"
		content="I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences. With a solid foundation in both frontend and backend development, I specialize in utilizing cutting-edge technologies to build responsive, scalable, and dynamic applications. I thrive in collaborative environments and I am committed to delivering exceptional results for clients. I am constantly seeking to expand my skills and knowledge, and I am excited to contribute my talents to any team or project that values innovation, creativity, and excellence."
	/>
	<meta property="og:image" content="https://tamerhayek.com/avatar.webp" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://tamerhayek.com{$page.url.pathname}" />
	<meta property="twitter:title" content="Tamer Hayek" />
	<meta
		property="twitter:description"
		content="I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences. With a solid foundation in both frontend and backend development, I specialize in utilizing cutting-edge technologies to build responsive, scalable, and dynamic applications. I thrive in collaborative environments and I am committed to delivering exceptional results for clients. I am constantly seeking to expand my skills and knowledge, and I am excited to contribute my talents to any team or project that values innovation, creativity, and excellence."
	/>
	<meta property="twitter:image" content="https://tamerhayek.com/avatar.webp" />
</svelte:head>

<div class="flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-20 px-5">
	<Hero />

	<About />

	<Stack />

	<Timeline />

	<Portfolio />

	<Talks />
</div>
