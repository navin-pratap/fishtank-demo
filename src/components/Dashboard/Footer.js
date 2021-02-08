import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { ArticlesDetails } from './ArticlesDetails';

export const Footer = (props) => {
	const { articlesData } = props;
	const classes = useStyles();

	return (
		<Grid item xs={12}>
			<Paper className={classes.footer}>
				<Container fixed>
					<Box display='flex' justifyContent='space-between' mb={2}>
						<Typography>Featured articles</Typography>
						<Typography style={{ color: '#007DB5', cursor: 'pointer' }}>View all</Typography>
					</Box>
					<Grid item xs={12}>
						<Grid container justify='center' spacing={2}>
							<ArticlesDetails articlesData={articlesData} classes={classes} />
						</Grid>
					</Grid>
				</Container>
			</Paper>
		</Grid>
	);
};
