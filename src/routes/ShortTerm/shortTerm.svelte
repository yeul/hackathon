<script lang="js">
	import Instructions from '../../components/Instructions.svelte';

  // TODO: temp static data for testing
	const instructions = [
		'Choose PayPal at checkout to pay later with <strong>Pay in 4</strong>.',
		'Complete your purchase with a 25% down payment.',
		'Use autopay for the rest of your payments. It’s easy!'
	];
</script>

<div class="content__container">
	<main class="main">
		<div class="content__body">
			<div class="content__row dynamic">
				<div class="content__col">
					<Instructions {instructions} />
				</div>
			</div>
		</div>
	</main>
</div>
