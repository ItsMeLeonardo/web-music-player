<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { Menu2Fill, SearchLine, NotificationFill, SettingsFill } from 'svelte-remixicon'

	const dispatch = createEventDispatcher<{ toggleSidebar: boolean }>()

	const toggleSidebar = () => {
		dispatch('toggleSidebar')
	}
</script>

<nav class="navbar">
	<button class="sidebar_btn icon_btn" on:click={toggleSidebar}>
		<Menu2Fill />
	</button>
	<div class="navbar_left">
		<a class="nav_item" href="#">Music</a>
		<a class="nav_item" href="#">Podcast</a>
		<a class="nav_item" href="#">Live</a>
	</div>

	<div class="navbar_center">
		<label class="input_container">
			<input class="input" type="text" placeholder="Type here to search" />
			<span class="icon">
				<SearchLine />
			</span>
		</label>
	</div>

	<div class="navbar_right">
		<button class="icon_btn notify">
			<NotificationFill />
		</button>
		<button class="icon_btn settings">
			<SettingsFill />
		</button>

		<button class="profile">
			<picture class="avatar">
				<img
					src="https://i.pinimg.com/236x/f9/ac/8e/f9ac8ed7926682e007bbd7055638bb00.jpg"
					alt="profile"
				/>
			</picture>
			<span class="name">John Doe</span>
		</button>
	</div>
</nav>

<style lang="postcss">
	.navbar {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;

		@media (min-width: 1200px) {
			width: calc(100% - var(--sidebar-w));
			margin-left: auto;
			padding: 1rem;
		}

		.icon_btn {
			position: relative;
			cursor: pointer;
			padding: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			color: var(--text);

			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				transform: scale(0);
				border-radius: 50%;
				background-color: var(--text-pale);
				transition: transform 0.2s ease-in-out;
			}

			&:hover::after,
			&:focus::after {
				transform: scale(1);
			}
		}

		.sidebar_btn {
			@media (min-width: 1200px) {
				display: none;
			}
		}

		.navbar_left {
			display: none;

			@media (min-width: 768px) {
				display: flex;
				gap: 2rem;
			}

			.nav_item {
				/* padding: 0.5rem 1rem; */
				color: var(--text-gray);
				font-weight: 500;
				font-size: 14px;
				text-transform: uppercase;
				transition: color 0.2s ease-in-out;
				border-radius: 0.25rem;

				&:hover {
					color: var(--primary);
				}
			}
		}

		.navbar_center {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;

			.input_container {
				position: relative;
				width: 100%;
				max-width: 400px;

				.input {
					width: 100%;
					padding: 0.75rem;
					padding-left: 2.25rem;
					border-radius: 0.45rem;
					border: 1px solid color-mod(var(--text) a(25%));
					background-color: var(--dark);
					color: var(--text);
					font-size: 12px;
					transition: border-color 0.2s ease-in-out;

					&:focus {
						border-color: transparent;
					}
				}

				.icon {
					position: absolute;
					top: 50%;
					left: 0.75rem;
					transform: translateY(-50%);
					color: var(--text);
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}

		.navbar_right {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;

			@media (min-width: 768px) {
				gap: 0.75rem;
			}

			.settings {
				display: none;

				@media (min-width: 425px) {
					display: flex;
				}
			}

			.profile {
				margin: 0;
				padding: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 0.25rem;
				background: color-mod(var(--text) a(25%));

				.avatar {
					--size: 2.5rem;
					width: var(--size);
					height: var(--size);
					border-radius: inherit;
					background: color-mod(var(--text) a(25%));
					padding: 0.25rem;
					cursor: pointer;

					@media (min-width: 768px) {
						padding: 0.35rem;
					}

					img {
						width: 100%;
						height: 100%;
						border-radius: inherit;
						object-fit: cover;
					}
				}

				.name {
					color: var(--text);
					font-size: 12px;
					font-weight: 500;
					display: none;
					padding: 0.5rem;

					@media (min-width: 768px) {
						display: initial;
					}
				}
			}
		}
	}
</style>
