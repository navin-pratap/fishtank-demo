import React, { Fragment, useEffect, useState } from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';
import { useStyles } from './styles';
import { ProductDetailsModal } from './ProductDetailsModal';
import { CommonButton } from '../Common/CommonButton';
import { TankFilter } from './TankFilters';
import { FishDetails } from './FishDetails';
import { TankDetails } from './TankDetails';
import { AccessoriesDetails } from './AccessoriesDetails';
import { GravelDecorDetails } from './GravelDecorDetails';
import { CareDetails } from './CareDetails';
import {
	configs,
	SmallSKUList,
	MediumSKUList,
	LargeSKUList,
	SKUList,
	CustomFilter,
	getFishCareOption,
	finalPageContent,
} from '../../config';

export const ProductListing = (props) => {
	const {
		selectionBasedProductList,
		handleProductSelection,
		selectedProduct,
		type,
		handleProductSelectionClick,
		handleGoBackClick,
		title,
		subTitle,
		selectedFishData,
		selectedTankData,
		selectedAccessoriesData,
		selectedGravelDecorData,
		selectedCareData,
	} = props;
	const classes = useStyles();
	const [openModal, setOpenModal] = useState(false);
	const [selectedProductDetails, setSelectedProductDetails] = useState(selectedProduct);
	const [productDetails, setProductDetails] = useState([]);
	const [splitButtonClickType, setSplitButtonClickType] = useState(null);
	const [productType, setProductType] = useState(type);
	useEffect(() => {
		setSelectedProductDetails(selectedProduct);
	}, [selectedProduct]);
	useEffect(() => {
		if (type === 'Fish') {
			setSelectedProductDetails(selectedFishData);
		} else if (type === 'Tank') {
			setSelectedProductDetails(selectedTankData);
		} else if (type === 'Accessories') {
			setSelectedProductDetails(selectedAccessoriesData);
		} else if (type === 'Gravel & Decor') {
			setSelectedProductDetails(selectedGravelDecorData);
		} else if (type === 'Care') {
			setSelectedProductDetails(selectedCareData);
		}
		type && setProductType(type);
	}, [type, selectedFishData, selectedTankData, selectedAccessoriesData, selectedGravelDecorData, selectedCareData]);
	useEffect(() => {
		setProductDetails(selectionBasedProductList);
	}, [selectionBasedProductList]);

	const handleOpenModal = (event, product) => {
		setSelectedProductDetails(product);
		setOpenModal(true);
		handleProductSelection(event, product);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
	};
	const filterTankList = (event, filterType) => {
		let skuList = SKUList;
		if (filterType === 'small') {
			skuList = SmallSKUList;
		} else if (filterType === 'medium') {
			skuList = MediumSKUList;
		} else if (filterType === 'large') {
			skuList = LargeSKUList;
		} else if (filterType === 'custom') {
			skuList = CustomFilter;
		}
		setSplitButtonClickType(filterType);
		const filterData = selectionBasedProductList.filter((item) => skuList.find((skuId) => skuId === parseInt(item.id)));
		setProductDetails(filterData);
	};
	const convertPrice = (price) => {
		return price ? price.toFixed(2) : 0;
	};

	return (
		<Fragment>
			<Box>
				<Box className='tank-filters-main'>
					<Box className='tank-filters'>
						<Typography className={classes.rightPanelHeading} style={{ paddingLeft: 0 }}>
							{title}
						</Typography>
						<Typography variant='body2'>{subTitle}</Typography>
					</Box>
					{title === 'Select a tank' ? (
						<Box pr={3}>
							<TankFilter filterTankList={filterTankList} splitButtonClickType={splitButtonClickType} />
						</Box>
					) : (
						<></>
					)}
				</Box>
				{/* Selected Product List */}
				<Box
					className='product-listing-main'
					style={{
						display: 'flex',
						justifyContent: productType === 'Fish' ? 'space-between' : 'flex-start',
						alignItems: 'center',
						flexWrap: 'wrap',
					}}
				>
					{productType === 'Fish' ? (
						<FishDetails
							productDetails={productDetails}
							selectedProductDetails={selectedProductDetails}
							handleProductSelection={handleProductSelection}
							classes={classes}
						/>
					) : (
						<></>
					)}
					{productType === 'Tank' ? (
						<TankDetails
							productDetails={productDetails}
							selectedProductDetails={selectedProductDetails}
							classes={classes}
							handleOpenModal={handleOpenModal}
						/>
					) : (
						<></>
					)}
					{productType === 'Accessories' ? (
						<AccessoriesDetails
							productDetails={productDetails}
							selectedProductDetails={selectedProductDetails}
							handleOpenModal={handleOpenModal}
							classes={classes}
							convertPrice={convertPrice}
						/>
					) : (
						<></>
					)}
					{productType === 'Gravel & Decor' ? (
						<GravelDecorDetails
							productDetails={productDetails}
							selectedProductDetails={selectedProductDetails}
							handleOpenModal={handleOpenModal}
							classes={classes}
							convertPrice={convertPrice}
						/>
					) : (
						<></>
					)}
					{productType === 'Care' ? (
						<CareDetails
							productDetails={productDetails}
							selectedProductDetails={selectedProductDetails}
							handleOpenModal={handleOpenModal}
							classes={classes}
							convertPrice={convertPrice}
						/>
					) : (
						<></>
					)}
				</Box>
				{Boolean(selectedProductDetails) && productType === 'Fish' && selectedProductDetails.name !== 'Not Sure' ? (
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
							{selectedProductDetails.name}
						</Typography>
						<Typography variant='body2' component='div'>
							{selectedProductDetails.description}
						</Typography>
					</Box>
				) : (
					<></>
				)}
				{Boolean(selectedProductDetails) && productType !== 'Fish' ? (
					<ProductDetailsModal
						openModal={openModal}
						type={productType}
						selectedProductDetails={selectedProductDetails}
						handleCloseModal={handleCloseModal}
					/>
				) : (
					<></>
				)}
				{productType !== 'Final' ? (
					<Box display='flex' justifyContent='flex-end' pr={2.25} pt={2}>
						{productType !== 'Fish' ? (
							<CommonButton
								style={{ color: '#007DB4', marginRight: 20, textTransform: 'none' }}
								handleClick={handleGoBackClick}
								text={configs.goBack}
							/>
						) : (
							<></>
						)}
						{Boolean(selectedProductDetails) ? (
							<CommonButton
								style={{ backgroundColor: '#007DB4', color: '#ffffff', textTransform: 'none' }}
								handleClick={handleProductSelectionClick}
								text={configs.continue}
							/>
						) : (
							<CommonButton style={{ textTransform: 'none' }} disabled={true} text={'Continue'} />
						)}
					</Box>
				) : (
					<Box className='fish-care-main'>
						<Box style={{ marginRight: 20 }}>
							<Box className={classes.fishCare}>
								<Avatar
									className={classes.fishCareIcon}
									variant='circle'
									src={getFishCareOption('WEB-730007-FEB-21_BYT_test-your-water-regularly_1x')}
								/>
							</Box>
							<Typography style={{ color: 'red', textAlign: 'center', width: '100%' }}>
								{finalPageContent.fishCare1}
							</Typography>
						</Box>
						<Box style={{ marginRight: 20 }}>
							<Box className={classes.fishCare}>
								<Avatar
									className={classes.fishCareIcon}
									variant='circle'
									src={getFishCareOption('WEB-730007-FEB-21_BYT_remember-to-cycle-your-aquarium_1x')}
								/>
							</Box>
							<Typography style={{ color: 'red', textAlign: 'center', width: '100%' }}>
								{finalPageContent.fishCare2}
							</Typography>
						</Box>
						<Box style={{ marginRight: 20 }}>
							<Box className={classes.fishCare}>
								<Avatar
									className={classes.fishCareIcon}
									variant='circle'
									src={getFishCareOption('WEB-730007-FEB-21_BYT_rinse-off-decor-before-placing-in-tank_1x')}
								/>
							</Box>
							<Typography style={{ color: 'red', textAlign: 'center', width: '100%' }}>
								{finalPageContent.fishCare3}
							</Typography>
						</Box>
						<Box>
							<Box className={classes.fishCare}>
								<Avatar
									className={classes.fishCareIcon}
									variant='circle'
									src={getFishCareOption(
										'WEB-730007-FEB-21_BYT_do-not-add-bacteria-starter-until-you-start-adding-fish_1x'
									)}
								/>
							</Box>
							<Typography style={{ color: 'red', textAlign: 'center', width: '65%' }}>
								{finalPageContent.fishCare4}
							</Typography>
						</Box>
					</Box>
				)}
			</Box>
		</Fragment>
	);
};
