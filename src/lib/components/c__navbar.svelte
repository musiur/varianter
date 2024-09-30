<script lang="ts">
	// Importations
	import { Store___Auth, Store___Auth__Login, Store___Auth__Logout } from '$lib/stores/s__auth';
	import type { Type___NavbarLink, Type___StoreAuth } from '$lib/types/types';
	import { onDestroy } from 'svelte';

	// Exportations - props
	export let links: Type___NavbarLink[] = [];

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

<nav>
	<ul>
		{#each links as link}
			<li><a href={link.href}>{link.name}</a></li>
		{/each}
	</ul>
	{#if userContext?.token}
		<p>Welcome back, user!</p>
	{:else}
		<p>Please log in.</p>
	{/if}

	<button on:click={handleLogin}>
		{userContext?.token ? 'Logout' : 'Login'}
	</button>
</nav>
