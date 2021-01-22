import React, { Fragment } from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Grid, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { ProductListing } from './ProductListing';
import { TipsCarousel } from './TipsCarousel';
const mockData = require('./ProductList.json');

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
	const { fishList, productsList, accessories, gravelDecor, care, tutorialSteps, steps } = mockData;
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
	const maxSteps = tutorialSteps.length;

	const getNewState = () => {
		if (selectionType === 'Fish') {
			return 1;
		} else if (selectionType === 'Tank') {
			return 2;
		} else if (selectionType === 'Accessories') {
			return 3;
		} else if (selectionType === 'Gravel & Decor') {
			return 4;
		} else if (selectionType === 'Care') {
			return 5;
		}
	};
	const handleNext = (event, callType) => {
		let newState = activeSliderStep + 1;
		if (callType === 1) {
			newState = getNewState();
		}
		setActiveSliderStep(newState);
		callType === 1 && setActiveStep(newState === 0 || newState === 1 ? 0 : activeStep + 1);
		callType === 1 && setProductDisplayType(newState);
	};
	const handleBack = (event, callType) => {
		let newState = activeSliderStep - 1;
		if (callType === 1) {
			newState = getNewState();
		}
		setActiveSliderStep(newState);
		callType === 1 && setActiveStep(newState === 0 || newState === 1 ? 0 : activeStep - 1);
		callType === 1 && setProductDisplayType(newState);
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
			} else if (selectionType === 'Accessories') {
				setSelectedAccessoriesData(0);
			} else if (selectionType === 'Gravel & Decor') {
				setSelectedGravelDecorData(0);
			} else if (selectionType === 'Care') {
				setSelectedCareData(0);
			}
		} else {
			setSelectedProduct(product);
			if (selectionType === 'Fish') {
				setSelectedFishData(product);
			} else if (selectionType === 'Tank') {
				setSelectedTankData(product);
			} else if (selectionType === 'Accessories') {
				setSelectedAccessoriesData(product);
			} else if (selectionType === 'Gravel & Decor') {
				setSelectedGravelDecorData(product);
			} else if (selectionType === 'Care') {
				setSelectedCareData(product);
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
		} else if (type === 'Accessories') {
			details = {
				...details,
				productImage: selectedProductData.imageUrl,
				ProductName: selectedProductData.name,
				ProductPrice: selectedProductData.price,
			};
		} else if (type === 'Gravel & Decor') {
			details = {
				...details,
				productImage: selectedProductData.imageUrl,
				ProductName: selectedProductData.name,
				ProductPrice: selectedProductData.price,
			};
		} else if (type === 'Care') {
			details = {
				...details,
				productImage: selectedProductData.imageUrl,
				ProductName: selectedProductData.name,
				ProductPrice: selectedProductData.price,
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
			// setSelectedProduct(0);
			// setSelectedFishData(0);
			setSelectedTankData(0);
			setSelectedAccessoriesData(0);
			setSelectedGravelDecorData(0);
			setSelectedCareData(0);
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
			// setSelectedProduct(0);
			// setSelectedFishData(0);
			// setSelectedTankData(0);
			setSelectedAccessoriesData(0);
			setSelectedGravelDecorData(0);
			setSelectedCareData(0);
		} else if (newState === 2) {
			//--------- For Accessories
			const selectedProductData = selectedTankData;
			addToCart(1, selectedProductData, 'Accessories'); // Add to Cart
			setSelectionType('Accessories');
			setTitleDetails({
				title: 'Recommended accessories',
				subTitle: 'Add accessory item(s) to your tank.',
			});
			setSelectionBasedProductList(accessories);

			// setSelectedFishData(0);
			// setSelectedTankData(0);
			// setSelectedAccessoriesData(0);
			setSelectedGravelDecorData(0);
			setSelectedCareData(0);
		} else if (newState === 3) {
			//--------- For Gravel & Decor
			const selectedProductData = selectedAccessoriesData;
			addToCart(2, selectedProductData, 'Gravel & Decor'); // Add to Cart
			setSelectionType('Gravel & Decor');
			setTitleDetails({
				title: 'Recommended gravel & decor',
				subTitle: 'Add gravel & decor item(s) to your tank.',
			});
			setSelectionBasedProductList(gravelDecor);

			// setSelectedFishData(0);
			// setSelectedTankData(0);
			// setSelectedAccessoriesData(0);
			// setSelectedGravelDecorData(0);
			setSelectedCareData(0);
		} else if (newState === 4) {
			//--------- For Care
			const selectedProductData = selectedGravelDecorData;
			addToCart(3, selectedProductData, 'Care'); // Add to Cart
			setSelectionType('Care');
			setTitleDetails({
				title: 'Recommended care for your tank',
				subTitle: 'Add care item(s) to your tank.',
			});
			setSelectionBasedProductList(care);

			// setSelectedFishData(0);
			// setSelectedTankData(0);
			// setSelectedAccessoriesData(0);
			// setSelectedGravelDecorData(0);
			// setSelectedCareData(0);
		} else if (newState === 5) {
			const selectedProductData = selectedCareData;
			addToCart(4, selectedProductData, 'Care'); // Add to Cart
			setSelectionType('Final');
			setTitleDetails({
				title: 'Do’s and don’ts with your new fish',
				subTitle: '',
			});
			setSelectionBasedProductList([]);
		}
		// if (newState === 0 || newState === 1) {
		// } else if (newState === 2) {
		// } else if (newState === 3) {
		// } else if (newState === 4) {
		// } else if (newState === 5) {
		// }
	};
	const handleProductSelectionClick = (event) => {
		handleNext(event, 1);
	};
	const handleGoBackClick = (event) => {
		handleBack(event, 1);
	};
	const getSubTotal = () => {
		let sum = 0;
		Boolean(selectedProducts) &&
			selectedProducts.length &&
			selectedProducts.forEach((item) => {
				sum = sum + item.ProductPrice;
			});
		return sum;
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
								handleBack={handleBack}
								handleNext={handleNext}
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
									{`$ ${selectionType === 'Final' ? getSubTotal() : '###.##'}`}
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
								<Button
									fullWidth
									style={{
										backgroundColor: selectionType === 'Final' ? '#007DB4' : '#F2F2F2',
										color: selectionType === 'Final' ? '#ffffff' : 'lightgray',
									}}
									disabled={selectionType !== 'Final'}
								>
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
