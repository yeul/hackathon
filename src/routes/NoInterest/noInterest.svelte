<script>
	import Header from '../../components/Header.svelte';
	import Instructions from '../../components/Instructions.svelte';
	import ProductListLink from '../../components/ProductListLink.svelte';
	import BodyContent from '../../components/BodyContent.svelte';
	import Button from '../../components/Button.svelte';
	import noInterestData from '../../data/noInterest.js';

	export let content = noInterestData?.content;

	const handleApplyNowClick = () => {
		console.log('Apply for PayPal Credit.');
	};
</script>

<Header logo={'logo'} headline={content?.headline} subheadline={content?.subheadline} />
<BodyContent>
	<div class="content__container">
		<main class="main">
			<div class="content__body">
				<div class="content__row dynamic">
					<div class="content__col">
						<Instructions instructions={content?.instructions} />
					</div>
					<div class="content__col">
						<div class="branded-image">
							<!-- TODO: include Icon component when desktop images are final -->
						</div>
					</div>
				</div>
			</div>
			<div class="content__footer">
				<ul class="content__row terms">
					{#each content?.terms as term, index}
						<li class="terms-item">
							<span class="terms-bullet" />
							<span class="terms-content">{term}</span>
						</li>
					{/each}
					<!-- <ul>
                            {footer.map(lineContent => {
                                return (
                                    <li className="content__footer-item">
                                        <InlineLinks text={lineContent} />
                                    </li>
                                );
                            })}
                            {renderProductListLinkItem()} -->
				</ul>
			</div>
			<div class="content__body">
				<div class="content__row dynamic">
					<div class="button__fixed-wrapper">
						<div class="button__container">
							<Button className="content__row" onClick={handleApplyNowClick}>
								{content?.buttonText}
							</Button>
							<div class="content__row content__disclaimer">{content?.disclaimer}</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</BodyContent>

<style type="text/scss">
	@import '../../styles/components/_content.scss';
	@import './noInterest.scss';
</style>
