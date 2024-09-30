<script lang="ts">
	import '../app.css';
	// types
	import type { Type___NavbarLink } from '@/types/types';
	// components
	import Header from '$lib/components/c__navbar.svelte';
	import Footer from '$lib/components/c__footer.svelte';
	// contexts - stores
	import { Store___Auth } from '$lib/stores/s__auth';
	import { setContext } from 'svelte';
	
	

	// context and store configuration
	setContext('store___auth', Store___Auth);

	// data slot
	const Data___NavLinks: Type___NavbarLink[] = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<Header links={Data___NavLinks}></Header>
<main>
	<slot />
</main>
<Footer />
