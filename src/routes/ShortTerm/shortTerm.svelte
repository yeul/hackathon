<script lang="js">
	import Instructions from '../../components/Instructions.svelte';
	import ProductListLink from '../../components/ProductListLink.svelte';

	// TODO: temp static data for testing
	const instructions = [
		'Choose PayPal at checkout to pay later with <strong>Pay in 4</strong>.',
		'Complete your purchase with a 25% down payment.',
		'Use autopay for the rest of your payments. It’s easy!'
	];

	const productListContent = 'See other ways to pay over time';

	// TODO: build out functionality
	const renderProductListLink = () => {
		console.log('This takes you back to the product list modal');
	};
</script>

<div class="content__container">
	<main class="main">
		<div class="content__body">
			<div class="dynamic__container">
				<div class="content__row dynamic">
					<div class="content__col">
						<div class="content__row donuts">
							<div class="donuts__container">
								<!-- <span aria-hidden={qualifying !== 'true'} className="sr-only">
                                                {donutScreenReaderString}
                                            </span> -->
								<!-- {(hasInstallments ? estimatedInstallments?.items : donutTimestamps).map(
                                                (installment, index) => (
                                                    <Donut
                                                        key={index}
                                                        qualifying={qualifying}
                                                        // regex replaces EUR with the euro symbol €
                                                        periodicPayment={
                                                            installment?.total_payment
                                                                ? installment.total_payment.replace(/(\s?EUR)/g, ' €')
                                                                : localeFormattedPayment
                                                        }
                                                        currentNum={index + 1}
                                                        timeStamp={installment?.payment_date ?? donutTimestamps[index]}
                                                        numOfPayments={
                                                            (hasInstallments
                                                                ? estimatedInstallments?.items
                                                                : donutTimestamps
                                                            ).length
                                                        }
                                                    />
                                                )
                                            )} -->
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
					<!-- <InlineLinks text={currencyFormat(disclosure)} /> -->
				</p>
			</div>
			<div class="content__row productLink">
				<div class="productLink__container">
					<ProductListLink openProductList={renderProductListLink}
						>{productListContent}</ProductListLink
					>
				</div>
			</div>
		</div>
	</main>
</div>
