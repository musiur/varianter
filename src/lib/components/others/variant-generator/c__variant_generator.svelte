<script lang="ts">
	import type { Type___Attribute } from '@/types/types';
	import Attributes from './attributes/c__attributes.svelte';
	import { Store___Attributes } from '@/stores/s__attributes';
	import { onDestroy } from 'svelte';

	let attributes: Type___Attribute[];
	const unsubscribe = Store___Attributes.subscribe(
		(values: Type___Attribute[]) => (attributes = values)
	);
	onDestroy(unsubscribe);
</script>

<Attributes />

<pre>{JSON.stringify(attributes)}</pre>
