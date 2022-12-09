<script lang="ts">
	import {
		ArrowUpSLine,
		PlayFill,
		PlayListFill,
		Repeat2Fill,
		ShuffleFill,
		SkipBackFill,
		SkipForwardFill
	} from 'svelte-remixicon'
</script>

<section class="player">
	<header class="header">
		<span class="title">Player</span>
		<span class="icon">
			<PlayListFill />
		</span>
	</header>

	<div class="body">
		<picture class="poster">
			<img src="https://i.pinimg.com/236x/5b/95/de/5b95dec68e675fa5f71ad296a53e06b7.jpg" alt="" />
		</picture>
		<div class="data">
			<h5 class="song_name">Butterfly Effect</h5>
			<span class="artist"> Travis Scott </span>
			<span class="playlist_name"> Best of 2020 </span>
		</div>

		<div class="playback_bar">
			<span class="time">2:45</span>
			<div class="progress_bar">
				<div class="progress" />
				<div class="progress_thumb" />
			</div>
			<span class="time">2:45</span>
		</div>
	</div>

	<footer class="player_controls">
		<div class="controls">
			<button class="icon">
				<Repeat2Fill />
			</button>
			<button class="icon">
				<SkipBackFill />
			</button>
			<button class="play">
				<PlayFill />
			</button>
			<button class="icon">
				<SkipForwardFill />
			</button>
			<button class="icon">
				<ShuffleFill />
			</button>
		</div>
		<button class="open_lyrics">
			<span class="icon">
				<ArrowUpSLine />
			</span>
			<span> Lyrics </span>
		</button>
	</footer>
</section>

<style lang="postcss">
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.player {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: var(--dark);
		border-radius: 0.5rem;

		.header {
			padding: 0.75rem;

			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			@media (min-width: 768px) {
				padding: 1rem;
			}

			.title {
				margin: 0;
				font-size: 1rem;
				font-weight: 600;
				color: var(--text);
			}
		}

		.body {
			padding: 1rem 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1.25rem;

			.poster {
				width: 70%;
				aspect-ratio: 12/9;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 0.5rem;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.data {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 0.5rem;

				.song_name {
					margin: 0;
					font-size: 1.5rem;
					font-weight: 500;
				}

				.artist {
					font-size: 1rem;
					font-weight: 400;
				}

				.playlist_name {
					font-size: 0.75rem;
					font-weight: 400;
					color: var(--text-gray);
				}
			}

			.playback_bar {
				width: 100%;
				display: flex;
				align-items: center;
				gap: 0.75rem;

				.time {
					font-size: 0.75rem;
					font-weight: 400;
				}

				.progress_bar {
					width: 100%;
					height: 0.25rem;
					background: var(--text-gray);
					border-radius: 0.25rem;
					position: relative;

					.progress {
						width: 50%;
						height: 100%;
						background: var(--text);
						border-radius: 0.25rem;
					}

					.progress_thumb {
						--size: 0.75rem;
						width: var(--size);
						height: var(--size);
						border: 3px solid var(--text);
						background: var(--dark);
						border-radius: 50%;
						position: absolute;
						top: -0.25rem;
						left: 50%;
						transform: translateX(-50%);
					}
				}
			}
		}

		.player_controls {
			width: 100%;
			padding: 2rem 2rem 0.5rem 2rem;
			border-radius: 0.5rem;
			background: var(--primary);

			.controls {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1.25rem;

				.icon {
					color: var(--text);
				}

				.play {
					--size: 2.5rem;
					width: var(--size);
					height: var(--size);
					border-radius: 33%;
					background: var(--text);
					color: var(--primary);
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}

			.open_lyrics {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 100%;
				padding: 0.5rem;
				margin-top: 0.5rem;
				font-size: 0.75rem;
				text-transform: uppercase;
				color: var(--text);
				.icon {
					display: block;
				}
			}
		}
	}
</style>
