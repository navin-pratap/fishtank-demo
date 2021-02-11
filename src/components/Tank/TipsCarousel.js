import React from 'react';
import { Box, Typography, MobileStepper } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useStyles } from './styles';
import { CommonButton } from '../Common/CommonButton';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const TipsCarousel = (props) => {
	const {
		activeSliderStep,
		handleStepChange,
		tutorialSteps,
		maxSteps,
		handleBack,
		handleNext,
		handleChangeTips,
	} = props;
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Box>
			<Box className={classes.tipsContainer}>
				<Box>
					<CommonButton
						size='small'
						color='primary'
						className={classes.tipsButton}
						handleClick={(event) => handleBack(event, 0)}
						disabled={activeSliderStep === 0}
						icon={theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
					/>
				</Box>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeSliderStep}
					autoplay={false}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{Boolean(tutorialSteps) &&
						tutorialSteps.length &&
						tutorialSteps.map((step, index) => (
							<Box key={`slider_${index}`} style={{ padding: 16 }}>
								{Math.abs(activeSliderStep - index) <= 2 ? (
									<Box display='flex' alignItems='center' justifyContent='space-between'>
										<Box display='flex' alignItems='center' style={{ textAlign: 'left' }}>
											<Typography
												component='div'
												style={{ width: 'calc(100% - 350px)', color: '#ffffff', fontWeight: 'bold', fontSize: 16 }}
											>
												{step.title}
											</Typography>
											<Typography component='div' variant='body1' style={{ marginLeft: 50, color: '#ffffff' }}>
												{step.label}
											</Typography>
										</Box>
										{step.imgPath ? <img className={classes.img} src={step.imgPath} alt={step.label} /> : ''}
									</Box>
								) : null}
							</Box>
						))}
				</AutoPlaySwipeableViews>
				<Box>
					<CommonButton
						size='small'
						color='primary'
						className={classes.tipsButton}
						handleClick={(event) => handleNext(event, 0)}
						disabled={activeSliderStep === maxSteps - 1}
						icon={theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					/>
				</Box>
			</Box>
			<MobileStepper
				variant=''
				steps={maxSteps}
				position='static'
				activeStep={activeSliderStep}
				className={classes.root}
				nextButton={
					Boolean(tutorialSteps) &&
					tutorialSteps.length &&
					tutorialSteps.map((_step, index) => (
						<Box
							className={`${classes.mobileStepper} ${activeSliderStep === index ? classes.activeStepper : ''}`}
							onClick={(event) => handleChangeTips(event, index)}
						/>
					))
				}
			/>
		</Box>
	);
};
