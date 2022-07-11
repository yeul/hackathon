<script>
	import Icon from '../components/Icon.svelte';

	export let logo = 'logo';
	export let headline = '';
	export let subheadline = '';
	// export let isQualifying = {isQualifying ?? 'false'};
	// export let qualifyingSubheadline = 'Qualifying Test';
</script>

<div class="header__icons">
	<div class="logo__wrapper">
		<div class="pp-logo" alt="PayPal Credit Logo">
			<Icon name={logo} />
		</div>
	</div>

	<!-- TODO: add on:click functionality -->
	<button classe="close" aria-label="Close" type="button" id="close-btn">
		<Icon name={'close'} />
	</button>

	<div class="header__fixed-wrapper header__fixed-wrapper--front">
		<div class="header__background-wrapper header__background-wrapper--sticky">
			<Icon name={'header-background'} />
		</div>
	</div>
</div>
<div class="header__content">
	<h1>{@html headline}</h1>
	<!--TODO: Make subheadline content change based on qualifying amount-->
	<h2>{@html subheadline}</h2>
</div>

<style type="text/scss">
	@import '../styles/components/_header.scss';
</style>
