<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	// Derive the current path from the page store to ensure reactivity
	const currentPath = derived(page, $page => $page.url.pathname);
</script>

<header>
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$currentPath === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<!--li aria-current={$currentPath === '/events' ? 'page' : undefined}>
				<a href="/events">Events</a>
			</li-->
			<li aria-current={$currentPath.startsWith('/resources') ? 'page' : undefined}>
				<a href="/resources">Resources</a>
			</li>
			<li aria-current={$currentPath === '/mindfulness-questions-and-answers' ? 'page' : undefined}>
				<a href="/mindfulness-questions-and-answers">Q&A</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
</header>

<style>
	header {
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	nav {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid red; /* Active indicator color */
	}

	/* Style the active link text color */
	li[aria-current='page'] a {
		color: red; /* Active text color */
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
