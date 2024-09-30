<script lang="ts">
	// types
	import type { Type___NavbarLink } from '$lib/types/types';
	// components
	import Navbar from '$lib/components/c__navbar.svelte';
	// contexts - stores
	import { Store___Auth } from '$lib/stores/s__auth';
	import { setContext } from 'svelte';

	// context and store configuration
	setContext("store___auth", Store___Auth)

	// data slot
	const Data___NavLinks: Type___NavbarLink[] = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<main>
	<Navbar links={Data___NavLinks} />
	<slot />
</main>
