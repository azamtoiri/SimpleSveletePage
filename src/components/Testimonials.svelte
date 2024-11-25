<script>
	import { Star } from 'lucide-svelte';

	export let content = {
		title: 'Customer Reviews',
		items: []
	};

	function getBackgroundColor(name) {
		if (!name) return '#cccccc'; // Цвет по умолчанию
		const hash = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
		const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#FFA533'];
		return colors[hash % colors.length];
	}

	function getInitial(name) {
		return name?.charAt(0).toUpperCase() || '';
	}
</script>

<section class="bg-gray-100 py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold">{content.title}</h2>

		<div class="grid gap-8 md:grid-cols-3">
			{#each content.items as testimonial}
				<div class="rounded-lg bg-white p-6 shadow-md">
					<div class="mb-4 flex items-center">
						{#if testimonial.avatar}
							<img
								src={testimonial.avatar}
								alt={testimonial.name}
								class="mr-4 h-16 w-16 rounded-full"
							/>
						{:else}
							<div
								class="mr-4 flex h-16 w-16 items-center justify-center rounded-full font-bold text-white"
								style="background-color: {getBackgroundColor(testimonial.name)}"
							>
								{getInitial(testimonial.name)}
							</div>
						{/if}
						<div>
							<h3 class="font-semibold">{testimonial.name}</h3>
							<div class="flex text-yellow-400">
								{#each Array(testimonial.rating).fill() as _}
									<Star class="h-5 w-5 fill-yellow-400" />
								{/each}
							</div>
						</div>
					</div>
					<p class="italic text-gray-600">"{testimonial.text}"</p>
				</div>
			{/each}
		</div>
	</div>
</section>
