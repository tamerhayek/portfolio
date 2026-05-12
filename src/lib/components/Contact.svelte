<script lang="ts">
	import Prompt from './Prompt.svelte';
	import SectionPrompt from './SectionPrompt.svelte';

	let active = $state(false);

	const contacts = [
		{
			href: 'https://github.com/tamerhayek',
			label: '// github',
			val: '@tamerhayek',
			iconStyle: 'background: rgba(255,255,255,0.04); color: var(--text)',
			icon: 'github',
		},
		{
			href: 'https://linkedin.com/in/tamerhayek',
			label: '// linkedin',
			val: '@tamerhayek',
			iconStyle: 'background: rgba(77,171,247,0.1); color: var(--color-blue)',
			icon: 'linkedin',
		},
		{
			href: 'https://instagram.com/tamerhayek',
			label: '// instagram',
			val: '@tamerhayek',
			iconStyle: 'background: rgba(216,134,255,0.12); color: var(--color-magenta)',
			icon: 'instagram',
		},
		{
			href: 'https://www.threads.com/@tamerhayek',
			label: '// threads',
			val: '@tamerhayek',
			iconStyle: 'background: rgba(255,255,255,0.06); color: var(--text)',
			icon: 'threads',
		},
		{
			href: 'https://x.com/tamibyte',
			label: '// x',
			val: '@tamibyte',
			iconStyle: 'background: rgba(255,255,255,0.04); color: var(--text)',
			icon: 'twitter',
		},
		{
			href: 'https://reddit.com/user/tamibyte',
			label: '// reddit',
			val: '@tamibyte',
			iconStyle: 'background: rgba(255,69,0,0.12); color: #ff4500',
			icon: 'reddit',
		},
		{
			href: 'https://discord.com/users/tamerhayek',
			label: '// discord',
			val: '@tamerhayek',
			iconStyle: 'background: rgba(88,101,242,0.15); color: #7289da',
			icon: 'discord',
		},
		{
			href: 'https://t.me/tamibyte',
			label: '// telegram',
			val: '@tamibyte',
			iconStyle: 'background: rgba(34,158,217,0.14); color: #229ed9',
			icon: 'telegram',
		},
	];
</script>

