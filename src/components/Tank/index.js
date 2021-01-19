import React, { Fragment } from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Grid, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { ProductListing } from './ProductListing';
import { TipsCarousel } from './TipsCarousel';
const mockData = require('./ProductList.json');

const tutorialSteps = [
	{
		title: 'Tips for Your Fish',
		label: 'Provide nutrition for your fish that has similar ingredients to what they would eat in the wild.',
		imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=215&h=170&q=60',
	},
	{
		title: 'Tank Tips',
		label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
		imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=215&h=170&q=60',
	},
	{
		title: 'Accessories Tips',
		label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
		imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=215&h=170&q=80',
	},
	{
		title: 'Gravel & Decor Tips',
		label: 'Use 1 to 1.5 lbs. of gravel per gallon of tank.',
		imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=215&h=170&q=60',
	},
	{
		title: 'Tank Care Tips',
		label: 'Use 1 to 1.5 lbs. of gravel per gallon of tank.',
		imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=215&h=170&q=60',
	},
];

export const Tank = (props) => {
	const classes = useStyles();
	const defaultProductSelection = [
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
	const { fishList, productsList } = mockData;
	const [activeStep, setActiveStep] = React.useState(0);
	const [activeSliderStep, setActiveSliderStep] = React.useState(0);
	const [selectedFishData, setSelectedFishData] = React.useState(0);
	const [selectedTankData, setSelectedTankData] = React.useState(0);
	const [selectedAccessoriesData, setSelectedAccessoriesData] = React.useState(0);
	const [selectedGravelDecorData, setSelectedGravelDecorData] = React.useState(0);
	const [selectedCareData, setSelectedCareData] = React.useState(0);
	const [selectedProduct, setSelectedProduct] = React.useState(0);
	const [selectedProducts, setSelectedProducts] = React.useState(defaultProductSelection);
	const [selectionType, setSelectionType] = React.useState('Fish');
	const [selectionBasedProductList, setSelectionBasedProductList] = React.useState(fishList);
	const [titleDetails, setTitleDetails] = React.useState({
		title: 'Select your favorite fish',
		subTitle: 'Please select a fish you plan on building a tank for.',
	});
	const steps = ['Fish & Tank', 'Accessories', 'Gravel & Decor', 'Care'];
	const maxSteps = tutorialSteps.length;

	const handleNext = () => {
		const newState = activeSliderStep + 1;
		setActiveSliderStep(newState);
		setActiveStep(newState === 0 || newState === 1 ? 0 : activeStep + 1);
		setProductDisplayType(newState);
	};
	const handleBack = () => {
		const newState = activeSliderStep - 1;
		setActiveSliderStep(newState);
		setActiveStep(newState === 0 || newState === 1 ? 0 : activeStep - 1);
		setProductDisplayType(newState);
	};
	const handleStepChange = (step) => {
		setActiveSliderStep(step);
	};
	const handleProductSelection = (event, product) => {
		if (selectedProduct === product) {
			setSelectedProduct(0);
			if (selectionType === 'Fish') {
				setSelectedFishData(0);
			} else if (selectionType === 'Tank') {
				setSelectedTankData(0);
			}
		} else {
			setSelectedProduct(product);
			if (selectionType === 'Fish') {
				setSelectedFishData(product);
			} else if (selectionType === 'Tank') {
				setSelectedTankData(product);
			}
		}
	};
	const addToCart = (newState, selectedProductData, type) => {
		const cartIndex = newState; // === 1 || newState === 2 ? 1 : newState - 1;
		const detailsIndex = selectedProducts.findIndex((item) => item.id === cartIndex);
		let details = detailsIndex > -1 ? selectedProducts[detailsIndex] : [];
		if (type === 'Tank') {
			details = {
				...details,
				productImage: selectedProductData.imageUrl,
				ProductName: selectedProductData.name,
				ProductPrice: selectedProductData.price,
				fishSelection: selectedProductData,
			};
		}
		const finalData = selectedProducts.map((item, index) => {
			if (index === detailsIndex) return details;
			else return item;
		});
		setSelectedProducts(finalData);
	};
	const setProductDisplayType = (newState) => {
		if (newState === 0) {
			//--------- For Fish
			const selectedProductData = selectedFishData;
			setSelectionType('Fish');
			setTitleDetails({
				title: 'Select your favorite fish',
				subTitle: 'Please select a fish you plan on building a tank for.',
			});
			setSelectedProducts(defaultProductSelection);
			setSelectedTankData(0);
			setSelectionBasedProductList(fishList);
			addToCart(0, selectedProductData, 'Tank'); // Add to Cart
		} else if (newState === 1) {
			const selectedProductData = selectedFishData;
			//--------- For Tank
			addToCart(0, selectedProductData, 'Tank'); // Add to Cart
			setSelectionType('Tank');
			if (selectedProductData.name === 'Any Fish') {
				setTitleDetails({
					title: `Select a tank`,
					subTitle: 'Choose from a small, medium, or large tank.',
				});
				setSelectionBasedProductList(productsList);
			} else {
				setTitleDetails({
					title: `For ${selectedProductData.name}, we recommend these tanks`,
					subTitle: 'Please select a tank.',
				});
				setSelectionBasedProductList(
					productsList.filter((item) => item.recommendedForFish === selectedProductData.name)
				);
			}
		} else {
		}
	};
	const handleProductSelectionClick = (event) => {
		handleNext();
	};
	const handleGoBackClick = (event) => {
		handleBack();
	};

	return (
		<main>
			<Grid container spacing={0}>
				<Grid item xs={8}>
					<Box>
						<Box className={classes.main}>
							<Stepper alternativeLabel nonLinear activeStep={activeStep}>
								{Boolean(steps) && steps.length ? (
									steps.map((label, index) => (
										<Step key={label} completed={index <= activeStep - 1}>
											<StepLabel>{label}</StepLabel>
										</Step>
									))
								) : (
									<></>
								)}
							</Stepper>
						</Box>
						{selectionType !== 'Final' ? (
							<TipsCarousel
								activeSliderStep={activeSliderStep}
								handleStepChange={handleStepChange}
								tutorialSteps={tutorialSteps}
								maxSteps={maxSteps}
							/>
						) : (
							<Box>
								<Typography variant='h5' style={{ fontWeight: 'bold' }}>
									Your tank is ready to go
								</Typography>
								<Typography variant='body1'>
									Add your items to cart and head to your store to pick out your new fish friend.
								</Typography>
								<Box className={classes.heroBanner}>
									<Typography component='div' style={{ textAlign: 'center' }}>
										Hero Banner
									</Typography>
								</Box>
							</Box>
						)}
						<ProductListing
							selectionBasedProductList={selectionBasedProductList}
							handleProductSelection={handleProductSelection}
							selectedProduct={selectedProduct}
							handleProductSelectionClick={handleProductSelectionClick}
							handleGoBackClick={handleGoBackClick}
							type={selectionType}
							title={titleDetails.title}
							subTitle={titleDetails.subTitle}
							selectedFishData={selectedFishData}
							selectedTankData={selectedTankData}
							selectedAccessoriesData={selectedAccessoriesData}
							selectedGravelDecorData={selectedGravelDecorData}
							selectedCareData={selectedCareData}
						/>
					</Box>
				</Grid>
				<Grid item xs={4}>
					<Box className={classes.rightPanel}>
						<Typography className={classes.rightPanelHeading}>Build your tank</Typography>
						<Box>
							{Boolean(selectedProducts) && selectedProducts.length ? (
								selectedProducts.map((item, index) => (
									<Fragment key={`productType_${item.ProductName}_${index}`}>
										<Box className={classes.productCart}>
											<Typography variant='body2' style={{ fontWeight: 'bold' }}>
												{item.type}
											</Typography>
											{item.ProductName && item.ProductPrice ? (
												<Typography variant='body1' className={classes.linkColor}>
													Edit
												</Typography>
											) : (
												<></>
											)}
										</Box>
										<Box
											className={classes.productCart}
											style={{ paddingBottom: selectedProducts.length - 1 === index ? 10 : 0 }}
										>
											{item.ProductName && item.ProductPrice ? (
												<></>
											) : (
												<Typography style={{ paddingBottom: 20 }} variant='body2'>
													No Product Selected
												</Typography>
											)}
											{/* <Avatar variant='square' /> */}
											{item.productImage ? (
												<Box style={{ width: 50, height: 50, background: '#F2F2F2 0% 0% no-repeat padding-box' }}></Box>
											) : (
												<></>
											)}
											{item.ProductName ? (
												<Typography variant='body1' component='div'>
													{item.ProductName}
												</Typography>
											) : (
												<></>
											)}
											{item.ProductPrice ? (
												<Typography variant='body2' style={{ fontWeight: 'bold' }} component='div'>
													{`$ ${item.ProductPrice}`}
												</Typography>
											) : (
												<> </>
											)}
										</Box>
									</Fragment>
								))
							) : (
								<></>
							)}
							<Box
								display='flex'
								justifyContent='space-between'
								alignItems='center'
								style={{
									padding: 16,
									borderTop: '1px solid lightgrey',
								}}
							>
								<Typography variant='body2' style={{ fontWeight: 'bold' }}>
									Subtotal
								</Typography>
								<Typography variant='body2' style={{ fontWeight: 'bold' }}>
									{`$ ###.##`}
								</Typography>
							</Box>
							<Box
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									padding: '0px 16px 16px 16px',
								}}
							>
								<Button fullWidth disabled={selectionType !== 'Final'}>
									{`Add to cart`}
								</Button>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</main>
	);
};
