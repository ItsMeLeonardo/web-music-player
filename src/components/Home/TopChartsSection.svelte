<script lang="ts">
	import { AddBoxFill, PlayFill } from 'svelte-remixicon'
	import SeeAllSection from './SeeAllSection.svelte'

	const items = new Array(4).fill(0)
</script>

<SeeAllSection title="Top charts">
	<ol class="list">
		{#each items as item}
			<li>
				<a href="#" class="item">
					<span class="order_number">01</span>
					<picture class="poster">
						<img
							src="https://i.pinimg.com/236x/5b/95/de/5b95dec68e675fa5f71ad296a53e06b7.jpg"
							alt=""
						/>
					</picture>
					<div class="data">
						<span class="title">Havana</span>
						<span class="artist_name">Camilla Cabello</span>
					</div>

					<span class="duration">3:45</span>
					<button class="icon play_btn" on:click|stopPropagation>
						<PlayFill />
					</button>

					<button class="icon add_btn" on:click|stopPropagation>
						<AddBoxFill />
					</button>
				</a>
			</li>
		{/each}
	</ol>
</SeeAllSection>

<style lang="postcss">
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.item {
			display: flex;
			gap: 0.75rem;
			align-items: center;

			&:hover .poster img {
				transform: scale(1.05) rotate(1deg);
			}

			.order_number {
				color: var(--text-gray);
				font-size: 0.75rem;
				font-weight: bold;
			}

			.poster {
				--size: 2.5rem;
				display: block;

				width: var(--size);
				height: var(--size);
				border-radius: 0.25rem;
				overflow: hidden;
				img {
					transition: transform 0.3s ease;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.data {
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				.title {
					font-size: 0.75rem;
					font-weight: 500;
				}

				.artist_name {
					white-space: nowrap;
					font-size: 0.625rem;
					font-weight: 400;
					color: var(--text-gray);
				}
			}

			.duration {
				font-size: 0.75rem;
				font-weight: 500;
			}

			.play_btn {
				font-size: 0.75rem;
				padding: 0.5rem;
				border-radius: 0.25rem;
				color: var(--primary);
				border: 1px solid var(--text-gray);
			}

			.add_btn {
				border-radius: 0.125rem;
				font-size: 1rem;
				padding: 0.25rem;
				color: var(--text-gray);
			}
		}
	}
</style>
