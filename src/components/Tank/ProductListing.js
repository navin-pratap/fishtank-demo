import React, { Fragment, useEffect, useState } from 'react';
import { Box, Typography, Avatar, Button, ButtonGroup } from '@material-ui/core';
import { useStyles } from './styles';
import { ProductDetailsModal } from './ProductDetailsModal';

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
	const [productDetails, setProductDetails] = useState(selectionBasedProductList);
	const [splitButtonClickType, setSplitButtonClickType] = useState(null);
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
		setSplitButtonClickType(filterType);
		setProductDetails(selectionBasedProductList.filter((item) => item.tankSize === filterType));
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
						<Box pr={3}>
							<ButtonGroup disableElevation variant='contained'>
								<Button
									onClick={(e) => filterTankList(e, 'small')}
									style={{
										backgroundColor: splitButtonClickType === 'small' ? '#007DB4' : '#F2F2F2',
										color: splitButtonClickType === 'small' ? '#ffffff' : 'lightgray',
									}}
								>
									Small
								</Button>
								<Button
									onClick={(e) => filterTankList(e, 'medium')}
									style={{
										backgroundColor: splitButtonClickType === 'medium' ? '#007DB4' : '#F2F2F2',
										color: splitButtonClickType === 'medium' ? '#ffffff' : 'lightgray',
									}}
								>
									Medium
								</Button>
								<Button
									onClick={(e) => filterTankList(e, 'large')}
									style={{
										backgroundColor: splitButtonClickType === 'large' ? '#007DB4' : '#F2F2F2',
										color: splitButtonClickType === 'large' ? '#ffffff' : 'lightgray',
									}}
								>
									Large
								</Button>
							</ButtonGroup>
						</Box>
					) : (
						<></>
					)}
				</Box>
				{/* Selected Product List */}
				<Box
					style={{
						display: 'flex',
						justifyContent: type === 'Fish' ? 'space-between' : 'flex-start',
						alignItems: 'center',
						paddingRight: 24,
						flexWrap: 'wrap',
					}}
				>
					{Boolean(productDetails) && productDetails.length ? (
						productDetails.map((item) => (
							<Box
								style={{
									width: type === 'Fish' ? 100 : 180,
									cursor: 'pointer',
									marginTop: 10,
									marginRight: type === 'Fish' ? 0 : 30,
									padding: type === 'Fish' ? 0 : 16,
									border: `${type === 'Fish' ? '0px' : '1px'} solid ${
										selectedProductDetails.id === item.id ? '#007DB4' : '#DDDDDD'
									}`,
								}}
								onClick={(e) => {
									type === 'Fish' ? handleProductSelection(e, item) : handleOpenModal(e, item);
								}}
							>
								<Box
									style={{
										padding: type === 'Fish' ? 8 : 0,
										display: 'flex',
										justifyContent: 'center',
										border: `${type === 'Fish' ? '1px' : '0px'} solid ${
											selectedProductDetails.id === item.id ? '#007DB4' : '#DDDDDD'
										}`,
									}}
								>
									{item.imageUrl ? (
										<Avatar
											style={type === 'Fish' ? { width: 85, height: 85 } : { width: 145, height: 145 }}
											variant='square'
											src={item.imageUrl}
										/>
									) : (
										<Box
											style={
												type === 'Fish'
													? { width: 85, height: 85, background: 'grey 0% 0% no-repeat padding-box' }
													: { width: 145, height: 145, background: 'grey 0% 0% no-repeat padding-box' }
											}
										></Box>
									)}
								</Box>
								<Typography variant='body2' style={{ textAlign: 'center', marginTop: 8 }}>
									{item.name}
								</Typography>
								{type !== 'Fish' ? (
									<Box mt={1} display='flex' alignItems='center' justifyContent='center'>
										<Typography
											variant='body2'
											color='error'
											style={{ fontWeight: 'bold', marginRight: 8 }}
										>{`$${convertPrice(item.price)}`}</Typography>
										<Typography
											variant='body2'
											color='textSecondary'
											style={{ fontWeight: 'bold', textDecoration: 'line-through' }}
										>{`$${convertPrice(item.oldPrice)}`}</Typography>
									</Box>
								) : (
									<></>
								)}
							</Box>
						))
					) : (
						<></>
					)}
				</Box>
				{Boolean(selectedProductDetails) && type === 'Fish' && selectedProductDetails.name !== 'Any Fish' ? (
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
				{Boolean(selectedProductDetails) && type !== 'Fish' ? (
					<ProductDetailsModal
						openModal={openModal}
						type={type}
						selectedProductDetails={selectedProductDetails}
						handleCloseModal={handleCloseModal}
					/>
				) : (
					<></>
				)}
				{type !== 'Final' && (
					<Box display='flex' justifyContent='flex-end' pr={2.25} pt={2}>
						{type !== 'Fish' ? (
							<Button style={{ color: '#007DB4', marginRight: 20 }} onClick={handleGoBackClick}>
								Go Back
							</Button>
						) : (
							<></>
						)}
						{Boolean(selectedProductDetails) ? (
							<Button style={{ backgroundColor: '#007DB4', color: '#ffffff' }} onClick={handleProductSelectionClick}>
								Continue
							</Button>
						) : (
							<Button disabled>Continue</Button>
						)}
					</Box>
				)}
			</Box>
		</Fragment>
	);
};
