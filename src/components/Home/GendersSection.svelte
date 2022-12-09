<script lang="ts">
	import SeeAllSection from './SeeAllSection.svelte'
</script>

<SeeAllSection title="Genders">
	<div class="genders">
		<a href="#" class="gender">Dance <br /> Beat</a>
		<a href="#" class="gender">Electro <br /> Pop</a>
		<a href="#" class="gender">Alternative <br /> Indie</a>
		<a href="#" class="gender">Hip <br /> Hop</a>
		<a href="#" class="gender">Classical <br /> Period</a>
		<a href="#" class="gender">Hip Hop <br /> Rap</a>
	</div>
</SeeAllSection>

<style lang="postcss">
	.genders {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;

		.gender {
			padding: 0.75rem 1rem;
			border-radius: 0.5rem;
			font-weight: bold;
			font-size: 0.75rem;
			flex-grow: 1;
			&:nth-child(1) {
				background: #476a8a;
			}
			&:nth-child(2) {
				background: #a59983;
			}
			&:nth-child(3) {
				background: #a24c33;
			}
			&:nth-child(4) {
				background: #0d4044;
			}
			&:nth-child(5) {
				background: #a67894;
			}
			&:nth-child(6) {
				background: #5547a6;
			}
		}
	}
</style>
