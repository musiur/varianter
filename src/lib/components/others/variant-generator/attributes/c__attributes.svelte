<script lang="ts">
	import Button from "@/components/shadcn/ui/button/button.svelte";
	import AttributeItem from "./c__attributes_item.svelte";
	import type { Type___Attribute } from "@/types/types";
	import {
		Default___Attributes,
		Store___Attributes,
		Store___Attributes__AddNew,
		Store___Attributes__ClearAll
	} from "@/stores/s__attributes";
	import { onDestroy } from "svelte";
	import Input from "@/components/shadcn/ui/input/input.svelte";

	let attributes: Type___Attribute[] = Default___Attributes;
	const unsubscribe = Store___Attributes.subscribe(
		(value: Type___Attribute[]) => (attributes = value)
	);
	onDestroy(unsubscribe);

	let newAttribute = "";

	const handleClearAll = () => {
		Store___Attributes__ClearAll();
		newAttribute = "";
	};

	const handleAddNewAttribute = () => {
		Store___Attributes__AddNew({ name: newAttribute, values: [] });
		newAttribute = "";
	};
</script>

<div class="space-y-2 rounded-lg border bg-white p-4">
	<div class="flex items-center justify-between gap-10">
		<h4 class="font-bold">Attributes</h4>
		<Button variant="destructive" on:click={handleClearAll}>Clear All</Button>
	</div>
	{#if attributes?.length}
		<div class="space-y-2">
			{#each attributes as attribute}
				<AttributeItem name={attribute.name} />
			{/each}
		</div>
	{:else}
		<div>No attributes there! Add a new attribute</div>
	{/if}

	<div class="flex items-center gap-2 rounded-md border bg-muted p-1">
		<Input bind:value={newAttribute} class="inline-flex bg-white" placeholder="e.g Size" />
		<Button
			on:click={() => newAttribute?.length && handleAddNewAttribute()}
			disabled={newAttribute?.length ? false : true}>Add New</Button
		>
	</div>
</div>
