import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { CommonButton } from '../Common/CommonButton';

export const HeroBanner = (props) => {
	const { classes, handleBuildTankClick, isButtonVisible, imagePath } = props;

	return (
		<Grid
			container
			direction='column'
			justify='flex-end'
			alignItems='right'
			className={`banner-height ${classes.heroBanner}`}
			style={{
				backgroundImage: `url(${imagePath})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
			}}
		>
			<Grid item>
				<Box style={{ textAlign: 'center' }}>
					<Typography component='div' style={{ textAlign: 'center', color: '#ffffff', fontWeight: 'bold' }}>
						BUILD YOUR TANK
					</Typography>
					{isButtonVisible ? (
						<CommonButton
							variant='contained'
							className={classes.button}
							handleClick={handleBuildTankClick}
							text={'get started'}
						/>
					) : (
						<></>
					)}
				</Box>
			</Grid>
		</Grid>
	);
};

export const SmallHeroBanner = (props) => {
	const { classes, isVisible, imagePath, text } = props;
	return isVisible ? (
		<Box
			className={classes.banner}
			style={
				imagePath ? { backgroundImage: `url(${imagePath})` } : { background: '#F2F2F2 0% 0% no-repeat padding-box' }
			}
		>
			{text || ''}
		</Box>
	) : (
		<></>
	);
};
