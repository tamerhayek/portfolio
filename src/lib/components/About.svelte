<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import SectionPrompt from './SectionPrompt.svelte';

	let active = $state(false);
</script>

<section id="about">
	<SectionPrompt step="04/06" command="cat about.yaml" onActivate={() => (active = true)} />
	<div class="wrap">
		<div class="sec-body" class:in={active}>
			<div class="section-head">
				<div class="left">
					<div class="title">about</div>
				</div>
				<div class="hint"><span class="kbd">tab</span> autocomplete</div>
			</div>
			<div class="section-rule"></div>

			<div class="about-grid">
				<div use:reveal>
					<div class="term">
						<div class="term-bar">
							<div class="lights">
								<span class="r"></span><span class="y"></span><span class="g"></span>
							</div>
							<div class="term-title">~ / about.yaml</div>
							<div class="term-tabs"><span>YAML</span></div>
						</div>
						<div class="term-body">
							<div>
								<span class="key">name</span><span class="pun">:</span>
								<span class="str">"Tamer Hayek"</span>
							</div>
							<div>
								<span class="key">based</span><span class="pun">:</span>
								<span class="str">"Rome, Italy"</span>
							</div>
							<div>
								<span class="key">role</span><span class="pun">:</span>
								<span class="str">"freelance software engineer"</span>
								<span class="com"># since 2022</span>
							</div>
							<div>
								<span class="key">studying</span><span class="pun">:</span>
								<span class="str">"Computer Science @ Sapienza"</span>
							</div>
							<div><span class="key">flavors</span><span class="pun">:</span></div>
							<div style="padding-left: 18px">
								<div>
									<span class="pun">-</span>
									<span class="str">"certified nerd: TCG, gaming, self-hosting"</span>
								</div>
								<div>
									<span class="pun">-</span>
									<span class="str">"self-hosted everything. yes, even the bookmarks"</span>
								</div>
								<div>
									<span class="pun">-</span>
									<span class="str">"docker compose is a love language"</span>
								</div>
								<div>
									<span class="pun">-</span>
									<span class="str">"opinions: strong, loosely held"</span>
								</div>
							</div>
							<div style="margin-top: 10px">
								<span class="key">currently</span><span class="pun">:</span>
							</div>
							<div style="padding-left: 18px">
								<div>
									<span class="key">building</span><span class="pun">:</span>
									<span class="str">"a self-hosted money/budget tracker"</span>
								</div>
								<div>
									<span class="key">collecting</span><span class="pun">:</span>
									<span class="str">"trading cards"</span>
								</div>
								<div>
									<span class="key">drinking</span><span class="pun">:</span>
									<span class="str">"anything except coffee"</span>
									<span class="com"># last dev on earth without an espresso dependency</span>
								</div>
							</div>
							<div style="margin-top: 16px">
								<span class="ok">✓ </span><span style="color: var(--text-muted)"
									>exit 0. process completed</span
								>
							</div>
						</div>
					</div>
				</div>

				<div class="about-side">
					<div use:reveal={1}>
						<div class="about-stat">
							<div class="n">7+</div>
							<div class="l">projects in <span class="accent">production</span></div>
						</div>
					</div>
					<div use:reveal={2}>
						<div class="about-list">
							<h4>// what i'm into</h4>
							<ul>
								<li>self-hosting all the things</li>
								<li>trading card games &amp; deckbuilding</li>
								<li>boardgames &amp; videogames</li>
								<li>minimal, fast websites</li>
								<li>boring tech that scales</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
