import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { useStyles } from './styles';
import { CommonButton } from '../Common/CommonButton';
import { HeroBanner } from './HeroBanner';

export const Main = (props) => {
	const { handleBuildTankClick } = props;
	const classes = useStyles();

	return (
		<main>
			<HeroBanner
				imagePath={'https://s7d2.scene7.com/is/image/PetSmart/WEB-730007-FEB-21_BYT_HERO_BANNER_1x'}
				classes={classes}
				handleBuildTankClick={handleBuildTankClick}
				isButtonVisible={true}
			/>
			<Box className={classes.bannerMain} mt={7}>
				<Box className={classes.banner}>Banner</Box>
				<Box className={classes.banner}>Banner</Box>
			</Box>
			<Box display='flex' mt={7}>
				<Box className={classes.secondBanner}>
					<Box>
						<Typography
							style={{
								fontSize: 24,
								letterSpacing: 0,
							}}
						>
							How to setup an aquarium
						</Typography>
						<Typography
							style={{
								fontSize: 16,
								letterSpacing: 0,
							}}
						>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
							et dolore magna.
						</Typography>
						<CommonButton
							variant='contained'
							className={`${classes.button} ${classes.marginTop}`}
							handleClick={handleBuildTankClick}
							text={'Build your tank'}
						/>
					</Box>
				</Box>
				<Box className={classes.secondBannerVideoPlayer}>
					<ReactPlayer className={classes.videoPlayer} url='https://youtu.be/0vYb9TcUo0Q' />
				</Box>
			</Box>
		</main>
	);
};
