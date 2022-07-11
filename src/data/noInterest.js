const data = {
	content: {
		headline: 'Pay over time with PayPal Credit',
		subheadline: 'Shop online with a reusable credit line.',
		instructions: [
			'Apply now and get a decision in seconds.',
			'Check out with PayPal and choose PayPal Credit.',
			'No Interest if paid in full in 6 months on purchases of $99+'
		],
		terms: [
			'Interest will be charged to your account from the purchase date if the balance is not paid in full within 6 months.',
			'A minimum monthly payment is required and may or may not pay off the promotional purchase by the end of the 6 month period.',
			'No interest will be charged on the purchase if you pay it off in full within 6 months. If you do not, interest will be charged on the purchase from the purchase date at the Purchase APR applicable to your account.',
			'For New Accounts: Variable Purchase APR is {aprEntry.apr}%. The APR is accurate as of {aprEntry.formattedDate} and will vary with the market based on the Prime Rate (as defined in your credit card agreement). Minimum interest charge is $2.00.',
			'Individual items that are less than $99 qualify for special financing when combined for a total of $99 or more in a single transaction.',
			'Multiple separate transactions of less than $99 per transaction cannot be combined to meet the minimum purchase amount.'
		],
		buttonText: 'Apply Now',
		disclaimer: 'Subject to credit approval',

		footer: [
			[
				'View the PayPal Credit',
				[
					'Terms and Conditions.',
					'https://www.paypalobjects.com/marketing/web/us/en/ppcterms/ppcterms.html'
				]
			],
			[
				'PayPal Credit is subject to credit approval as determined by the lender, Synchrony Bank, and is available to U.S. customers who are of legal age in their state of residence. You must pay with PayPal Credit to get the offers. Offers not valid on previous purchases, returns or exchanges. Minimum purchase required is before shipping and tax. For New Accounts: Variable Purchase APR is {aprEntry.apr}%. The APR is accurate as of {aprEntry.formattedDate} and will vary with the market based on the Prime Rate (as defined in your credit card agreement). Minimum interest charge is $2.00.'
			],
			['Copyright {fullYear} Bill Me Later, Inc. All rights reserved.']
		],
		linkToProductList: 'See other ways to pay later'
	}
};

export default data;
