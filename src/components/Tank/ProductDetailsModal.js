import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Avatar, Box, AppBar, Tab, Tabs, Typography, Select, MenuItem } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { ProductImagesSlider } from './ProductImagesSlider';
import { CommonButton } from '../Common/CommonButton';
import { getTankImage } from '../../config';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 800,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(0, 0, 3, 2),
	},
	ratingMain: {
		'& .MuiRating-root': {
			color: '#007DB4',
		},
	},
	twoLine: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: '-webkit-box',
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
	},
}));

const a11yProps = (index) => ({
	id: `scrollable-auto-tab-${index}`,
	'aria-controls': `scrollable-auto-tabpanel-${index}`,
});

export const ProductDetailsModal = (props) => {
	const classes = useStyles();
	const { openModal, handleCloseModal, type, selectedProductDetails } = props;
	const [value, setValue] = React.useState(0);
	const [quantity, setQuantity] = React.useState(1);

	const handleQuantityChange = (event) => {
		setQuantity(event.target.value);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const TabPanel = (props) => {
		const { children, value, index, ...other } = props;

		return (
			<Box
				role='tabpanel'
				hidden={value !== index}
				id={`scrollable-auto-tabpanel-${index}`}
				aria-labelledby={`scrollable-auto-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box p={3}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</Box>
		);
	};
	const convertPrice = (price) => {
		return price ? price.toFixed(2) : 0;
	};

	return (
		<Modal
			open={openModal}
			onClose={handleCloseModal}
			aria-labelledby='Product details modal'
			aria-describedby='Product details modal'
			style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
		>
			<Box className={classes.paper}>
				<Box display='flex' justifyContent='flex-end'>
					<CommonButton handleClick={handleCloseModal} text={'X'} />
				</Box>
				<Box display='flex'>
					<Box>
						{type === 'Tank' ? (
							<Avatar
								style={{ width: 256, height: 256, marginLeft: 16 }}
								variant='square'
								src={
									type === 'Tank' ? getTankImage(selectedProductDetails.id, 'Modal') : selectedProductDetails.imageUrl
								}
							/>
						) : selectedProductDetails.imageUrl ? (
							<Avatar
								style={{ width: 256, height: 256, marginLeft: 16 }}
								variant='square'
								src={selectedProductDetails.imageUrl}
							/>
						) : (
							<Box
								style={{ width: 256, height: 256, marginLeft: 16, background: '#B2B2B2 0% 0% no-repeat padding-box' }}
							></Box>
						)}
						<Box display='flex' alignItems='center' justifyContent='center'>
							<ProductImagesSlider selectedProductDetails={selectedProductDetails} />
						</Box>
					</Box>
					<Box pl={3}>
						<Typography variant='h5' className={classes.twoLine} style={{ fontWeight: 'bold' }}>
							{selectedProductDetails.name}
						</Typography>
						<Box mt={1}>
							<Typography component='span'>By</Typography>
							<Typography component='span' color='primary' style={{ cursor: 'pointer' }}>{` ${
								type === 'Tank' ? selectedProductDetails.brand : selectedProductDetails.owner
							}`}</Typography>
						</Box>
						<Box mt={1} display='flex' alignItems='center' className={classes.ratingMain}>
							<Typography component='span'>Item</Typography>
							<Typography component='span' style={{ marginRight: 8 }}>{` #${selectedProductDetails.id}`}</Typography>
							<Rating
								name='product-rating'
								value={type === 'Tank' ? selectedProductDetails.c_bvAverageRating : selectedProductDetails.rating || 0}
								readOnly
								precision={0.5}
							/>
						</Box>
						<Box mt={1} display='flex' alignItems='center'>
							<Typography variant='h6' color='error' style={{ fontWeight: 'bold', marginRight: 8 }}>
								{type === 'Tank'
									? selectedProductDetails.c_pricing.formattedSale
									: `$${convertPrice(selectedProductDetails.price)}`}
							</Typography>
							<Typography
								variant='h6'
								color='textSecondary'
								style={{ fontWeight: 'bold', textDecoration: 'line-through' }}
							>
								{type === 'Tank'
									? selectedProductDetails.c_pricing.formattedStandard
									: `$${convertPrice(selectedProductDetails.oldPrice)}`}
							</Typography>
						</Box>
						<Box mt={1} display='flex' alignItems='center'>
							<Typography style={{ marginRight: 8 }}>SIze:</Typography>
							<Typography style={{ fontWeight: 'bold' }}>
								{type === 'Tank' ? selectedProductDetails.c_size : selectedProductDetails.size}
							</Typography>
						</Box>
						<Box mt={3}>
							<Select value={quantity} onChange={handleQuantityChange} label='' variant='outlined'>
								<MenuItem value={1}>Qty: 1</MenuItem>
								<MenuItem value={2}>Qty: 2</MenuItem>
								<MenuItem value={3}>Qty: 3</MenuItem>
								<MenuItem value={4}>Qty: 4</MenuItem>
								<MenuItem value={5}>Qty: 5</MenuItem>
							</Select>
						</Box>
						<Box mt={3}>
							<CommonButton
								handleClick={handleCloseModal}
								style={{ backgroundColor: '#007DB4', color: '#ffffff', padding: '6px 22px' }}
								text={'Select'}
							/>
						</Box>
					</Box>
				</Box>
				<Box
					mt={5}
					style={{
						height: 200,
						overflow: 'auto',
					}}
				>
					{type === 'Tank' ? (
						<div dangerouslySetInnerHTML={{ __html: selectedProductDetails.long_description }} />
					) : (
						<Fragment>
							<AppBar position='static' color='default'>
								<Tabs
									value={value}
									onChange={handleChange}
									indicatorColor='primary'
									textColor='primary'
									variant='scrollable'
									scrollButtons='auto'
									aria-label='Product details tabs'
								>
									<Tab label='Description' {...a11yProps(0)} />
								</Tabs>
							</AppBar>
							<TabPanel value={value} index={0}>
								{selectedProductDetails.description}
							</TabPanel>
						</Fragment>
					)}
				</Box>
			</Box>
		</Modal>
	);
};
