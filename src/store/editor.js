import { writable } from 'svelte/store';

export const editorStore = writable({
	selectedComponent: null,
	editMode: false
});
