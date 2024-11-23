<script>
	import { Star } from 'lucide-react';

	export let content = {
		title: 'Отзывы наших клиентов',
		items: []
	};
</script>

<section class="bg-gray-100 py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold">{content.title}</h2>

		<div class="grid gap-8 md:grid-cols-3">
			{#each content.items as testimonial}
				<div class="rounded-lg bg-white p-6 shadow-md">
					<div class="mb-4 flex items-center">
						<img
							src={testimonial.avatar || `/api/placeholder/80/80`}
							alt={testimonial.name}
							class="mr-4 h-16 w-16 rounded-full"
						/>
						<div>
							<h3 class="font-semibold">{testimonial.name}</h3>
							<div class="flex text-yellow-400">
								{#each { length: testimonial.rating } as _}
									<Star class="h-5 w-5" />
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
