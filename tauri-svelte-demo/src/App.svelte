<script lang="ts">
	import { listen } from "@tauri-apps/api/event";
	import { onMount } from 'svelte';

	let coffees = 0;

	onMount(async () => {
		await listen("coffee-drank", (_) => {coffees += 1});
	});

</script>

<main>
	<h2>Coffees: {coffees}</h2>
</main>
