<script lang="ts">
	import {
		AddBoxFill,
		AlbumFill,
		BookletFill,
		CompassFill,
		FolderFill,
		HeartFill,
		HistoryFill,
		MicFill,
		RadioFill,
		VolumeUpFill,
		PulseLine,
		PlayCircleFill,
		SignalTowerLine
	} from 'svelte-remixicon'

	export let open = false
</script>

<section class="sidebar" class:open>
	<a href="/" class="logo">
		<PulseLine />
		<span class="text">Groovvy</span>
	</a>

	<div class="body">
		<ul class="list">
			<header class="title">Menu</header>
			<li class="item" class:active={true}>
				<a href="#" class="link">
					<span class="icon">
						<CompassFill />
					</span>
					<span class="text"> Explore </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<VolumeUpFill />
					</span>
					<span class="text"> Genders </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<AlbumFill />
					</span>
					<span class="text"> Albums </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<MicFill />
					</span>
					<span class="text"> Artits </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<RadioFill />
					</span>
					<span class="text"> Radio </span>
				</a>
			</li>
		</ul>
		<ul class="list">
			<header class="title">Library</header>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<HistoryFill />
					</span>
					<span class="text"> Recents </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<BookletFill />
					</span>
					<span class="text"> Albums </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<HeartFill />
					</span>
					<span class="text"> Favorites </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<FolderFill />
					</span>
					<span class="text"> Local </span>
				</a>
			</li>
		</ul>
		<ul class="list">
			<header class="title">Playlist</header>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<AddBoxFill />
					</span>
					<span class="text"> Create New </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<PlayCircleFill />
					</span>
					<span class="text"> Design Flow </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<PlayCircleFill />
					</span>
					<span class="text"> Best of 2020 </span>
				</a>
			</li>
			<li class="item">
				<a href="#" class="link">
					<span class="icon">
						<PlayCircleFill />
					</span>
					<span class="text"> New trends </span>
				</a>
			</li>
		</ul>
	</div>

	<footer class="footer">
		<div class="other_devices">
			<div class="device">
				<img src="https://i.pinimg.com/236x/5b/95/de/5b95dec68e675fa5f71ad296a53e06b7.jpg" alt="" />
				<span>Google Homepod</span>
			</div>
			<div class="action">
				<SignalTowerLine />
				Playing on Device
			</div>
		</div>
	</footer>
</section>

<style lang="postcss">
	.sidebar {
		position: fixed;
		top: var(--navbar-h);
		border-radius: 0 1rem 1rem 0;
		left: calc(-1 * var(--sidebar-w));
		min-height: calc(100vh - var(--navbar-h));
		height: 100%;
		bottom: 0;
		width: var(--sidebar-w);
		background: linear-gradient(180deg, var(--dark) 0%, var(--bg) 100%);
		padding: 1rem 0.5rem 2rem 1.5rem;
		overflow: auto;
		transition: left 0.3s ease-in-out;

		&.open {
			left: 0;
		}

		@media (min-width: 1200px) {
			border-radius: 0;
			height: 100vh;
			top: 0;
			left: 0;
		}

		.body {
			padding-bottom: 2rem;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
			@media screen and (min-width: 1200px) {
				padding: 2rem 0;
			}

			.list {
				margin: 0;
				padding: 0;
				display: flex;
				flex-direction: column;
				gap: 0.125rem;
				.title {
					color: color-mod(var(--text) a(75%));
					font-size: 14px;
					text-transform: uppercase;
					font-weight: bold;
					letter-spacing: 2px;
					margin: 0 0 0.5rem 0.75rem;
				}

				.item {
					position: relative;
					width: 100%;
					color: white;

					&.active:after {
						content: '';
						position: absolute;
						top: 0;
						left: 0rem;
						width: 4px;
						height: 100%;
						border-radius: 0.5rem 0 0 0.5rem;
						background: var(--primary);
					}

					&.active {
						color: var(--primary);
					}

					.link {
						width: 100%;
						display: flex;
						align-items: center;
						gap: 1rem;
						padding: 0.75rem;
						justify-content: flex-start;
						border-radius: 0.35rem;
						transition: background-color 0.2s ease-in-out;

						&:hover {
							background-color: color-mod(white a(5%));
						}
						.icon {
							display: flex;
							align-items: center;
							justify-content: center;
							color: inherit;
						}

						.text {
							color: inherit;
							font-size: 12px;
							font-weight: bold;
						}
					}
				}
			}
		}

		.footer {
			padding-right: 1rem;
			.other_devices {
				display: grid;
				grid-template-rows: 1fr 0.35fr;
				border-radius: 0.5rem;
				background: color-mod(var(--dark) a(75%));
				cursor: pointer;

				.device {
					display: flex;
					align-items: center;
					gap: 1rem;
					padding: 0.5rem;
					background: var(--dark);
					border-radius: 0.5rem 0.5rem 0 0;
					font-weight: 700;
					img {
						--size: 2.5rem;
						width: var(--size);
						height: var(--size);
						border-radius: 0.5rem;
					}
				}
				.action {
					padding: 0.75rem 0.5rem;
					text-align: center;
					font-size: 12px;
				}
			}
		}
	}

	.logo {
		display: flex;
		align-items: center;
		padding: 1rem;
		gap: 1rem;
		font-weight: bold;
	}
</style>
