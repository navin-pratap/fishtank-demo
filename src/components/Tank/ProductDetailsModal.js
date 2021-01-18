import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Avatar, Box, Button, AppBar, Tab, Tabs, Typography, Select, MenuItem } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

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
	console.log(type, selectedProductDetails);

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
					<Button onClick={handleCloseModal}>X</Button>
				</Box>
				<Box display='flex'>
					<Box>
						{selectedProductDetails.imageUrl ? (
							<Avatar style={{ width: 256, height: 256 }} variant='square' src={selectedProductDetails.imageUrl} />
						) : (
							<Box style={{ width: 256, height: 256, background: '#B2B2B2 0% 0% no-repeat padding-box' }}></Box>
						)}
						<Box display='flex'>
							{Boolean(selectedProductDetails) &&
								selectedProductDetails.productImages &&
								selectedProductDetails.productImages.length &&
								selectedProductDetails.productImages.map((item, index) => (
									<Box pr={1} mt={1} key={`product-images-${index}`}>
										{item ? (
											<Avatar style={{ width: 80, height: 80 }} variant='square' src={item} />
										) : (
											<Box style={{ width: 80, height: 80, background: '#B2B2B2 0% 0% no-repeat padding-box' }}></Box>
										)}
									</Box>
								))}
						</Box>
					</Box>
					<Box pl={3}>
						<Typography variant='h5' style={{ fontWeight: 'bold' }}>
							{selectedProductDetails.name}
						</Typography>
						<Box mt={1}>
							<Typography component='span'>By</Typography>
							<Typography
								component='span'
								color='primary'
								style={{ cursor: 'pointer' }}
							>{` ${selectedProductDetails.owner}`}</Typography>
						</Box>
						<Box mt={1} display='flex' alignItems='center' className={classes.ratingMain}>
							<Typography component='span'>Item</Typography>
							<Typography component='span' style={{ marginRight: 8 }}>{` #${selectedProductDetails.id}`}</Typography>
							<Rating name='product-rating' value={selectedProductDetails.rating || 0} readOnly precision={0.5} />
						</Box>
						<Box mt={1} display='flex' alignItems='center'>
							<Typography variant='h6' color='error' style={{ fontWeight: 'bold', marginRight: 8 }}>{`$${convertPrice(
								selectedProductDetails.price
							)}`}</Typography>
							<Typography
								variant='h6'
								color='textSecondary'
								style={{ fontWeight: 'bold', textDecoration: 'line-through' }}
							>{`$${convertPrice(selectedProductDetails.oldPrice)}`}</Typography>
						</Box>
						<Box mt={1} display='flex' alignItems='center'>
							<Typography style={{ marginRight: 8 }}>SIze:</Typography>
							<Typography style={{ fontWeight: 'bold' }}>{selectedProductDetails.size}</Typography>
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
							<Button style={{ backgroundColor: '#007DB4', color: '#ffffff', padding: '6px 22px' }}>Select</Button>
						</Box>
					</Box>
				</Box>
				<Box mt={5}>
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
				</Box>
			</Box>
		</Modal>
	);
};
