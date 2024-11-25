<script>
	import { browser } from '$app/environment';
	import { editorStore } from '$lib/stores/editor';

	export let component;
	export let type;

	let isEditing = false;
	let localContent = JSON.parse(JSON.stringify(component.content));

	function toggleEdit() {
		isEditing = !isEditing;
		$editorStore.editMode = isEditing;
	}

	async function saveChanges() {
		try {
			const response = await fetch(`/api/page/components/${component.id}`, {
				method: 'PATCH',
				body: JSON.stringify({ content: localContent }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (response.ok) {
				component.content = localContent;
				isEditing = false;
				$editorStore.editMode = false;
			}
		} catch (error) {
			console.error('Ошибка сохранения:', error);
		}
	}
</script>

{#if browser && $editorStore.editMode}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
		<div class="max-h-[80vh] w-3/4 overflow-y-auto rounded-lg bg-white p-8">
			<h2 class="mb-4 text-2xl font-bold">Редактирование: {type}</h2>

			<div class="grid grid-cols-2 gap-4">
				{#each Object.entries(localContent) as [key, value]}
					<div>
						<label class="mb-2 block font-medium">{key}</label>
						{#if typeof value === 'string'}
							<input type="text" bind:value={localContent[key]} class="w-full rounded border p-2" />
						{:else if Array.isArray(value)}
							<div>
								<!-- {#each value as )}
                    <textarea 
                      bind:value={localContent[key][index]} 
                      class="w-full p-2 border rounded mb-2"
                    />
                  {/each} -->
							</div>
						{:else}
							<pre>{JSON.stringify(value, null, 2)}</pre>
						{/if}
					</div>
				{/each}
			</div>

			<div class="mt-6 flex justify-end">
				<button
					class="mr-4 rounded bg-gray-200 px-4 py-2 text-black"
					on:click={() => (isEditing = false)}
				>
					Отмена
				</button>
				<button class="rounded bg-blue-600 px-4 py-2 text-white" on:click={saveChanges}>
					Сохранить
				</button>
			</div>
		</div>
	</div>
{/if}
