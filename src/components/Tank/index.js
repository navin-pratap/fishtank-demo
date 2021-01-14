import React from 'react';
import { Container, Box, Typography, Stepper, Step, StepButton, MobileStepper, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
	{
		title: 'Tips Tips',
		label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
		imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=215&h=170&q=60',
	},
	{
		title: 'Tips for Your Fish',
		label: 'Provide nutrition for your fish that has similar ingredients to what they would eat in the wild.',
		imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=215&h=170&q=60',
	},
	{
		title: 'Accessories Tips',
		label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
		imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=215&h=170&q=80',
	},
	{
		title: 'Gravel & Decor Tips',
		label: 'Use 1 to 1.5 lbs. of gravel per gallon of tank.',
		imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=215&h=170&q=60',
	},
	{
		title: 'Tank Care Tips',
		label: 'Use 1 to 1.5 lbs. of gravel per gallon of tank.',
		imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=215&h=170&q=60',
	},
];
const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});
export const Tank = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const [activeSliderStep, setActiveSliderStep] = React.useState(0);
	const [completed, setCompleted] = React.useState(new Set());
	const [skipped, setSkipped] = React.useState(new Set());
	const steps = ['Fish & Tank', 'Accessories', 'Gravel & Decor', 'Care'];
	const maxSteps = tutorialSteps.length;
	const isStepOptional = (step) => {
		return step === 1;
	};
	const isStepSkipped = (step) => {
		return skipped.has(step);
	};
	const handleStep = (step) => () => {
		setActiveStep(step);
	};
	const isStepComplete = (step) => {
		return completed.has(step);
	};
	const handleNext = () => {
		setActiveSliderStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveSliderStep((prevActiveStep) => prevActiveStep - 1);
	};
	const handleStepChange = (step) => {
		setActiveSliderStep(step);
	};

	return (
		<main>
			<Box>
				<Stepper alternativeLabel nonLinear activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps = {};
						const buttonProps = {};
						if (isStepOptional(index)) {
							buttonProps.optional = <Typography variant='caption'>Optional</Typography>;
						}
						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={label} {...stepProps}>
								<StepButton onClick={handleStep(index)} completed={isStepComplete(index)} {...buttonProps}>
									{label}
								</StepButton>
							</Step>
						);
					})}
				</Stepper>
			</Box>
			<Box style={{ paddingLeft: 115, paddingRight: 115 }}>
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
				<MobileStepper
					variant='dots'
					steps={maxSteps}
					position='static'
					activeStep={activeSliderStep}
					className={classes.root}
					nextButton={
						<Button size='small' onClick={handleNext} disabled={activeSliderStep === maxSteps - 1}>
							Next
							{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
						</Button>
					}
					backButton={
						<Button size='small' onClick={handleBack} disabled={activeSliderStep === 0}>
							{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
							Back
						</Button>
					}
				/>
			</Box>
		</main>
	);
};
