<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Features from './../../components/Features.svelte';
	import Testimonials from '../../components/Testimonials.svelte';
	import Hero from '../../components/Hero.svelte';
	import ProductGallery from '../../components/ProductGallery.svelte';
	import Header from '../../components/Header.svelte';
	import NotFound from '../../components/NotFound.svelte';

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

	export const goBack = () => {
		window.history.back();
	};

	$: components = data?.page?.components
		? data.page.components.sort((a, b) => a.order - b.order)
		: [];
</script>

<svelte:head>
	{#if data.meta.title}
		<title>{data.meta.title}</title>
		<meta name="description" content={data.meta.description} />
	{:else}
		<title>Not found</title>
	{/if}
</svelte:head>

{#if data.status === 200}
	{#each components as component}
		{@const Component = componentMap[component.component.type]}
		{#if data.meta.slug === 'home'}
			{#if component.component.type === 'header'}
				<Header content={component.content} />
			{:else if component.component.type === 'hero'}
				<Component content={component.content} />
			{:else if data.page.layout.sections.find((s) => s.component === component.id)?.width === 'contained'}
				<div class="container mx-auto px-4">
					<Component content={component.content} />
				</div>
			{:else if component.component.type === 'testimonials'}
				<Testimonials content={component.content}></Testimonials>
			{/if}
		{:else if data.meta.slug === 'catalog'}
			{#if component.component.type == 'header'}
				<Header content={component.content} />
			{:else}
				<Component content={component.content} />
			{/if}
		{/if}
	{/each}
{:else}
	<NotFound {goBack} />
{/if}
