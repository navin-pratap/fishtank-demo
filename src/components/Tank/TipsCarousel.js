import React from 'react';
import { Box, Typography, MobileStepper } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useStyles } from './styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const TipsCarousel = (props) => {
	const { activeSliderStep, handleStepChange, tutorialSteps, maxSteps } = props;
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Box>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeSliderStep}
				autoplay={false}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{tutorialSteps.map((step, index) => (
					<Box key={`slider_${index}`} style={{ padding: '16px 24px 16px 16px' }}>
						{Math.abs(activeSliderStep - index) <= 2 ? (
							<Box display='flex' alignItems='center' justifyContent='space-between'>
								<Box>
									<Typography variant='h4'>{step.title}</Typography>
									<Typography variant='body1'>{step.label}</Typography>
								</Box>
								{step.imgPath ? <img className={classes.img} src={step.imgPath} alt={step.label} /> : ''}
							</Box>
						) : null}
					</Box>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				variant='dots'
				steps={maxSteps}
				position='static'
				activeStep={activeSliderStep}
				className={classes.root}
			/>
		</Box>
	);
};
