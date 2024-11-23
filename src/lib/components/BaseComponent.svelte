<script>
	export let content = {};
	export let schema = {};
</script>

<!-- Базовый компонент с валидацией -->
<div class="component mb-6 rounded-lg bg-white p-6 shadow-lg">
	<slot {content} {schema}></slot>
</div>
