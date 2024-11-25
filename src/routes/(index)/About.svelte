<script lang="ts">
	import { ImagePortrait } from '$lib/assets/images';
	import { languageTag } from '$lib/paraglide/runtime';
</script>

<section
	id="about"
	class="flex w-full flex-col items-center justify-center gap-20 text-center lg:flex-row lg:text-left"
>
	<div class="relative my-12 w-full lg:my-16">
		<div class="absolute -right-8 top-16 hidden flex-col items-center lg:flex">
			<span class="w-fit rotate-90 rounded-md bg-primary p-2 px-5 text-xl text-primary-content">
				{#if languageTag() === 'it'}
					CHI SONO
				{:else}
					ABOUT ME
				{/if}
			</span>
			<span class="h-36 w-[2px] bg-[#1a1443]"></span>
		</div>
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
			<div class="order-2 flex flex-col items-center justify-center gap-5 lg:order-1">
				<p class="mb-5 block text-xl font-bold text-primary-content lg:hidden">
					{#if languageTag() === 'it'}
						Chi sono?
					{:else}
						Who am I?
					{/if}
				</p>
				<p class="text-gray-200">
					{#if languageTag() === 'it'}
						Software Engineer specializzato nello sviluppo full-stack, con un approccio orientato
						all’innovazione e alla creazione di soluzioni efficienti e scalabili. Mi impegno a
						combinare design intuitivo e architetture robuste, utilizzando tecnologie moderne e
						metodologie agili. Sempre pronto a raccogliere nuove sfide per crescere e contribuire a
						progetti innovativi.
					{:else}
						Software Engineer with a focus on full-stack development, driven by innovation and the
						creation of efficient, scalable solutions. I’m dedicated to combining intuitive design
						with robust architectures, leveraging modern technologies and agile methodologies.
						Always eager to take on new challenges, grow, and contribute to innovative projects.
					{/if}
				</p>
			</div>
			<div class="order-1 flex justify-center sm:max-h-[700px] lg:order-2 lg:max-h-96">
				<enhanced:img
					src={ImagePortrait}
					alt={languageTag() === 'it' ? 'Ritratto Tamer Hayek' : 'Tamer Hayek portrait'}
					class="w-fit rounded-lg object-contain sm:max-h-[700px] lg:max-h-96"
				/>
			</div>
		</div>
	</div>
</section>
