<script>
	import { goto } from '$app/navigation';
	import { openModal } from '../store';
	import BaseComponent from './BaseComponent.svelte';
	export let content = {};

	function handlClick(url) {
		goto(url);
	}
</script>

<BaseComponent {content}>
	<header class="relative z-20 flex flex-col">
		<div
			class="mx-auto flex w-full max-w-[1400px]
		items-center justify-between p-4 py-6"
		>
			<a href="/">
				<h1 class="font-semibold">
					Manaki <span class="text-indigo-400">Start</span> uP
				</h1>
			</a>
			<button
				onclick={() => openModal.set(true)}
				class="grid place-items-center md:hidden"
				aria-label="open-menu"
			>
				<i class="fa-solid fa-bars"></i>
			</button>
			<nav class="hidden items-center gap-4 md:flex lg:gap-6">
				{#each content.navigation as navigation}
					<a
						href={navigation.url}
						class="cursor-pointer duration-200
			hover:text-indigo-400">{navigation.text}</a
					>
				{/each}
				{#if content.actions}
					{#each content.actions as action}
						<button onclick={(url) => handlClick(action.url)} class="specialBtn">
							<p>{action.text}</p>
						</button>
					{/each}
				{/if}
			</nav>
		</div>
	</header>
</BaseComponent>
