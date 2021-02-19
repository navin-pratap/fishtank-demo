export const configs = {
	baseURL: 'https://staging.pilot.petsmart.com/s/PetSmart/dw/shop/v18_8/products/',
	secret: 'client_id=eb284deb-2825-4522-be76-9509cee181a4',
	batchSize: 20, // Cannot exceed 24 products per call
	isSmallBannerVisible: false,
	dashboardMainHeroBanner: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_HERO_BANNER_1x',
	dashboardMainHeroBannerMobile: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_HERO_BANNER_1x',
	readAllArticleLink:
		'https://www.petsmart.com/learning-center/fish-care/?isrefinedbyspecies=true#page_name=flyout&link_section=&link_name=fish_care&template_type=services',
	videoLink: 'https://youtu.be/0vYb9TcUo0Q',
	tipsBackgroundImage: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_TipsBackground_1x',
	headerTitle: 'Try Same-Day Delivery for FREE powered by DoorDash®! learn more >',
	readMore: 'Read more',
	featuredArticles: 'Featured articles',
	viewAll: 'View all',
	buildYourTank: 'BUILD YOUR TANK',
	getStarted: 'get started',
	banner: 'Banner',
	bannerTitle: 'How to setup an aquarium',
	edit: 'Edit',
	noProductText: 'No Product Selected',
	bannerDescription:
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
	subTotal: 'Subtotal',
	fishTitles: {
		title: 'Select your favorite fish',
		subTitle: 'Please select a fish you plan on building a tank for.',
	},
	allTankTitle: {
		title: `Select a tank`,
		subTitle: 'Choose from a small, medium, or large tank.',
	},
	accessoriesTitles: {
		title: 'Recommended accessories',
		subTitle: 'Add accessory item(s) to your tank.',
	},
	gravelDecorTitles: {
		title: 'Recommended gravel & decor',
		subTitle: 'Add gravel & decor item(s) to your tank.',
	},
	careTitles: {
		title: 'Recommended care for your tank',
		subTitle: 'Add care item(s) to your tank.',
	},
	dosDontsTitles: {
		title: 'Do’s and don’ts with your new fish',
		subTitle: '',
	},
	by: 'By',
	item: 'Item',
	goBack: 'Go Back',
	continue: 'Continue',
	small: 'Small',
	medium: 'Medium',
	large: 'Large',
};
export const finalPageContent = {
	title: 'Your tank is ready to go',
	subTitle: 'Add your items to cart and head to your store to pick out your new fish friend.',
	subTitle2: 'Hero Banner',
};
export const getRecommendedTankTitle = (name) => {
	return {
		title: `For ${name}, we recommend these tanks`,
		subTitle: 'Please select a tank.',
	};
};
export const defaultProductSelection = [
	{
		id: 1,
		type: 'Tank',
		productImage: '',
		ProductName: '',
		ProductPrice: 0,
		fishSelection: {},
	},
	{
		id: 2,
		type: 'Accessories',
		productImage: '',
		ProductName: '',
		ProductPrice: 0,
	},
	{
		id: 3,
		type: 'Gravel & Decor',
		productImage: '',
		ProductName: '',
		ProductPrice: 0,
	},
	{
		id: 4,
		type: 'Care',
		productImage: '',
		ProductName: '',
		ProductPrice: 0,
	},
];
export const getTankImage = (skuId, type) => {
	return `https://s7d2.scene7.com/is/image/PetSmart/${skuId}?$sclp-prd-main_large$`;
};
export const articlesData = [
	{
		id: 1,
		title: 'How Do I Set Up My Aquarium for Multiple Fish?',
		url: 'https://www.petsmart.com/learning-center/fish-care/how-do-i-set-up-my-aquarium-for-multiple-fish/A0086.html',
		imagePath:
			'https://s7d2.scene7.com/is/image/PetSmart/WEB-20-564714-March_20_Aquatic_EXP_HowtoSetUp_Article?fmt=png-alpha',
	},
	{
		id: 2,
		title: 'Healthy Aquarium Water',
		url: 'https://www.petsmart.com/learning-center/fish-care/healthy-aquarium-water/A0083.html',
		imagePath:
			'https://s7d2.scene7.com/is/image/PetSmart/WEB-20-564714-March_20_Aquatic_EXP_HealthyWater_Article?fmt=png-alpha',
	},
	{
		id: 3,
		title: 'The Right Food to Feed your Fish',
		url: 'https://www.petsmart.com/learning-center/fish-care/the-right-food-to-feed-your-fish/A0009.html',
		imagePath:
			'https://s7d2.scene7.com/is/image/PetSmart/WEB-20-564714-March_20_Aquatic_EXP_TheRightFood_Article?fmt=png-alpha',
	},
];
/** Start SKUIds for Fish and Tank  */
export const SnailFishSKUList = [5271255, 5253506, 5264615, 5262075, 5282474, 5264603, 5253508, 5282473, 5295338];
const BettaFishSKUList = [
	5271256,
	5271256,
	5264944,
	5265057,
	5265055,
	5265055,
	5253372,
	5295056,
	5295564,
	5253512,
	5262074,
	5295573,
	5295572,
	5154257,
	5230342,
	5253507,
	5174966,
	5253371,
	5277169,
	5285082,
	5285081,
	5295336,
	5277167,
	5295565,
	5295337,
	5282472,
];
const TetraFishSKUList = [
	5271256,
	5248474,
	5262172,
	5174966,
	5262171,
	5278070,
	5292480,
	5294296,
	5262170,
	5278069,
	5296681,
	5262267,
	5154257,
	5174966,
	5253371,
	5277169,
	5277167,
	5262267,
	5262266,
	5229839,
	5282370,
	5262265,
	5262164,
	5277171,
	5277168,
	5154532,
	5154528,
];
const CichlidFishSKUList = [5262172, 5174966, 5175698];
const GoldFishSKUList = [
	5248474,
	5262172,
	5174966,
	5262171,
	5175698,
	5278070,
	5292480,
	5294296,
	5262170,
	5278069,
	5296681,
	5262267,
	5262267,
	5262266,
	5229839,
	5282370,
	5262265,
	5262164,
	5277171,
	5277168,
	5154532,
	5154528,
];
const GloFishSKUList = [5300125, 5300979, 5295057, 5295056, 5295564, 5295573, 5295572, 5277167];
export const SmallSKUList = [
	5264615,
	5264603,
	5253512,
	5262075,
	5295338,
	5253506,
	5282474,
	5253508,
	5282473,
	5271255,
	5295572,
	5285082,
	5295335,
	5295337,
	5282472,
	5300125,
	5300984,
	5253372,
	5262074,
	5264944,
	5295564,
	5262256,
	5230342,
	5253507,
	5253371,
	5285081,
	5295336,
	5300988,
	5295565,
	5295573,
	5265057,
	5265055,
	5265083,
];
export const MediumSKUList = [
	5262353,
	5295056,
	5154527,
	5295570,
	5277169,
	5277167,
	5300979,
	5271256,
	5262265,
	5277168,
	5295057,
	5154528,
	5277171,
	5262164,
	5282370,
	5292480,
	5262266,
	5229839,
	5296681,
];
export const LargeSKUList = [5294296, 5262170, 5278069, 5262267, 5154532, 5248474, 5262171, 5278070, 5262172, 5278069];
export const SKUList = [
	5264615,
	5264603,
	5253512,
	5262075,
	5295338,
	5253506,
	5282474,
	5253508,
	5282473,
	5271255,
	5295572,
	5285082,
	5295335,
	5295337,
	5282472,
	5300125,
	5300984,
	5253372,
	5262074,
	5264944,
	5295564,
	5262256,
	5230342,
	5253507,
	5253371,
	5285081,
	5295336,
	5300988,
	5295565,
	5295573,
	5265057,
	5265055,
	5265083,
	5262353,
	5295056,
	5154527,
	5295570,
	5277169,
	5277167,
	5300979,
	5271256,
	5262265,
	5277168,
	5295057,
	5154528,
	5277171,
	5262164,
	5282370,
	5292480,
	5262266,
	5229839,
	5296681,
	5294296,
	5262170,
	5278069,
	5262267,
	5154532,
	5248474,
	5262171,
	5278070,
	5262172,
	5278069,
];
/** End SKUIds for Fish and Tank  */
export const getSkuList = (fishName) => {
	switch (fishName) {
		case 'Betta':
			return BettaFishSKUList;
		case 'Cichlid':
			return CichlidFishSKUList;
		case 'Goldfish':
			return GoldFishSKUList;
		case 'Glofish':
			return GloFishSKUList;
		case 'Tetra':
			return TetraFishSKUList;
		case 'Snail':
			return SnailFishSKUList;
		default:
			return [];
	}
};
export const mockProductData = {
	fishList: [
		{
			id: 101,
			name: 'Not Sure',
			imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_Fish_Not_Sure?fmt=png-alpha',
			description: 'Male bettas cannot live together. One betta can live in a tank with other peaceful community fish.',
		},
		{
			id: 102,
			name: 'Betta',
			imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_Fish_Betta?fmt=png-alpha',
			description: 'Male bettas cannot live together. One betta can live in a tank with other peaceful community fish.',
		},
		{
			id: 103,
			name: 'Cichlid',
			imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_Fish_Cichlid?fmt=png-alpha',
			description: 'Male bettas cannot live together. One betta can live in a tank with other peaceful community fish.',
		},
		{
			id: 104,
			name: 'Goldfish',
			imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_Fish_Glofish?fmt=png-alpha',
			description: 'Male bettas cannot live together. One betta can live in a tank with other peaceful community fish.',
		},
		{
			id: 105,
			name: 'Glofish',
			imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_Fish_Goldfish?fmt=png-alpha',
			description: 'Male bettas cannot live together. One betta can live in a tank with other peaceful community fish.',
		},
		{
			id: 106,
			name: 'Tetra',
			imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_Fish_Tetra?fmt=png-alpha',
			description: 'Male bettas cannot live together. One betta can live in a tank with other peaceful community fish.',
		},
		{
			id: 107,
			name: 'Snail',
			imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_Fish_Snail?fmt=png-alpha',
			description: 'Male bettas cannot live together. One betta can live in a tank with other peaceful community fish.',
		},
	],
	accessories: [
		{
			id: '1001',
			imageUrl: 'https://picsum.photos/200/300',
			name: 'Recommended Accessory Name Here - 1',
			price: 100,
			oldPrice: 110,
			rating: 4.5,
			recommendedForFish: 'Betta',
			tankSize: 'small',
			color: 'Black',
			size: '10 Gal',
			owner: 'Top Fin',
			productImages: [
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
			],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
		},
		{
			id: '1002',
			imageUrl: 'https://picsum.photos/200/300',
			name: 'Recommended Accessory Name Here - 2',
			price: 100,
			oldPrice: 110,
			rating: 4.5,
			recommendedForFish: 'Betta',
			tankSize: 'small',
			color: 'Black',
			size: '10 Gal',
			owner: 'Top Fin',
			productImages: [
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
			],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
		},
		{
			id: '1003',
			imageUrl: 'https://picsum.photos/200/300',
			name: 'Recommended Accessory Name Here - 3',
			price: 95,
			oldPrice: 100,
			rating: 3.5,
			recommendedForFish: 'Betta',
			tankSize: 'small',
			color: 'Black',
			size: '10 Gal',
			owner: 'Top Fin',
			productImages: [
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
			],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
		},
	],
	gravelDecor: [
		{
			id: '1001',
			imageUrl: 'https://picsum.photos/200/300',
			name: 'Recommended Gravel & Decor item Name Here - 1',
			price: 100,
			oldPrice: 110,
			rating: 4.5,
			recommendedForFish: 'Betta',
			tankSize: 'small',
			color: 'Black',
			colorList: ['#00567C', '#06847F', '#FFFFFF', '#B45303'],
			size: '10 Gal',
			owner: 'Top Fin',
			productImages: [
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
			],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
		},
		{
			id: '1002',
			imageUrl: 'https://picsum.photos/200/300',
			name: 'Recommended Gravel & Decor item Name Here - 2',
			price: 100,
			oldPrice: 110,
			rating: 4.5,
			recommendedForFish: 'Betta',
			tankSize: 'small',
			color: 'Black',
			colorList: ['#00567C', '#06847F', '#FFFFFF', '#B45303'],
			size: '10 Gal',
			owner: 'Top Fin',
			productImages: [
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
			],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
		},
		{
			id: '1003',
			imageUrl: 'https://picsum.photos/200/300',
			name: 'Recommended Gravel & Decor item Name Here - 3',
			price: 95,
			oldPrice: 100,
			rating: 3.5,
			recommendedForFish: 'Betta',
			tankSize: 'small',
			color: 'Black',
			colorList: ['#00567C', '#06847F', '#FFFFFF', '#B45303'],
			size: '10 Gal',
			owner: 'Top Fin',
			productImages: [
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
			],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
		},
	],
	care: [
		{
			id: '1001',
			imageUrl: 'https://picsum.photos/200/300',
			name: 'Recommended Tank Care item Name Here - 1',
			price: 100,
			oldPrice: 110,
			rating: 4.5,
			recommendedForFish: 'Betta',
			tankSize: 'small',
			color: 'Black',
			size: '10 Gal',
			owner: 'Top Fin',
			productImages: [
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
			],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
		},
		{
			id: '1002',
			imageUrl: 'https://picsum.photos/200/300',
			name: 'Recommended Tank Care item Name Here - 2',
			price: 100,
			oldPrice: 110,
			rating: 4.5,
			recommendedForFish: 'Betta',
			tankSize: 'small',
			color: 'Black',
			size: '10 Gal',
			owner: 'Top Fin',
			productImages: [
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
			],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
		},
		{
			id: '1003',
			imageUrl: 'https://picsum.photos/200/300',
			name: 'Recommended Tank Care item Name Here - 3',
			price: 95,
			oldPrice: 100,
			rating: 3.5,
			recommendedForFish: 'Betta',
			tankSize: 'small',
			color: 'Black',
			size: '10 Gal',
			owner: 'Top Fin',
			productImages: [
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
				'https://picsum.photos/200/300',
			],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
		},
	],
	steps: ['Fish & Tank', 'Accessories', 'Gravel & Decor', 'Care'],
	fishTipsSteps: [
		{
			title: 'Tips for Your Fish',
			label: 'Provide nutrition for your fish that has similar ingredients to what they would eat in the wild.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_1_1x?fmt=png-alpha',
		},
		{
			title: 'Tips for Your Fish',
			label:
				'Ensure the proper water temperature. Some species like goldfish prefer cooler water around 65-70° F while fish likeSouth American tetras prefer 80-83° F.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_1_1x?fmt=png-alpha',
		},
		{
			title: 'Tips for Your Fish',
			label:
				'How you decorate your tank matters. For example, some cichlids like to have hiding places while most tetras prefer live or artificial plants.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_1_1x?fmt=png-alpha',
		},
	],
	tankTipsSteps: [
		{
			title: 'Choosing Your Tank',
			label:
				'Remember: water is heavy! Small desktop aquariums are great for countertops and sturdy tables, while bigger tanks require stands.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_2_1x?fmt=png-alpha',
		},
		{
			title: 'Choosing Your Tank',
			label:
				'Place your tank in a roomtemperature, shaded space away from direct sunlight to reduce the chances of algae growth or temperature fluctuations.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_2_1x?fmt=png-alpha',
		},
		{
			title: 'Choosing Your Tank',
			label:
				'As a general rule, you need 1 gallon of water for every 1 inch of fish. Also, keep in mind the potential growth of your fish.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_2_1x?fmt=png-alpha',
		},
	],
	accessoriesTipsSteps: [
		{
			title: 'Tips for Aquarium Accessories',
			label:
				'Fish also enjoy lights out when they rest. Ideal light cycles are 12 hours on, 12 hours off in order to support fish health.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_3_1x?fmt=png-alpha',
		},
		{
			title: 'Tips for Aquarium Accessories',
			label: 'Replacing filter cartridges every 3-4 weeks helps your tank maintain optimal water quality.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_3_1x?fmt=png-alpha',
		},
		{
			title: 'Tips for Aquarium Accessories',
			label: 'Check your thermometer daily to ensure your tank is at the optimal temperature for your fish.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_3_1x?fmt=png-alpha',
		},
	],
	gravelDecorTipsSteps: [
		{
			title: 'Gravel & Décor Tips',
			label: 'Have fun customizing the décor in your fish’s home! We recommend having 2-3 items in each tank.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_4_1x?fmt=png-alpha',
		},
		{
			title: 'Gravel & Décor Tips',
			label:
				'Make sure the décor is compatible. For example, bettas love to hide, so add a cave or plants. Cichlids prefer rock or slate ornaments.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_4_1x?fmt=png-alpha',
		},
		{
			title: 'Gravel & Décor Tips',
			label: 'Rinse off gravel and décor in water before placing in your tank.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_4_1x?fmt=png-alpha',
		},
	],
	careTipsSteps: [
		{
			title: 'Water Care Tips',
			label:
				'Add water conditioner to tap water 24-48 hours before adding fish to stablize temperatures. Add bacteria starter only when adding fish, not before. ',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_5_1x?fmt=png-alpha',
		},
		{
			title: 'Water Care Tips',
			label:
				'Tank scrubbers clean surfaces such as the glass, while gravel vacuums can be used for organic debris and waste at the bottom of your tank.',
			imgPath: 'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_step_5_1x?fmt=png-alpha',
		},
	],
};
