<script>
	export let content = {};
	export let schema = {};
</script>

<div
	class="component mb-6 rounded-lg p-6 shadow-lg"
	style="background-color: rgba(255, 255, 255, 0.5);"
>
	<slot {content} {schema}></slot>
</div>
