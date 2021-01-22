import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
		backgroundColor: 'transparent',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	main: {
		'& .MuiStepper-root': {
			paddingLeft: theme.spacing(0),
			paddingRight: theme.spacing(0),
		},
		'& .MuiStepIcon-completed': {
			color: '#479F11',
		},
	},
	rightPanel: {
		minHeight: 410,
		border: '1px solid #DDDDDD',
		borderRadius: theme.spacing(0.5),
	},
	rightPanelHeading: {
		fontSize: '16px',
		fontWeight: 'bold',
		letterSpacing: 0,
		color: '#333333',
		paddingTop: theme.spacing(3),
		paddingLeft: theme.spacing(3),
	},
	productCart: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: theme.spacing(3),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(0),
	},
	linkColor: {
		color: '#007DB4',
		cursor: 'pointer',
	},
	heroBanner: {
		height: 200,
		background: '#F2F2F2 0% 0% no-repeat padding-box',
		margin: theme.spacing(2, 2, 2, 0),
		opacity: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tipsContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F2F2F2',
		marginRight: theme.spacing(3.75),
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
	},
	tipsButton: {
		padding: theme.spacing(0),
		minWidth: theme.spacing(4),
		backgroundColor: '#FFFFFF',
		color: '#007DB4',
		minHeight: theme.spacing(4),
		borderRadius: theme.spacing(3.125),
	},
}));
