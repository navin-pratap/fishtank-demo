import React, { Fragment } from 'react';
import { Box, Typography, Stepper, Step, MobileStepper, StepLabel, Grid, Avatar, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useStyles } from './styles';
const mockData = require('./ProductList.json');

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
	{
		title: 'Tips Tips',
		label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
		imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=215&h=170&q=60',
	},
	{
		title: 'Tips for Your Fish',
		label: 'Provide nutrition for your fish that has similar ingredients to what they would eat in the wild.',
		imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=215&h=170&q=60',
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
	const { FishList } = mockData;
	const [activeStep, setActiveStep] = React.useState(0);
	const [activeSliderStep, setActiveSliderStep] = React.useState(0);
	const [selectedProduct, setSelectedProduct] = React.useState(0);
	const [selectedProducts, setSelectedProducts] = React.useState([
		{
			type: 'Tank',
			productImage: '',
			ProductName: '',
			ProductPrice: 0,
		},
		{
			type: 'Accessories',
			productImage: '',
			ProductName: '',
			ProductPrice: 0,
		},
		{
			type: 'Gravel & Decor',
			productImage: '',
			ProductName: '',
			ProductPrice: 0,
		},
		{
			type: 'Care',
			productImage: '',
			ProductName: '',
			ProductPrice: 0,
		},
	]);
	const steps = ['Fish & Tank', 'Accessories', 'Gravel & Decor', 'Care'];
	const maxSteps = tutorialSteps.length;

	const handleNext = () => {
		const newState = activeSliderStep + 1;
		console.log(newState);
		setActiveSliderStep(newState);
		setActiveStep(newState === 0 || newState === 1 ? 0 : activeStep + 1);
	};
	const handleBack = () => {
		const newState = activeSliderStep - 1;
		console.log(newState);
		setActiveSliderStep(newState);
		setActiveStep(newState === 0 || newState === 1 ? 0 : activeStep - 1);
	};
	const handleStepChange = (step) => {
		setActiveSliderStep(step);
	};
	const handleProductSelection = (event, product) => {
		console.log(event, product, selectedProduct);
		selectedProduct === product ? setSelectedProduct(0) : setSelectedProduct(product);
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
							{/* style={{ paddingLeft: 115, paddingRight: 115 }} */}
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
						<Box>
							<Box>
								<Typography className={classes.rightPanelHeading} style={{ paddingLeft: 0 }}>
									Select your favorite fish
								</Typography>
								<Typography variant='body2'>Please select a fish you plan on building a tank for.</Typography>
							</Box>
							{/* Selected Product List */}
							<Box
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginTop: 10,
									paddingRight: 24,
								}}
							>
								{Boolean(FishList) && FishList.length ? (
									FishList.map((item) => (
										<Box style={{ cursor: 'pointer' }} onClick={(e) => handleProductSelection(e, item)}>
											<Box
												style={{
													padding: 8,
													border: `1px solid ${selectedProduct.id === item.id ? '#007DB4' : '#DDDDDD'}`,
												}}
											>
												{item.imageUrl ? (
													<Avatar style={{ width: 85, height: 85 }} variant='square' src={item.imageUrl} />
												) : (
													<Box style={{ width: 85, height: 85, background: 'grey 0% 0% no-repeat padding-box' }}></Box>
												)}
											</Box>
											<Typography variant='body2' style={{ textAlign: 'center', marginTop: 8 }}>
												{item.name}
											</Typography>
										</Box>
									))
								) : (
									<></>
								)}
							</Box>
							{Boolean(selectedProduct) ? (
								<Box
									mt={2}
									mr={2.25}
									style={{
										background: '#ECF6FA 0% 0% no-repeat padding-box',
										border: '1px solid #007DB4',
										borderRadius: 4,
										padding: 16,
									}}
								>
									<Typography variant='body1' component='div' style={{ fontWeight: 'bold' }}>
										{selectedProduct.name}
									</Typography>
									<Typography variant='body2' component='div'>
										{selectedProduct.description}
									</Typography>
								</Box>
							) : (
								<></>
							)}
							<Box display='flex' justifyContent='flex-end' pr={2.25} pt={2}>
								{Boolean(selectedProduct) ? (
									<Button style={{ backgroundColor: '#007DB4', color: '#ffffff' }}>Continue</Button>
								) : (
									<Button disabled>Continue</Button>
								)}
							</Box>
						</Box>
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
