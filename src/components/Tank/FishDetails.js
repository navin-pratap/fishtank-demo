import React, { Fragment } from 'react';
import { Avatar, Box, CircularProgress, Tooltip, Typography } from '@material-ui/core';

export const FishDetails = (props) => {
	const { productDetails, selectedProductDetails, handleProductSelection, classes } = props;

	return (
		<Fragment>
			{Boolean(productDetails) && productDetails.length ? (
				productDetails.map((item) => (
					<Box
						key={item.id}
						className='fish-details'
						style={{
							width: 100,
							cursor: 'pointer',
							marginTop: 10,
							marginRight: 0,
							padding: 0,
							border: 'none',
						}}
						onClick={(e) => handleProductSelection(e, item)}
					>
						<Box
							style={{
								padding: 8,
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: 'lightblue',
								borderRadius: 16,
								border: `1px solid ${selectedProductDetails.id === item.id ? '#007DB4' : '#DDDDDD'}`,
							}}
						>
							{item.imageUrl ? (
								<Avatar style={{ width: 85, height: 85 }} variant='square' src={item.imageUrl} />
							) : (
								<Box style={{ width: 85, height: 85, background: 'grey 0% 0% no-repeat padding-box' }}></Box>
							)}
						</Box>
						<Tooltip title={<div dangerouslySetInnerHTML={{ __html: item.name }} />}>
							<Typography variant='body2' className={classes.twoLine} style={{ textAlign: 'center', marginTop: 8 }}>
								<div dangerouslySetInnerHTML={{ __html: item.name }} />
							</Typography>
						</Tooltip>
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
