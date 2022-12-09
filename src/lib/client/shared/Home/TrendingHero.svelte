<script lang="ts">
	import Button from '$client/shared/components/Button.svelte'
	import { HeartFill } from 'svelte-remixicon'

	export let animated = false
</script>

<section class="trending" class:animated>
	<header class="header">Trending New Hits</header>
	<div class="data">
		<h1 class="title">The havana</h1>
		<div class="details">
			<span class="artist">Camilla Cabello</span>
			<span class="plays">63Millions Plays</span>
		</div>
		<div class="actions">
			<Button label="Listen now" rounded />
			<Button rounded bordered icon>
				<HeartFill />
			</Button>
		</div>
	</div>
</section>

<style lang="postcss">
	.trending {
		padding: 0.5rem;
		position: relative;

		/* scale and rotate */
		@keyframes blob_1 {
			0% {
				border-radius: 50%;
				transform: scale(0.9) rotate(0deg);
				border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
			}
			50% {
				border-radius: 0;
				transform: scale(1) rotate(10deg);
				border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
			}
			100% {
				border-radius: 50%;
				transform: scale(0.9) rotate(0deg);
				border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
			}
		}

		&.animated::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;

			width: 100%;
			height: 100%;
			z-index: -2;

			animation: blob_1 10s infinite linear alternate-reverse;
			background: linear-gradient(
				270deg,
				var(--nebula-500) 0%,
				var(--primary) 50%,
				rgba(0, 0, 0, 0) 75%
			);
			filter: blur(4rem);
			opacity: 0.75;
		}

		@keyframes blob_2 {
			0% {
				border-radius: 0;
				transform: scale(1) rotate(-10deg);
				border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
			}
			50% {
				border-radius: 50%;
				transform: scale(0.9) rotate(0deg);
				border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
			}
			100% {
				border-radius: 0;
				transform: scale(1) rotate(-10deg);
				border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
			}
		}

		&.animated::before {
			content: '';
			position: absolute;
			top: 0;
			right: 4rem;

			width: 70%;
			height: 70%;
			animation: blob_2 10s infinite linear alternate-reverse;
			z-index: -1;
			background: linear-gradient(
				270deg,
				var(--orange-600) 0%,
				var(--red-700) 50%,
				rgba(0, 0, 0, 0) 100%
			);

			filter: blur(4rem);
			opacity: 0.5;
		}

		.header {
			padding-top: 2rem;
			font-size: 14px;
			font-weight: 600;
		}

		.data {
			padding-left: 1rem;

			.title {
				margin: 2rem 0 0.25rem 0;
				font-size: 4rem;
				font-weight: black;
			}
			.details {
				.artist {
					font-size: 1rem;
					font-weight: 600;
					margin-right: 1rem;
				}

				.plays {
					font-size: 0.85rem;
					color: var(--text-gray);
				}
			}
		}

		.actions {
			display: flex;
			gap: 1rem;
			margin-top: 2rem;
		}
	}
</style>
