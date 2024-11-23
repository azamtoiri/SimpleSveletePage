<script>
	import { Shield, Truck, CreditCard } from 'lucide-react';

	export let content = {
		title: '',
		items: []
	};

	const iconMap = {
		truck: Truck,
		shield: Shield,
		'credit-card': CreditCard
	};
</script>

<section class="bg-gray-50 py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold">{content.title}</h2>

		<div class="grid gap-8 md:grid-cols-3">
			{#each content.items as item}
				<div class="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm">
					<!-- <svelte:component 
              this={iconMap[item.icon]}
              class="w-12 h-12 text-blue-600 mb-4"
            /> -->
					<h3 class="mb-2 text-xl font-semibold">{item.title}</h3>
					<p class="text-center text-gray-600">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
