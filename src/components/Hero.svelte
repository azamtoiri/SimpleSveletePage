<script>
	import BaseComponent from './BaseComponent.svelte';

	export let content = {
		title: '',
		subtitle: '',
		backgroundImage: '',
		ctaButton: { text: '', url: '' }
	};
</script>

<BaseComponent {content}>
	<div
		class="hero relative flex h-screen items-center justify-center bg-cover bg-center"
		style="background-image: url({content.backgroundImage})"
	>
		<div class="hero-content rounded-lg bg-black bg-opacity-50 p-8 text-center">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">{content.title}</h1>
			<p class="mb-6 text-lg text-gray-300 md:text-xl">{content.subtitle}</p>
			{#if content.ctaButton}
				<a
					href={content.ctaButton.url}
					class="btn rounded bg-blue-600 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-500"
				>
					{content.ctaButton.text}
				</a>
			{/if}
		</div>
	</div>
</BaseComponent>
