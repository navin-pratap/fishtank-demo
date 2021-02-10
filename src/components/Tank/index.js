import React, { useState } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { ProductListing } from './ProductListing';
import { TipsCarousel } from './TipsCarousel';
import { configs, SKUList } from '../../config';
import { getSkuFullDetails } from '../../services/generator';
import { ProductStepper } from './ProductStepper';
import { CartView } from './CartView';

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
	const {
		fishList,
		accessories,
		gravelDecor,
		care,
		steps,
		fishTipsSteps,
		tankTipsSteps,
		accessoriesTipsSteps,
		gravelDecorTipsSteps,
		careTipsSteps,
	} = mockData;
	const [activeStep, setActiveStep] = useState(0);
	const [activeSliderStep, setActiveSliderStep] = useState(0);
	const [selectedFishData, setSelectedFishData] = useState(0);
	const [selectedTankData, setSelectedTankData] = useState(0);
	const [selectedAccessoriesData, setSelectedAccessoriesData] = useState(0);
	const [selectedGravelDecorData, setSelectedGravelDecorData] = useState(0);
	const [selectedCareData, setSelectedCareData] = useState(0);
	const [selectedProduct, setSelectedProduct] = useState(0);
	const [selectedProducts, setSelectedProducts] = useState(defaultProductSelection);
	const [selectionType, setSelectionType] = useState('Fish');
	const [selectionBasedProductList, setSelectionBasedProductList] = useState(fishList);
	// eslint-disable-next-line no-unused-vars
	const [productDetailsWithSKU, setProductDetailsWithSKU] = useState([]); // skuMockData.data
	const [currentTips, setCurrentTips] = useState(fishTipsSteps);
	const [maxSteps, setMaxSteps] = useState(fishTipsSteps.length);
	const [titleDetails, setTitleDetails] = useState({
		title: 'Select your favorite fish',
		subTitle: 'Please select a fish you plan on building a tank for.',
	});

	const getAllSkuDetails = async () => {
		const bigList = SKUList;
		let organizedList = {};
		let n = 0;

		for (let i = 0; i < bigList.length; i += configs.batchSize) {
			organizedList[`group${n}`] = bigList.slice(i, i + configs.batchSize);
			n += 1;
		}
		const listKeys = Object.keys(organizedList);
		let skuDetails = [];
		for (let i = 0; i < listKeys.length; i++) {
			const skuIds = organizedList[listKeys[i]];
			const response = await getSkuFullDetails(skuIds);
			const { data } = response.data;
			skuDetails.push(...data);
		}
		setProductDetailsWithSKU([...skuDetails]);
		return skuDetails;
	};
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
	const setProductDisplayType = async (newState) => {
		if (newState === 0) {
			//--------- For Fish
			const selectedProductData = selectedFishData;
			setCurrentTips(fishTipsSteps);
			setMaxSteps(fishTipsSteps.length);
			setActiveSliderStep(0);
			setSelectionType('Fish');
			setTitleDetails({
				title: 'Select your favorite fish',
				subTitle: 'Please select a fish you plan on building a tank for.',
			});
			setSelectedProducts(defaultProductSelection);
			setSelectedTankData(0);
			setSelectedAccessoriesData(0);
			setSelectedGravelDecorData(0);
			setSelectedCareData(0);
			setSelectionBasedProductList(fishList);
			addToCart(0, selectedProductData, 'Tank'); // Add to Cart
		} else if (newState === 1) {
			setCurrentTips(tankTipsSteps);
			setMaxSteps(tankTipsSteps.length);
			setActiveSliderStep(0);
			setSelectionBasedProductList([]);
			const selectedProductData = selectedFishData;
			//--------- For Tank
			addToCart(0, selectedProductData, 'Tank'); // Add to Cart
			setSelectionType('Tank');
			const response = await getAllSkuDetails();
			if (selectedProductData.name === 'Not Sure') {
				setTitleDetails({
					title: `Select a tank`,
					subTitle: 'Choose from a small, medium, or large tank.',
				});
				setSelectionBasedProductList(response); //(productDetailsWithSKU);
			} else {
				setTitleDetails({
					title: `For ${selectedProductData.name}, we recommend these tanks`,
					subTitle: 'Please select a tank.',
				});

				setSelectionBasedProductList(response); //(productDetailsWithSKU);
				// setSelectionBasedProductList(
				// 	productsList.filter((item) => item.recommendedForFish === selectedProductData.name)
				// );
			}
			setSelectedAccessoriesData(0);
			setSelectedGravelDecorData(0);
			setSelectedCareData(0);
		} else if (newState === 2) {
			//--------- For Accessories
			setCurrentTips(accessoriesTipsSteps);
			setMaxSteps(accessoriesTipsSteps.length);
			setActiveSliderStep(0);
			const selectedProductData = selectedTankData;
			addToCart(1, selectedProductData, 'Accessories'); // Add to Cart
			setSelectionType('Accessories');
			setTitleDetails({
				title: 'Recommended accessories',
				subTitle: 'Add accessory item(s) to your tank.',
			});
			setSelectionBasedProductList(accessories);

			setSelectedGravelDecorData(0);
			setSelectedCareData(0);
		} else if (newState === 3) {
			setCurrentTips(gravelDecorTipsSteps);
			setMaxSteps(gravelDecorTipsSteps.length);
			setActiveSliderStep(0);
			//--------- For Gravel & Decor
			const selectedProductData = selectedAccessoriesData;
			addToCart(2, selectedProductData, 'Gravel & Decor'); // Add to Cart
			setSelectionType('Gravel & Decor');
			setTitleDetails({
				title: 'Recommended gravel & decor',
				subTitle: 'Add gravel & decor item(s) to your tank.',
			});
			setSelectionBasedProductList(gravelDecor);

			setSelectedCareData(0);
		} else if (newState === 4) {
			setCurrentTips(careTipsSteps);
			setMaxSteps(careTipsSteps.length);
			setActiveSliderStep(0);
			//--------- For Care
			const selectedProductData = selectedGravelDecorData;
			addToCart(3, selectedProductData, 'Care'); // Add to Cart
			setSelectionType('Care');
			setTitleDetails({
				title: 'Recommended care for your tank',
				subTitle: 'Add care item(s) to your tank.',
			});
			setSelectionBasedProductList(care);
		} else if (newState === 5) {
			setCurrentTips([]);
			setMaxSteps(0);
			setActiveSliderStep(0);
			const selectedProductData = selectedCareData;
			addToCart(4, selectedProductData, 'Care'); // Add to Cart
			setSelectionType('Final');
			setTitleDetails({
				title: 'Do’s and don’ts with your new fish',
				subTitle: '',
			});
			setSelectionBasedProductList([]);
		}
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
	const handleChangeTips = (event, index) => {
		setActiveSliderStep(index);
	};

	return (
		<main>
			<Grid container spacing={0}>
				<Grid item xs={8}>
					<Box>
						<Box className={classes.main}>
							<ProductStepper activeStep={activeStep} steps={steps} />
						</Box>
						{selectionType !== 'Final' ? (
							<TipsCarousel
								activeSliderStep={activeSliderStep}
								handleStepChange={handleStepChange}
								tutorialSteps={currentTips}
								maxSteps={maxSteps}
								handleBack={handleBack}
								handleNext={handleNext}
								handleChangeTips={handleChangeTips}
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
					<CartView
						classes={classes}
						selectedProducts={selectedProducts}
						selectionType={selectionType}
						getSubTotal={getSubTotal}
					/>
				</Grid>
			</Grid>
		</main>
	);
};
