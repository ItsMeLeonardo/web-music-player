<script>
	import FeedGrid from '$components/Home/FeedGrid.svelte'
	import Player from '$components/Home/Player.svelte'

	import TrendingHero from '$components/Home/TrendingHero.svelte'
</script>

<TrendingHero animated />

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="content">
	<div class="left">
		<FeedGrid />
	</div>
	<div class="right">
		<Player />
	</div>
</div>

<style lang="postcss">
	.content {
		margin-top: 2rem;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		@media (min-width: 768px) {
			flex-direction: row;
			margin-top: 2.5rem;

			.left {
				width: 65%;
			}

			.right {
				width: 34%;
			}
		}

		@media (min-width: 1200px) {
			padding: 1rem;
			gap: 1rem;

			.left {
				width: 70%;
			}

			.right {
				width: 30%;
			}
		}
	}
</style>
