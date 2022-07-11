<script lang="js">
	import Header from '../../components/Header.svelte';
	import BodyContent from '../../components/BodyContent.svelte';
	import Instructions from '../../components/Instructions.svelte';
	import ProductListLink from '../../components/ProductListLink.svelte';
	import Donut from '../../components/Donut.svelte';
	import InlineLinks from '../../components/InlineLinks.svelte';
	import { currencyFormat } from '../../lib/currencyFormat';

	export let productMeta = { qualifying: 'false', periodicPayment: '23.99' };
	export let content = {
		estimatedInstallments: {
			items: [
				{ total_payment: '$25.01', payment_date: 'Today' },
				{ total_payment: '$25.01', payment_date: '2 weeks' },
				{ total_payment: '$25.01', payment_date: '4 weeks' },
				{ total_payment: '$25.01', payment_date: '6 weeks' }
			]
		},

		headline: 'Pay in 4 interest-free payments',
		subheadline:
			'No impact on credit score and no late fees. Available for purchases of {formattedMinAmount} to {formattedMaxAmount}.',
		qualifyingSubheadline:
			'Split your purchase of {formattedTotalCost} into {total_payments} with no impact on credit score and no late fees.',
		donutTimestamps: ['Today', '2 weeks', '4 weeks', '6 weeks'],
		instructions: [
			'Choose PayPal at checkout to pay later with <strong>Pay in 4</strong>. ',
			'Complete your purchase with a 25% down payment.',
			'Use autopay for the rest of your payments. It’s easy!'
		],
		disclosure:
			'Pay in 4 is available to consumers upon approval for purchases of $30-$1,500. Pay in 4 is not currently available to residents of Missouri, Nevada, New Mexico, North Dakota, Wisconsin, or any U.S. Territories. Offer availability depends on the merchant and also may not be available for certain recurring, subscription services.​ When applying, a soft credit check may be needed, but will not affect your credit score.​ You must be of legal age in your U.S. state of residence to use Pay in 4.​ Loans to California residents are made or arranged pursuant to a California Financing Law License.​ PayPal, Inc. is a Georgia Installment Lender Licensee, NMLS #910457.​ Rhode Island Small Loan Lender Licensee.',
		linkToProductList: 'See other ways to pay later'
	};

	const {
		instructions,
		linkToProductList,
		estimatedInstallments,
		disclosure,
		donutTimestamps,
		learnMoreLink
	} = content;

	const { qualifying, periodicPayment } = productMeta;

	let isQualifying = qualifying === 'true';
	let hasInstallments = Object.keys(estimatedInstallments?.items ?? {}).length;

	const productListContent = 'See other ways to pay over time';

	// TODO: build out functionality
	const renderProductListLink = () => {
		console.log('This takes you back to the product list modal');
	};

	const donutScreenReaderString = hasInstallments
		? estimatedInstallments.items
				.map((timestamp) => `${timestamp.total_payment} for ${timestamp.payment_date}`)
				.join(', ')
		: donutTimestamps.map((timestamp) => `${currencyFormat(periodicPayment)} for ${timestamp}`);

	const donutItems = hasInstallments ? estimatedInstallments?.items : donutTimestamps;
	const localeFormattedPayment = periodicPayment.replace(/(\s?EUR)/g, ' €');
</script>

<Header logo={'logo'} headline={content?.headline} subheadline={content?.subheadline} />
<BodyContent>
	<div class="content__container">
		<main class="main">
			<div class="content__body">
				<div class="dynamic__container">
					<div class="content__row dynamic">
						<div class="content__col">
							<div class="content__row donuts">
								<div class="donuts__container">
									<span aria-hidden={qualifying !== 'true'} class="sr-only">
										{donutScreenReaderString}
									</span>
									<!-- regex replaces EUR with the euro symbol € -->
									{#each donutItems as installment, index}
										<Donut
											{qualifying}
											periodicPayment={installment?.total_payment
												? installment.total_payment.replace(/(\s?EUR)/g, ' €')
												: localeFormattedPayment}
											currentNumber={index + 1}
											timeStamp={installment?.payment_date ?? donutTimestamps[index]}
											numberOfPayments={donutItems.length}
										/>
									{/each}
								</div>
							</div>
							<Instructions {instructions} />
						</div>
						<div class="content__col">
							<div class="branded-image">
								<!-- TODO: include Icon component when desktop images are final -->
							</div>
						</div>
					</div>
				</div>
				<div class="content__row disclosure">
					<p>
						<InlineLinks text={currencyFormat(disclosure)} />
					</p>
				</div>
				<div class="content__row productLink">
					<div class="productLink__container">
						<ProductListLink openProductList={renderProductListLink}>
							{productListContent}
						</ProductListLink>
					</div>
				</div>
			</div>
		</main>
	</div>
</BodyContent>

<style type="text/scss">
	@import '../../styles/components/_content.scss';
	@import './shortTerm.scss';
</style>
