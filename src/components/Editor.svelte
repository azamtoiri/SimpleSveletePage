<script>
	import { editorStore } from '$lib/stores/editor';

	export let component;

	async function saveChanges(content) {
		const response = await fetch(`/api/components/${component.id}`, {
			method: 'PATCH',
			body: JSON.stringify({ content }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			$editorStore.editMode = false;
		}
	}
</script>

{#if $editorStore.editMode}
	<div class="editor-overlay">
		<textarea bind:value={component.content} on:blur={() => saveChanges(component.content)}
		></textarea>
	</div>
{/if}
