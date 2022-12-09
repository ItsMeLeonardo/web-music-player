<script lang="ts">
	type Color = 'primary' | 'secondary' | 'tertiary'

	export let color: Color = 'primary'
	export let rounded = false
	export let bordered = false
	export let icon = false
	export let label: string | null = null
</script>

<button class={color} class:rounded class:bordered class:icon>
	<slot>{label}</slot>
</button>

<!-- <button class=" icon primary rounded bordered">
	<HeartFill />
</button> -->
<style lang="postcss">
	button {
		padding: 1rem 1.25rem;
		font-size: 14px;

		&.primary {
			background-color: var(--primary);
			color: var(--text);

			&.bordered {
				border: 2px solid var(--text);
				background-color: transparent;
				color: var(--primary);
			}
		}

		&.icon {
			--size: 48px;
			padding: 0;
			width: var(--size);
			height: var(--size);
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.5rem;
		}

		&.rounded {
			border-radius: 9999px;
		}
	}
</style>
