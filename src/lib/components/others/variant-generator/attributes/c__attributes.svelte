<script lang="ts">
	import Button from '@/components/shadcn/ui/button/button.svelte';
	import AttributeItem from './c__attributes_item.svelte';
	import type { Type___Attribute } from '@/types/types';
	import { Default___Attributes, Store___Attributes } from '@/stores/s__attributes';
	import { onDestroy } from 'svelte';

	let attributes: Type___Attribute[] = Default___Attributes;
	const unsubscribe = Store___Attributes.subscribe(
		(value: Type___Attribute[]) => (attributes = value)
	);
	onDestroy(unsubscribe);
</script>

<div class="space-y-2 rounded-lg border bg-white p-4">
	<h4 class="font-bold">Attributes</h4>
	{#if attributes?.length}
		<div class="space-y-2">
			{#each attributes as attribute}
				<AttributeItem name={attribute.name} />
			{/each}
		</div>
	{:else}
		<div>No attributes there! Add a new attribute</div>
	{/if}
	<div>
		<Button variant="destructive">Clear All</Button>
		<Button>Add New</Button>
	</div>
</div>
