import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { useStyles } from './styles';
import { CommonButton } from '../Common/CommonButton';
import { HeroBanner, SmallHeroBanner } from './HeroBanner';
import { configs } from '../../config';

export const Main = (props) => {
	const { handleBuildTankClick } = props;
	const classes = useStyles();

	return (
		<main>
			<HeroBanner
				imagePath={configs.dashboardMainHeroBanner}
				classes={classes}
				handleBuildTankClick={handleBuildTankClick}
				isButtonVisible={true}
			/>
			{configs.isSmallBannerVisible ? (
				<Box className={classes.bannerMain} mt={7}>
					<SmallHeroBanner classes={classes} text={'Banner'} isVisible={true} imagePath={''} />
					<SmallHeroBanner classes={classes} text={'Banner'} isVisible={true} imagePath={''} />
				</Box>
			) : (
				<></>
			)}
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
					<ReactPlayer className={classes.videoPlayer} url={configs.videoLink} />
				</Box>
			</Box>
		</main>
	);
};
