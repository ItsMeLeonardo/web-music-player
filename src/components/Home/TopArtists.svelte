<script lang="ts">
	import SeeAllSection from '$components/Home/SeeAllSection.svelte'

	const list = new Array(5).fill(1)
</script>

<SeeAllSection title="Top Artists">
	<ul class="artist_list">
		{#each list as item, i}
			<li class="item">
				<a href="#" class="link">
					<figure class="artist">
						<img
							src="https://i.pinimg.com/236x/5b/95/de/5b95dec68e675fa5f71ad296a53e06b7.jpg"
							alt=""
							class="photo"
						/>
						<span class="plays">44M plays</span>
						<figcaption class="name">Wonyoung</figcaption>
					</figure>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<figure class="artist">
						<img
							src="https://i.pinimg.com/236x/f9/ac/8e/f9ac8ed7926682e007bbd7055638bb00.jpg"
							alt=""
							class="photo"
						/>
						<span class="plays">44M plays</span>
						<figcaption class="name">Wonyoung</figcaption>
					</figure>
				</a>
			</li>
		{/each}
	</ul>
</SeeAllSection>

<style lang="postcss">
	.artist_list {
		display: flex;
		flex-wrap: nowrap;
		overflow: auto;
		gap: 0.75rem;
		padding: 0;
		padding: 0.325rem;
		margin: 0.5rem 0;

		.item {
			--w: 100px;
			width: var(--w);

			.link {
				display: flex;
				width: 100%;
				height: 100%;
				padding: 0.5rem;
				transition: background 0.2s ease-in-out;
				border-radius: 0.5rem;

				&:hover {
					background: rgba(255, 255, 255, 0.1);
				}

				.artist {
					margin: 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 0.25rem;
					width: 100%;
					height: 100%;

					.photo {
						width: 100%;
						aspect-ratio: 10/9;
						border-radius: 0.5rem;
						object-fit: cover;
					}

					.plays {
						font-size: 10px;
						color: var(--text-gray);
						order: 3;
					}

					.name {
						font-size: 12px;
						color: var(--text);
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
