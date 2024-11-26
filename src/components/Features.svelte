<script>
	import { Shield, Truck, CreditCard } from 'lucide-svelte';

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
					<h3 class="mb-2 text-center text-xl font-semibold">{item.title}</h3>
					<p class="text-center text-gray-600">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
