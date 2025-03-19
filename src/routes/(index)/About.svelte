<script lang="ts">
	import { ImagePortrait } from '$lib/assets/images';
</script>

<section
	id="about"
	class="flex w-full flex-col items-center justify-center gap-20 text-center lg:flex-row lg:text-left"
>
	<div class="relative my-12 w-full lg:my-16">
		<div class="absolute top-16 -right-8 hidden flex-col items-center lg:flex">
			<span class="bg-secondary text-secondary-content w-fit rotate-90 rounded-md p-2 px-5 text-xl">
				ABOUT ME
			</span>
			<span class="h-36 w-[2px] bg-[#1a1443]"></span>
		</div>
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
			<div class="order-2 flex flex-col items-center justify-center gap-5 lg:order-1">
				<p class="text-secondary-content mb-5 block text-xl font-bold lg:hidden">Who am I?</p>
				<p class="text-gray-200">
					Software Engineer with a focus on full-stack development, driven by innovation and the
					creation of efficient, scalable solutions. I’m dedicated to combining intuitive design
					with robust architectures, leveraging modern technologies and agile methodologies. Always
					eager to take on new challenges, grow, and contribute to innovative projects.
				</p>
			</div>
			<div class="order-1 flex justify-center sm:max-h-[700px] lg:order-2 lg:max-h-96">
				<enhanced:img
					src={ImagePortrait}
					alt="Tamer Hayek portrait"
					class="w-fit rounded-lg object-contain sm:max-h-[700px] lg:max-h-96"
				/>
			</div>
		</div>
	</div>
</section>
