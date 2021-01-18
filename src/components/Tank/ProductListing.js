import React, { Fragment, useEffect, useState } from 'react';
import { Box, Typography, Avatar, Button } from '@material-ui/core';
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
	} = props;
	const classes = useStyles();
	const [openModal, setOpenModal] = useState(false);
	const [selectedProductDetails, setSelectedProductDetails] = useState(selectedProduct);
	useEffect(() => {
		setSelectedProductDetails(selectedProduct);
	}, [selectedProduct]);

	const handleOpenModal = (event, product) => {
		setSelectedProductDetails(product);
		setOpenModal(true);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<Fragment>
			<Box>
				<Box>
					<Typography className={classes.rightPanelHeading} style={{ paddingLeft: 0 }}>
						{title}
					</Typography>
					<Typography variant='body2'>{subTitle}</Typography>
				</Box>
				{/* Selected Product List */}
				<Box
					style={{
						display: 'flex',
						justifyContent: type === 'Fish' ? 'space-between' : 'flex-start',
						alignItems: 'center',
						marginTop: 10,
						paddingRight: 24,
						flexWrap: 'wrap',
					}}
				>
					{Boolean(selectionBasedProductList) && selectionBasedProductList.length ? (
						selectionBasedProductList.map((item) => (
							<Box
								style={{ cursor: 'pointer', marginRight: type === 'Fish' ? 0 : 30 }}
								onClick={(e) => {
									type === 'Fish' ? handleProductSelection(e, item) : handleOpenModal(e, item);
								}}
							>
								<Box
									style={{
										padding: 8,
										display: 'flex',
										justifyContent: 'center',
										border: `1px solid ${selectedProductDetails.id === item.id ? '#007DB4' : '#DDDDDD'}`,
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
				{Boolean(selectedProductDetails) && type === 'Tank' ? (
					<ProductDetailsModal
						openModal={openModal}
						type={type}
						selectedProductDetails={selectedProductDetails}
						handleCloseModal={handleCloseModal}
					/>
				) : (
					<></>
				)}
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
			</Box>
		</Fragment>
	);
};
