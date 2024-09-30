<script lang="ts">
	// Importations
	import { Store___Auth, Store___Auth__Login, Store___Auth__Logout } from '$lib/stores/s__auth';
	import type { Type___NavbarLink, Type___StoreAuth } from '$lib/types/types';
	import { onDestroy } from 'svelte';
	import Button from './shadcn/ui/button/button.svelte';
	import { page } from '$app/stores';
	import clsx from 'clsx';

	// Exportations - props
	export let links: Type___NavbarLink[] = [];

	$: pathname = $page.url.pathname;

	/**
	 * Context Consume with LifeCycle
	 */
	let userContext: Type___StoreAuth;

	const unsubscribe = Store___Auth.subscribe((value) => {
		userContext = value;
	});

	onDestroy(unsubscribe);

	// Event handlers
	const handleLogin = () => {
		if (userContext?.token) {
			Store___Auth__Logout();
		} else {
			Store___Auth__Login({
				token: '___dummy_token___',
				uid: '4234212423'
			});
		}
	};
</script>

<header>
	<nav class="border-b shadow-xl">
		<div class="container flex items-center justify-between gap-10 py-2">
			<a href="/" class="flex items-center gap-1 font-bold text-xl text-primary/90">Varianter</a>
			<ul class="flex items-center justify-center gap-8">
				{#each links as link}
					<li
						class={clsx('border-b transition ease-in-out duration-300', {
							'border-primary': pathname === link.href,
							'border-primary/0': pathname !== link.href
						})}
					>
						<a href={link.href}>{link.name}</a>
					</li>
				{/each}
			</ul>
			<div>
				<Button on:click={handleLogin} variant={userContext?.token ? 'destructive' : 'default'}>
					{userContext?.token ? 'Logout' : 'Login'}
				</Button>
			</div>
		</div>
	</nav>
</header>
