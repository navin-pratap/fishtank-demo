import React from 'react';
import { Box, Typography, MobileStepper, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useStyles } from './styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const TipsCarousel = (props) => {
	const { activeSliderStep, handleStepChange, tutorialSteps, maxSteps, handleBack, handleNext } = props;
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Box>
			<Box className={classes.tipsContainer}>
				<Box>
					<Button
						size='small'
						color='primary'
						className={classes.tipsButton}
						onClick={(event) => handleBack(event, 0)}
						disabled={activeSliderStep === 0}
					>
						{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
					</Button>
				</Box>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeSliderStep}
					autoplay={false}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{tutorialSteps.map((step, index) => (
						<Box key={`slider_${index}`} style={{ padding: 16 }}>
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
				<Box>
					<Button
						size='small'
						color='primary'
						className={classes.tipsButton}
						onClick={(event) => handleNext(event, 0)}
						disabled={activeSliderStep === maxSteps - 1}
					>
						{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</Button>
				</Box>
			</Box>
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
