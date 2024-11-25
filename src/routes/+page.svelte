<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	function redirectToOtherRoute(route) {
		goto(route);
	}

	onMount(() => {
		redirectToOtherRoute('/home');
	});
</script>

<h1>Redirecting...</h1>
