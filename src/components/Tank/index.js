import React, { Fragment } from 'react';
import { Box, Typography, Stepper, Step, MobileStepper, StepLabel, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useStyles } from './styles';
import { ProductListing } from './ProductListing';
const mockData = require('./ProductList.json');

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
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
	const theme = useTheme();
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
		selectedProduct === product ? setSelectedProduct(0) : setSelectedProduct(product);
	};
	const setProductDisplayType = (newState) => {
		if (newState === 0) {
			setSelectionType('Fish');
			setTitleDetails({
				title: 'Select your favorite fish',
				subTitle: 'Please select a fish you plan on building a tank for.',
			});
			setSelectedProducts(defaultProductSelection);
			setSelectedProduct(0);
			setSelectionBasedProductList(fishList);
		} else if (newState === 1) {
			const detailsIndex = selectedProducts.findIndex((item) => item.id === newState);
			let details = detailsIndex > -1 ? selectedProducts[detailsIndex] : [];
			details = {
				...details,
				fishSelection: selectedProduct,
			};
			const finalData = selectedProducts.map((item, index) => {
				if (index === detailsIndex) return details;
				else return item;
			});
			setSelectedProducts(finalData);
			setSelectionType('Tank');
			if (selectedProduct.name === 'Any Fish') {
				setTitleDetails({
					title: `Select a tank`,
					subTitle: 'Choose from a small, medium, or large tank.',
				});
				setSelectionBasedProductList(productsList);
			} else {
				setTitleDetails({
					title: `For ${selectedProduct.name}, we recommend these tanks`,
					subTitle: 'Please select a tank.',
				});
				setSelectionBasedProductList(productsList.filter((item) => item.recommendedFofFish === selectedProduct.name));
			}
		} else if (newState === 2) {
			setSelectionType('Accessories');
			setTitleDetails({
				title: 'Recommended accessories',
				subTitle: 'Add accessory item(s) to your tank.',
			});
		} else if (newState === 3) {
			setSelectionType('Gravel & Decor');
			setTitleDetails({
				title: 'Recommended gravel & decor',
				subTitle: 'Add gravel & decor item(s) to your tank.',
			});
		} else if (newState === 4) {
			setSelectionType('Care');
			setTitleDetails({
				title: 'Recommended care for your tank',
				subTitle: 'Add care item(s) to your tank.',
			});
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
						<Box>
							<AutoPlaySwipeableViews
								axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
								index={activeSliderStep}
								autoplay={false}
								onChangeIndex={handleStepChange}
								enableMouseEvents
							>
								{tutorialSteps.map((step, index) => (
									<Box key={`slider_${index}`} style={{ padding: '16px 24px 16px 16px' }}>
										{Math.abs(activeSliderStep - index) <= 2 ? (
											<Box display='flex' alignItems='center' justifyContent='space-between'>
												<Box>
													<Typography variant='h4'>{step.title}</Typography>
													<Typography variant='body1'>{step.label}</Typography>
												</Box>
												{step.imgPath ? <img className={classes.img} src={step.imgPath} alt={step.label} /> : ''}
											</Box>
										) : null}
									</Box>
								))}
							</AutoPlaySwipeableViews>
							<MobileStepper
								variant='dots'
								steps={maxSteps}
								position='static'
								activeStep={activeSliderStep}
								className={classes.root}
								// nextButton={
								// 	<Button size='small' onClick={handleNext} disabled={activeSliderStep === maxSteps - 1}>
								// 		Next
								// 		{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
								// 	</Button>
								// }
								// backButton={
								// 	<Button size='small' onClick={handleBack} disabled={activeSliderStep === 0}>
								// 		{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
								// 		Back
								// 	</Button>
								// }
							/>
						</Box>
						<ProductListing
							selectionBasedProductList={selectionBasedProductList}
							handleProductSelection={handleProductSelection}
							selectedProduct={selectedProduct}
							handleProductSelectionClick={handleProductSelectionClick}
							handleGoBackClick={handleGoBackClick}
							type={selectionType}
							title={titleDetails.title}
							subTitle={titleDetails.subTitle}
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
						</Box>
					</Box>
				</Grid>
			</Grid>
		</main>
	);
};
