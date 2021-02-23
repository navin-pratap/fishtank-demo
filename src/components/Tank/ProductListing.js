import React, { Fragment, useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { ProductDetailsModal } from './ProductDetailsModal';
import { CommonButton } from '../Common/CommonButton';
import { TankFilter } from './TankFilters';
import { FishDetails } from './FishDetails';
import { TankDetails } from './TankDetails';
import { AccessoriesDetails } from './AccessoriesDetails';
import { GravelDecorDetails } from './GravelDecorDetails';
import { CareDetails } from './CareDetails';
import { configs, SmallSKUList, MediumSKUList, LargeSKUList, SKUList, CustomFilter } from '../../config';

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
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Box>
						<Typography className={classes.rightPanelHeading} style={{ paddingLeft: 0 }}>
							{title}
						</Typography>
						<Typography variant='body2'>{subTitle}</Typography>
					</Box>
					{title === 'Select a tank' ? (
						<Box pr={3} className='tank-filters'>
							<TankFilter filterTankList={filterTankList} splitButtonClickType={splitButtonClickType} />
						</Box>
					) : (
						<></>
					)}
				</Box>
				{/* Selected Product List */}
				<Box
					style={{
						display: 'flex',
						justifyContent: productType === 'Fish' ? 'space-between' : 'flex-start',
						alignItems: 'center',
						paddingRight: 24,
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
						''
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
				{productType !== 'Final' && (
					<Box display='flex' justifyContent='flex-end' pr={2.25} pt={2}>
						{productType !== 'Fish' ? (
							<CommonButton
								style={{ color: '#007DB4', marginRight: 20 }}
								handleClick={handleGoBackClick}
								text={configs.goBack}
							/>
						) : (
							<></>
						)}
						{Boolean(selectedProductDetails) ? (
							<CommonButton
								style={{ backgroundColor: '#007DB4', color: '#ffffff' }}
								handleClick={handleProductSelectionClick}
								text={configs.continue}
							/>
						) : (
							<CommonButton disabled={true} text={'Continue'} />
						)}
					</Box>
				)}
			</Box>
		</Fragment>
	);
};
