<script lang="ts">
	import Button from '@/components/shadcn/ui/button/button.svelte';
	import Input from '@/components/shadcn/ui/input/input.svelte';
	import { Store___Attributes, Store___Attributes__UpdateOne } from '@/stores/s__attributes';
	import type { Type___Attribute } from '@/types/types';
	import clsx from 'clsx';
	import { onDestroy } from 'svelte';

	export let name: string = '';
	let attribute: Type___Attribute = {
		name,
		values: []
	};
	const unsubscribe = Store___Attributes.subscribe(
		(value: Type___Attribute[]) =>
			(attribute = value.filter((item: Type___Attribute) => item.name === name)[0])
	);
	onDestroy(unsubscribe);

	let newValue = '';
	let editable = false;

	const toggleEditable = () => {
		if (editable) {
			editable = false;
		} else {
			editable = true;
		}
	};
	const removeValue = (value: string) => {
		attribute.values = attribute.values.filter((item: string) => item !== value);
        Store___Attributes__UpdateOne(attribute);
	};
	const handleNewValue = () => {
		if (newValue) {
			attribute.values = [...attribute.values, newValue];
			newValue = '';
            Store___Attributes__UpdateOne(attribute);
		}
	};

    
</script>

<div class="flex items-center justify-between rounded-md border p-4">
	<div class="grid grid-cols-1 gap-2">
		<p class={clsx('font-semibold', { block: !editable, hidden: editable })}>{attribute.name}</p>
		<Input
			bind:value={attribute.name}
			placeholder="e.g Size"
			class={clsx('', {
				block: editable,
				hidden: !editable
			})}
		/>
		<div>
			<div class="flex flex-wrap items-center gap-1">
				{#each attribute.values as value}
					<div class="flex items-center gap-2 rounded bg-gray-300 px-2 py-1 text-xs">
						{value}<button
							class={clsx('rounded bg-gray-600 px-1 text-white', {
								block: editable,
								hidden: !editable
							})}
							on:click={() => removeValue(value)}>x</button
						>
					</div>
				{/each}
			</div>
			<div
				class={clsx('grid grid-cols-1 gap-1 pt-2', {
					block: editable,
					hidden: !editable
				})}
			>
				<Input bind:value={newValue} />
				<button on:click={handleNewValue}>Add</button>
			</div>
		</div>
	</div>
	<Button on:click={toggleEditable} variant={editable ? 'default' : 'outline'}
		>{editable ? 'Save' : 'Edit'}</Button
	>
</div>
