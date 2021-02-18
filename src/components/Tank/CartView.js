import React, { Fragment } from 'react';
import { Box, Typography } from '@material-ui/core';
import { CommonButton } from '../Common/CommonButton';
import { configs } from '../../config';

export const CartView = (props) => {
	const { classes, selectedProducts, selectionType, getSubTotal } = props;

	return (
		<Box className={classes.rightPanel}>
			<Typography className={classes.rightPanelHeading}>{configs.buildYourTank.toLocaleLowerCase()}</Typography>
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
										{configs.edit}
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
										{configs.noProductText}
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
						{configs.subTotal}
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
					<CommonButton
						variant='contained'
						className={`${classes.button} ${classes.marginTop}`}
						style={{
							backgroundColor: selectionType === 'Final' ? '#007DB4' : '#F2F2F2',
							color: selectionType === 'Final' ? '#ffffff' : 'lightgray',
						}}
						text={configs.buildYourTank}
						fullWidth={true}
						disabled={selectionType !== 'Final'}
					/>
				</Box>
			</Box>
		</Box>
	);
};
