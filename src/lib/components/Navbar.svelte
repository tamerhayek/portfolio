<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<nav class="nav">
	<div class="nav-inner">
		<a href={resolve('/')} class="nav-brand">
			<span class="dot"></span>
			<span>tamerhayek</span><span style="color: var(--text-muted)">.com</span>
		</a>
		<div class="nav-links">
			<a href={resolve('/#stack')}><span class="slash">/</span>stack</a>
			<a href={resolve('/#projects')}><span class="slash">/</span>projects</a>
			<a href={resolve('/#about')}><span class="slash">/</span>about</a>
			<a href={resolve('/#talks')}><span class="slash">/</span>talks</a>
			<a href={resolve('/#contact')}><span class="slash">/</span>contact</a>
		</div>
		<div class="nav-actions">
			<a
				class="nav-icon"
				href="https://github.com/tamerhayek"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
			>
				<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
					<path
						d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.79.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"
					/>
				</svg>
			</a>
			<a
				class="nav-icon"
				href="https://linkedin.com/in/tamerhayek"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn"
			>
				<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
					<path
						d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v15.5H.22V8Zm7.6 0h4.37v2.12h.06c.61-1.16 2.11-2.39 4.34-2.39 4.64 0 5.5 3.05 5.5 7.02v8.75h-4.55v-7.76c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.1v7.89H7.82V8Z"
					/>
				</svg>
			</a>
			<a
				class="nav-icon"
				href="https://x.com/tamibyte"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="X"
			>
				<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
					<path
						d="M18.244 2H21l-6.52 7.45L22.5 22h-6.84l-4.78-6.27L5.18 22H2.42l7.02-8.02L1.5 2h7l4.33 5.74L18.244 2Zm-2.4 18h1.86L8.27 4H6.3l9.544 16Z"
					/>
				</svg>
			</a>
		</div>
	</div>
</nav>
