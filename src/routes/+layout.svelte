<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';

	import IconMenu from 'lucide-svelte/icons/menu';
	import IconSunMoon from 'lucide-svelte/icons/sun-moon';
	import IconHome from 'lucide-svelte/icons/home';
	import IconInfo from 'lucide-svelte/icons/info';
	import IconLink from 'lucide-svelte/icons/link';
	import CircleHelp from 'lucide-svelte/icons/circle-help';

	let darkMode = $state(false);
	let isSidebarOpen = $state(false);

	// -----------------------
	// ROUTE CONFIG (single source of truth)
	// -----------------------
	type Route = {
		href: string;
		label: string;
		header: string;
		icon: typeof IconHome; // all lucide icons share this shape
		match: (path: string) => boolean;
	};

	const routes: Route[] = [
		{
			href: '/',
			label: 'Home',
			header: 'Mindfulness Cultivation',
			icon: IconHome,
			match: (path: string) => path === '/'
		},
		{
			href: '/mindfulness-questions-and-answers',
			label: 'Mindfulness Q&A',
			header: 'Mindfulness Q&A',
			icon: CircleHelp,
			match: (path: string) => path.startsWith('/mindfulness-questions-and-answers')
		},
		{
			href: '/mindfulness-resources',
			label: 'Mindfulness Resources',
			header: 'Mindfulness Resources',
			icon: IconLink,
			match: (path: string) => path.startsWith('/mindfulness-resources')
		},
		{
			href: '/about-doron-tal',
			label: 'About',
			header: 'Doron Tal - Background',
			icon: IconInfo,
			match: (path: string) => path.startsWith('/about-doron-tal')
		}
	];

	// -----------------------
	// DARK MODE
	// -----------------------
	const applyDarkMode = (value: boolean) =>
		document.documentElement.classList.toggle('dark', value);

	onMount(() => {
		const stored = localStorage.getItem('darkMode');
		darkMode =
			stored !== null
				? stored === 'true'
				: window.matchMedia('(prefers-color-scheme: dark)').matches;

		applyDarkMode(darkMode);
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('darkMode', String(darkMode));
		applyDarkMode(darkMode);
	}

	// -----------------------
	// SIDEBAR
	// -----------------------
	const toggleSidebar = () => (isSidebarOpen = !isSidebarOpen);
	const closeSidebar = () => {
		if (window.innerWidth < 768) isSidebarOpen = false;
	};

	onNavigate(() => {
		isSidebarOpen = false;
	});

	// -----------------------
	// DERIVED VALUES
	// -----------------------
	const baseNavClass = 'flex items-center gap-3 px-4 py-2 text-base rounded-lg';

	function navClass(route: Route) {
		const path = page.url.pathname;
		return route.match(path)
			? `${baseNavClass} bg-surface-300 dark:bg-surface-600 font-medium`
			: `${baseNavClass} hover:bg-surface-200 dark:hover:bg-surface-700`;
	}

	function headerText() {
		const path = page.url.pathname;
		return routes.find((r) => r.match(path))?.header ?? 'Mindfulness Cultivation';
	}

	let { children } = $props();
</script>

<div class="flex h-screen flex-col">
	<header
		class="bg-surface-200-800 sticky top-0 z-10 backdrop-blur-md"
		role="heading"
		aria-level="1"
	>
		<div class="flex h-14 items-center p-2">
			<button onclick={toggleSidebar} class="btn-icon ml-1 md:hidden">
				<IconMenu size="24" />
			</button>

			<div class="flex flex-auto justify-center">
				<span class="h6">{headerText()}</span>
			</div>

			<button onclick={toggleDarkMode} class="btn-icon mr-3 ml-auto">
				<IconSunMoon size="24" />
			</button>
		</div>
	</header>

	<div class="relative flex flex-1 overflow-hidden">
		<!-- Backdrop -->
		<button
			type="button"
			class="fixed inset-0 bg-gray-800/50 md:hidden"
			class:hidden={!isSidebarOpen}
			onclick={closeSidebar}
			aria-label="Close sidebar"
		></button>

		<!-- Sidebar -->
		<aside
			class="bg-surface-100-900 md:block"
			class:fixed={isSidebarOpen}
			class:hidden={!isSidebarOpen}
			class:top-14={isSidebarOpen}
			class:left-0={isSidebarOpen}
			class:z-20={isSidebarOpen}
			class:w-64={isSidebarOpen}
		>
			<Navigation layout="sidebar">
				<Navigation.Content>
					<Navigation.Group>
						<Navigation.Menu class="space-y-1 p-1">
							{#each routes as route}
								<Navigation.TriggerAnchor href={route.href} class={navClass(route)}>
									{#if route.icon}
										<route.icon class="size-5 shrink-0" />
									{/if}
									<Navigation.TriggerText>
										{route.label}
									</Navigation.TriggerText>
								</Navigation.TriggerAnchor>
							{/each}
						</Navigation.Menu>
					</Navigation.Group>
				</Navigation.Content>
			</Navigation>
		</aside>

		<!-- Main -->
		<div class="flex flex-1 flex-col overflow-hidden">
			<main class="flex-1 overflow-y-auto p-4">
				{@render children()}
			</main>
		</div>
	</div>
</div>