<section id="contact">
	<SectionPrompt step="06/06" command="contact --open" onActivate={() => (active = true)} />
	<div class="wrap">
		<div class="sec-body" class:in={active}>
			<div class="section-head">
				<div class="left">
					<div class="title">contact</div>
				</div>
				<div class="hint"><span class="kbd">esc</span> to dismiss</div>
			</div>
			<div class="section-rule"></div>

			<div class="contact-term">
				<div class="term-bar">
					<div class="lights"><span class="r"></span><span class="y"></span><span class="g"></span></div>
					<div class="term-title">~ / contact.sh</div>
					<div class="term-tabs"><span>ZSH</span></div>
				</div>
				<div class="contact-body">
					<Prompt command="contact --open --include=all" instant cursorSolid showCursor={false} />
					<div style="margin-top: 14px; color: var(--text-muted); font-size: 13px">
						<span class="ok" style="color: var(--secondary)">✓</span> connection ready. pick a transport:
					</div>

					<div class="contact-grid">
						{#each contacts as c (c.icon)}
							<a class="contact-card" href={c.href} target="_blank" rel="noopener noreferrer">
								<span class="icon" style={c.iconStyle}>
									{#if c.icon === 'github'}
										<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.79.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/></svg>
									{:else if c.icon === 'linkedin'}
										<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v15.5H.22V8Zm7.6 0h4.37v2.12h.06c.61-1.16 2.11-2.39 4.34-2.39 4.64 0 5.5 3.05 5.5 7.02v8.75h-4.55v-7.76c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.1v7.89H7.82V8Z"/></svg>
									{:else if c.icon === 'instagram'}
										<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
									{:else if c.icon === 'threads'}
										<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.2 11.42c-.1-.05-.2-.1-.3-.14-.16-3-1.81-4.73-4.57-4.75h-.04c-1.65 0-3.03.7-3.88 1.99l1.52 1.04c.63-.96 1.62-1.16 2.36-1.16h.03c.93 0 1.62.27 2.07.8.32.4.54.94.65 1.62-.81-.14-1.69-.18-2.62-.13-2.63.15-4.32 1.69-4.21 3.83.06 1.09.6 2.02 1.53 2.63.78.51 1.79.76 2.84.7 1.39-.07 2.48-.6 3.24-1.58.58-.74.94-1.7 1.11-2.92.7.42 1.22.98 1.5 1.65.5 1.14.52 3-1 4.52-1.32 1.32-2.91 1.89-5.32 1.91-2.68-.02-4.7-.88-6.02-2.56C5.06 17.31 4.4 15 4.38 12c.03-3 .68-5.31 1.94-6.88 1.32-1.68 3.34-2.54 6.02-2.56 2.69.02 4.76.88 6.13 2.57.67.83 1.18 1.87 1.52 3.09l1.81-.48c-.4-1.5-1.04-2.79-1.9-3.85-1.76-2.17-4.33-3.28-7.55-3.3h-.01c-3.22.02-5.76 1.14-7.45 3.32C3.34 5.85 2.56 8.61 2.5 12v.01c.06 3.4.84 6.16 2.36 8.08 1.7 2.19 4.24 3.31 7.46 3.33h.01c2.86-.02 4.88-.77 6.54-2.43 2.18-2.17 2.11-4.88 1.39-6.55-.51-1.19-1.5-2.16-2.85-2.83zm-4.74 4.81c-1.17.07-2.39-.46-2.45-1.61-.04-.85.61-1.8 2.52-1.91h.43c.7 0 1.36.07 1.96.2-.22 2.79-1.53 3.27-2.46 3.32z"/></svg>
									{:else if c.icon === 'twitter'}
										<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.84l-4.78-6.27L5.18 22H2.42l7.02-8.02L1.5 2h7l4.33 5.74L18.244 2Zm-2.4 18h1.86L8.27 4H6.3l9.544 16Z"/></svg>
									{:else if c.icon === 'reddit'}
										<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 12a2.5 2.5 0 0 0-4.243-1.77c-1.51-1.014-3.483-1.66-5.658-1.74l1.139-3.602 3.085.733a1.75 1.75 0 1 0 .219-.978l-3.444-.818a.5.5 0 0 0-.59.337l-1.32 4.318c-2.247.058-4.297.708-5.85 1.748A2.5 2.5 0 1 0 3.5 14.4a4.486 4.486 0 0 0-.115 1.009C3.385 18.49 7.241 21 12 21s8.615-2.51 8.615-5.59c0-.346-.04-.683-.115-1.009A2.5 2.5 0 0 0 22 12zM8.5 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm6.71 4.21c-.918.918-2.4 1.36-3.71 1.36-1.31 0-2.792-.442-3.71-1.36a.5.5 0 0 1 .707-.707c.703.703 1.953 1.067 3.003 1.067s2.3-.364 3.003-1.067a.5.5 0 0 1 .707.707zM14 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
									{:else if c.icon === 'discord'}
										<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.075.035c-.21.375-.444.864-.608 1.25a18.37 18.37 0 0 0-5.49 0 12.7 12.7 0 0 0-.617-1.25.077.077 0 0 0-.075-.035 19.74 19.74 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.1 14.1 0 0 0 1.226-1.994.075.075 0 0 0-.041-.105 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.127c.126-.094.252-.193.371-.292a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.245.198.372.292a.077.077 0 0 1-.006.127c-.598.349-1.22.645-1.873.892a.077.077 0 0 0-.041.106c.36.7.772 1.366 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.673-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/></svg>
									{:else if c.icon === 'telegram'}
										<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
									{/if}
								</span>
								<div>
									<div class="label">{c.label}</div>
									<div class="val">{c.val}</div>
								</div>
							</a>
						{/each}
					</div>

					<div style="margin-top: 22px; color: var(--text-muted); font-size: 13px">
						<Prompt instant command="" showCursor cursorSolid={false} />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
