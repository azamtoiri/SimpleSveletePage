<script>
	import { Heart, ShoppingCart } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	export let content = {
		title: 'Our products',
		products: []
	};

	let selectedProduct = null;
</script>

<section
	class="flex flex-1 flex-col items-center justify-center gap-10 pb-10 sm:gap-14 md:gap-24 md:pb-14"
>
	<div class="container mx-auto flex flex-1 flex-col px-4">
		<h2
			class="mb-12 text-center text-4xl
		font-bold text-gray-800"
		>
			{content.title}
		</h2>

		<div class="grid gap-6 md:grid-cols-4">
			{#each content.products as product}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="group relative transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
					on:mouseenter={() => (selectedProduct = product.id)}
					on:mouseleave={() => (selectedProduct = null)}
				>
					<img
						src={product.image || `/api/`}
						alt={product.name}
						class="h-64 w-full transform object-cover transition duration-300 group-hover:scale-110"
					/>

					{#if selectedProduct === product.id}
						<div
							transition:fade={{ duration: 200 }}
							class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
						>
							<button class="mr-4 rounded-full bg-white p-3 shadow-md transition hover:bg-gray-200">
								<Heart class="h-6 w-6 text-red-500" />
							</button>
							<button
								class="rounded-full bg-blue-600 p-3 text-white shadow-md transition hover:bg-blue-500"
							>
								<ShoppingCart class="h-6 w-6" />
							</button>
						</div>
					{/if}

					<div class="p-4">
						<h3 class="text-lg font-semibold text-gray-800">{product.name}</h3>
						<p class="text-sm text-gray-600">{product.price}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
