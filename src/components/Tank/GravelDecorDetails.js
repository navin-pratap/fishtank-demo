import React, { Fragment } from 'react';
import { Avatar, Box, CircularProgress, Tooltip, Typography } from '@material-ui/core';
import { getTankImage } from '../../config';

export const GravelDecorDetails = (props) => {
	const { productDetails, selectedProductDetails, handleOpenModal, classes, convertPrice } = props;

	return (
		<Fragment>
			{Boolean(productDetails) && productDetails.length ? (
				productDetails.map((item, index) => (
					<Box
						className='custom-gravel-decor'
						key={`custom-gravel-decor_${index}_${item.id}`}
						style={{
							width: 135,
							cursor: 'pointer',
							marginTop: 10,
							marginRight: 30,
							padding: 16,
							border: `1px solid ${selectedProductDetails.id === item.id ? '#007DB4' : '#DDDDDD'}`,
						}}
						onClick={(e) => handleOpenModal(e, item)}
					>
						<Box
							style={{
								padding: 0,
								display: 'flex',
								justifyContent: 'center',
								border: 'none',
							}}
						>
							<Avatar style={{ width: 145, height: 145 }} variant='square' src={getTankImage(item.id, 'List')} />
							{/* {item.imageUrl ? (
								<Avatar style={{ width: 145, height: 145 }} variant='square' src={item.imageUrl} />
							) : (
								<Box style={{ width: 145, height: 145, background: 'grey 0% 0% no-repeat padding-box' }}></Box>
							)} */}
						</Box>
						<Tooltip title={<div dangerouslySetInnerHTML={{ __html: item.name }} />}>
							<Typography variant='body2' className={classes.twoLine} style={{ textAlign: 'center', marginTop: 8 }}>
								<div dangerouslySetInnerHTML={{ __html: item.name }} />
							</Typography>
						</Tooltip>
						<Box mt={1} display='flex' alignItems='center' justifyContent='center'>
							<Typography variant='body2' color='error' style={{ fontWeight: 'bold', marginRight: 8 }}>
								{item.c_pricing.formattedSale}
							</Typography>
							<Typography
								variant='body2'
								color='textSecondary'
								style={{ fontWeight: 'bold', textDecoration: 'line-through' }}
							>
								{item.c_pricing.formattedStandard}
							</Typography>
						</Box>
					</Box>
				))
			) : (
				<Box>
					<CircularProgress />
				</Box>
			)}
		</Fragment>
	);
};
