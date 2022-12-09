<script lang="ts">
	export let title: string
	export let to = '#'
</script>

<section class="container">
	<header class="header">
		<h4 class="title">{title}</h4>

		<a href={to} class="link"> See all </a>
	</header>

	<slot><!-- optional fallback --></slot>
</section>

<style lang="postcss">
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: var(--dark);
		border-radius: 0.5rem;
		padding: 0.75rem;
		overflow: auto;

		@media (min-width: 768px) {
			padding: 1rem;
		}

		.header {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				margin: 0;
				font-size: 1rem;
				font-weight: 600;
				color: var(--text);
			}

			.link {
				font-size: 0.75rem;
				font-weight: 500;
				color: var(--text-gray);
				text-decoration: none;
			}
		}
	}
</style>
