<script lang="ts">
	import { languageTag } from '$paraglide/runtime';
</script>

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
						Mi trovo bene in ambienti collaborativi e mi impegno a fornire risultati eccezionali ai
						clienti. Cerco costantemente di ampliare le mie competenze e conoscenze e sono
						entusiasta di contribuire con il mio talento a qualsiasi team o progetto che apprezzi
						l'innovazione, la creatività e l'eccellenza.
					{:else}
						I thrive in collaborative environments and I am committed to delivering exceptional
						results for clients. I am constantly seeking to expand my skills and knowledge, and I am
						excited to contribute my talents to any team or project that values innovation,
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
