<script lang="ts">
	import Navbar from '$client/shared/components/Navbar.svelte'
	import Sidebar from '$client/shared/components/Sidebar.svelte'
	import '../app.postcss'

	let openSidebar = false

	const toggleSidebar = () => {
		openSidebar = !openSidebar
	}
</script>

<Navbar on:toggleSidebar={toggleSidebar} />
<Sidebar open={openSidebar} />
<div class="content">
	<slot><!-- optional fallback --></slot>
</div>

<style lang="postcss">
	.content {
		@media (min-width: 1200px) {
			padding: 1rem;
			margin-left: var(--sidebar-w);
		}
	}
</style>
