<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import ProductGallery from '$lib/components/ProductGallery.svelte';


	export let data;

	const componentMap = {
		hero: Hero,
		features: Features,
		testimonials: Testimonials,
		'product-gallery': ProductGallery
	};
	if (browser && data.status === 404) {
		goto('/404');
	}
	$: components = data.page.components.sort((a, b) => a.order - b.order);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

{#each components as component}
	{@const Component = componentMap[component.component.type]}
	{#if data.meta.slug === 'home'}
		{#if component.component.type === 'hero'}
			<Component content={component.content} />
		{:else if data.page.layout.sections.find((s) => s.component === component.id)?.width === 'contained'}
			<div class="container mx-auto px-4">
				<Component content={component.content} />
			</div>
		{/if}
	{:else if data.meta.slug === 'catalog'}
		<Component content={component.content} />
	{/if}
{/each}
