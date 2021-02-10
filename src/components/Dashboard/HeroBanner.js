import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { CommonButton } from '../Common/CommonButton';

export const HeroBanner = (props) => {
	const { classes, handleBuildTankClick, isButtonVisible, imagePath } = props;

	return (
		<Box className={classes.heroBanner} style={{ backgroundImage: `url(${imagePath})` }}>
			<Box style={{ textAlign: 'center' }}>
				<Typography variant='h2' component='div' style={{ textAlign: 'center', color: '#ffffff', fontWeight: 'bold' }}>
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
		</Box>
	);
};
