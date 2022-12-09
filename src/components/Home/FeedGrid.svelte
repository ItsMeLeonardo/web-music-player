<script lang="ts">
	import TopArtists from '$components/Home/TopArtists.svelte'
	import GendersSection from './GendersSection.svelte'
	import TopChartsSection from './TopChartsSection.svelte'
</script>

<div class="grid">
	<div class="top_artist">
		<TopArtists />
	</div>

	<div class="genders">
		<GendersSection />
	</div>
	<div class="top_charts">
		<TopChartsSection />
	</div>
</div>

<style lang="postcss">
	.grid {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
		height: 100%;

		@media (min-width: 768px) {
			display: grid;
			grid-template-columns: 2fr 3fr;
			grid-template-rows: 0.45fr 1fr;

			.top_artist {
				grid-column: 1 / 3;
			}
		}

		@media (min-width: 1200px) {
			gap: 1rem;
		}
	}
</style>
