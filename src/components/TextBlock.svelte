<script>
	import BaseComponent from './BaseComponent.svelte';

	export let content = {
		heading: '',
		body: '',
		alignment: 'left'
	};
</script>

<BaseComponent {content}>
	<div class="text-block text-{content.alignment}">
		<h2>{content.heading}</h2>
		<div class="body-content">
			{@html content.body}
		</div>
	</div>
</BaseComponent>
